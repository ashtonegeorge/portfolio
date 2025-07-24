import DigitalTwinClient from "@/components/DigitalTwinClient";

export const metadata = {
  title: "Ashton George - My Digital Twin",
  description: "Digital Twin of Ashton George - Full Stack Developer and Creator.",
  images: ["https://www.ashtonegeorge.com/og-image.png"]
};

export default function DigitalTwin() {
    return (
        <>
            <DigitalTwinClient />
        </>
    )
}