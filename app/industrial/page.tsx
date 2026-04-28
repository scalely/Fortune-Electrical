import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Industrial Electrical — Fortune Electrical",
  description:
    "Industrial electrical services across Victoria — three-phase power, machinery wiring, switchboards, and high-voltage installs. Built to withstand the toughest environments.",
};

export default function IndustrialPage() {
  return (
    <ServicePage
      label="Industrial"
      title={
        <>
          Industrial <em>Electrical</em>
        </>
      }
      intro="High-voltage systems, machinery wiring, three-phase power, and industrial fit-outs. Built to withstand the toughest environments."
      features={[
        { title: "Three-Phase Power", desc: "Design and installation for heavy machinery and equipment." },
        { title: "Switchboard Builds & Upgrades", desc: "Custom-built switchboards engineered for your load profile." },
        { title: "Machinery Wiring", desc: "Connect, relocate, and commission plant machinery safely." },
        { title: "High-Bay & Warehouse Lighting", desc: "Energy-efficient lighting for warehouses and factories." },
        { title: "Compliance Testing", desc: "Periodic testing and certification to keep operations compliant." },
        { title: "24/7 Breakdown Response", desc: "Priority callout for production downtime and faults." },
      ]}
    />
  );
}
