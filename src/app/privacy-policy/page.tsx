import type { Metadata } from "next";
import { DocumentPage } from "@/components/layout/DocumentPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the information you share with us.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <DocumentPage title="Privacy Policy">
      <p>
        Our full statement on how {site.name} collects, uses and protects the information you share with us is being
        finalised and will be published here before launch.
      </p>
      <p>
        Details submitted through the Schedule a Call form are used only to arrange and prepare for that conversation.
        They are never sold or shared with third parties.
      </p>
    </DocumentPage>
  );
}
