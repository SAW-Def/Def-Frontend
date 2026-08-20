import type { Metadata } from "next";
import { DocumentPage } from "@/components/layout/DocumentPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern use of the ${site.name} website and platform.`,
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <DocumentPage title="Terms & Conditions">
      <p>
        The terms that govern use of the {site.name} website and platform are being finalised with our legal advisers
        and will be published here before launch.
      </p>
    </DocumentPage>
  );
}
