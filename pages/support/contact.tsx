import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <InfoPageLayout
      title="Contact Support"
      description="Need help? Contact our 24/7 support team."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact Options</h2>
        <p className="text-gray-300">Live Chat available inside your dashboard.</p>
        <p className="text-gray-300">Email: support@ohmysportsbetting.com</p>
      </section>
    </InfoPageLayout>
  );
}
