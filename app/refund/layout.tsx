import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Slicvidia",
  description:
    "Read Slicvidia's refund policy regarding our digital services and solutions.",
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
