import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Slicvidia",
  description:
    "Read Slicvidia's terms and conditions for using our services and website.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
