import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Slicvidia",
  description:
    "Read Slicvidia's privacy policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
