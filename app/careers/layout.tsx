import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Slicvidia Team",
  description:
    "Explore career opportunities at Slicvidia. Join a team of passionate developers, designers, and marketers building the future of digital solutions.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
