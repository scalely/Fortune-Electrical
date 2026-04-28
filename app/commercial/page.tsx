import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Electrical — Fortune Electrical",
  description:
    "Commercial electrical services in Melbourne — office fit-outs, retail, hospitality, and strata. Delivered on time, on budget, with zero disruption to operations.",
};

export default function CommercialPage() {
  return (
    <ServicePage
      label="Commercial"
      title={
        <>
          Commercial <em>Electrical</em>
        </>
      }
      intro="Office fit-outs, retail spaces, hospitality venues, and strata. We deliver on time, on budget, with zero disruption to your operations."
      features={[
        { title: "Office Fit-Outs", desc: "Power, data, and lighting designed around how your team works." },
        { title: "Retail & Hospitality", desc: "Display lighting, POS power, and back-of-house systems done right." },
        { title: "Strata & Body Corporate", desc: "Common-area maintenance, upgrades, and emergency callouts." },
        { title: "Emergency & Exit Lighting", desc: "Compliant installations and scheduled testing to AS 2293." },
        { title: "Energy-Efficient Lighting", desc: "LED retrofits and lighting controls that cut running costs." },
        { title: "Maintenance Contracts", desc: "Planned preventative maintenance with priority response." },
      ]}
    />
  );
}
