"use server";

import { createClient } from "@/utils/supabase/server";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("contact").insert([
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      error: "Failed to submit message. Please try again later.",
    };
  }
}
