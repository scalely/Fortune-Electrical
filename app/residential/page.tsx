import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Residential Electrical — Fortune Electrical",
  description:
    "Residential electrical services across Melbourne — new builds, renovations, switchboard upgrades, lighting, and power. Premium finishes for premium homes.",
};

export default function ResidentialPage() {
  return (
    <ServicePage
      label="Residential"
      title={
        <>
          Residential <em>Electrical</em>
        </>
      }
      intro="From a single power point to a full home rewire — we deliver clean, code-compliant electrical work that lasts. Premium finishes for premium homes across Melbourne."
      features={[
        { title: "New Builds", desc: "Full electrical fit-outs for new homes — wired right from day one." },
        { title: "Renovations & Extensions", desc: "Upgrade and extend without disruption. Tidy work, on schedule." },
        { title: "Switchboard Upgrades", desc: "Modernise old fuse boards to safer, higher-capacity switchboards." },
        { title: "Lighting Design", desc: "Downlights, feature lighting, and LED upgrades inside and out." },
        { title: "Power Points & USB Outlets", desc: "Add, relocate, or replace outlets — including modern USB-C points." },
        { title: "Safety Inspections", desc: "Test, tag, and certify your home is safe and to current standards." },
      ]}
    />
  );
}
