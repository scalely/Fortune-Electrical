import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Data, Communications, Security & Access Control — Fortune Electrical",
  description:
    "Structured cabling, NBN, fibre, CCTV, access control, intercoms, alarms, and AV automation across Melbourne. Fast, reliable, and intelligently designed.",
};

export default function DataCommsSecurityPage() {
  return (
    <ServicePage
      label="Data, Communications, Security/Access Control"
      title={
        <>
          Data, Communications, Security &<br />
          <em>Access Control</em>
        </>
      }
      intro="Structured cabling, networking, CCTV, intercoms, access control, alarms, and AV automation — all delivered to a premium standard by our trusted specialist network."
      features={[
        { title: "Structured Cabling", desc: "Cat6 / Cat6A / fibre installs for offices, factories, and homes." },
        { title: "NBN & Networking", desc: "NBN connections, switches, Wi-Fi access points, and server-room work." },
        { title: "CCTV Systems", desc: "HD and 4K camera systems with remote monitoring and cloud storage." },
        { title: "Access Control", desc: "Key-fob, swipe-card, and mobile-credential access for any door." },
        { title: "Intercoms", desc: "Audio and video intercoms — single dwellings through multi-tenant buildings." },
        { title: "Alarm Systems", desc: "Back-to-base monitored alarms with smart-app integration." },
        { title: "AV & Home Theatre", desc: "Multi-room audio, home cinema, and smart-home automation." },
        { title: "Building Automation", desc: "Integrate lighting, blinds, HVAC, and security on one platform." },
      ]}
    />
  );
}
