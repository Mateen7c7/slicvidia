import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Slicvidia",
  description:
    "Learn more about Slicvidia, our mission, values, and how we help businesses grow through smart digital solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
