// import fs from "fs";
// import path from "path";

// export async function GET() {
//   const imagePath = path.join(process.cwd(), "public/s1.jpeg");

//   try {
//     const imageBuffer = fs.readFileSync(imagePath);
//     return new Response(imageBuffer, {
//       status: 200,
//       headers: {
//         "Content-Type": "image/jpeg",
//         "Cache-Control": "public, max-age=31536000, immutable",
//       },
//     });
//   } catch {
//     return new Response("Image not found", { status: 404 });
//   }
// }

// import fs from "fs";
// import path from "path";

// export async function GET(request: Request) {
//   // 👉 Get query params
//   const { searchParams } = new URL(request.url);
//   const mail = searchParams.get("mail"); // ?mail=xxx

//   console.log("Mail:", mail);

//   const imagePath = path.join(process.cwd(), "public/s1.jpeg");

//   try {
//     const imageBuffer = fs.readFileSync(imagePath);

//     return new Response(imageBuffer, {
//       status: 200,
//       headers: {
//         "Content-Type": "image/jpeg",
//         "Cache-Control": "public, max-age=31536000, immutable",
//         // optional: send mail back as header
//         "X-User-Mail": mail ?? "not-provided",
//       },
//     });
//   } catch {
//     return new Response("Image not found", { status: 404 });
//   }
// }

import fs from "fs";
import path from "path";

type SendTelegramMessageParams = {
  token: string;
  chatId: string | number;
  text: string;
};

export async function sendTelegramMessage({
  token,
  chatId,
  text,
}: SendTelegramMessageParams): Promise<boolean> {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML", // optional
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Telegram API error:", error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Telegram send failed:", err);
    return false;
  }
}

export async function GET(request: Request) {
  // Query param
  const { searchParams } = new URL(request.url);
  const mail = searchParams.get("mail");

  console.log("Get request for image");

  // IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Device / browser
  const userAgent = request.headers.get("user-agent") || "unknown";

  // Approx location (Vercel only)
  const location = {
    country: request.headers.get("x-vercel-ip-country"),
    region: request.headers.get("x-vercel-ip-country-region"),
    city: request.headers.get("x-vercel-ip-city"),
  };

  console.log({
    mail,
    ip,
    userAgent,
    location,
  });

  const locationString =
    [location.city, location.region, location.country]
      .filter(Boolean)
      .join(", ") || "Unknown Location";

  const messageText = `
<b>🚀 Email Viewed</b>

<b>📧 Email:</b> <code>${mail || "N/A"}</code>
<b>🌐 IP:</b> <code>${ip}</code>
<b>📍 Location:</b> ${locationString}
<b>📱 Device:</b> <i>${userAgent}</i>
`.trim();

  await sendTelegramMessage({
    token: process.env.TELEGRAM_BOT_TOKEN!,
    chatId: process.env.TELEGRAM_CHAT_ID!,
    text: messageText,
  });

  const imagePath = path.join(process.cwd(), "public/s1.jpeg");

  try {
    const imageBuffer = fs.readFileSync(imagePath);

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "X-User-Mail": mail ?? "not-provided",
        "X-Client-IP": ip,
      },
    });
  } catch {
    return new Response("Image not found", { status: 404 });
  }
}

export const dynamic = "force-dynamic";
