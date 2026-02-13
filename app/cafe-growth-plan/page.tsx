import { Metadata } from "next";
import CafeGrowthPlanClient from "./CafeGrowthPlanClient";

export const metadata: Metadata = {
  title: "Cafe Growth Plan | Slicvidia Resources",
  description:
    "Download our exclusive Cafe Growth Plan PDF to scale your business with smart digital solutions.",
  openGraph: {
    title: "Cafe Growth Plan | Slicvidia Resources",
    description:
      "Get the blueprint for your cafe's success with Slicvidia's expert growth strategies.",
    type: "article",
    url: "https://slicvidia.com/cafe-growth-plan",
  },
};

export default function CafeGrowthPlanPage() {
  return <CafeGrowthPlanClient />;
}
