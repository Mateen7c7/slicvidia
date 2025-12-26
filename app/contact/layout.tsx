import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Slicvidia",
  description:
    "Get in touch with Slicvidia for custom web development, software solutions, and digital marketing inquiries. Let's build something great together.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
