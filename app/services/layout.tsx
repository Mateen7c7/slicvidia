import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Slicvidia",
  description:
    "Explore our comprehensive digital solutions: Web Development, Software Engineering, Digital Marketing, Content Creation, and more. Designed to help your business scale.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
