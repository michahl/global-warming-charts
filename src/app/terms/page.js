'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const email = 'legal@site.com'

export default function TermsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <header className="w-full max-w-xl my-5 px-3">
        <Navbar />
      </header>
      <main className="flex-grow flex justify-center w-full">
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="text-3xl font-semibold mb-1">Terms of Use for Green Habit</h1>
            <p className="mb-4"><strong>Effective Date:</strong> 5th Oct 2024</p>
            <div className="border-t border-zinc-500/30 my-3"/>
            <p className="mb-4">
            Welcome to the Green Habit! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mb-2">2. Modifications to Terms</h2>
            <p className="mb-4">
            We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on this page. Your continued use of our services after changes are posted constitutes your acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
            <p className="mb-4">
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use of the services. This includes not engaging in any unlawful or harmful behavior.
            </p>

            <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
            <p className="mb-4">
            All content on our website, including text, graphics, logos, and software, is the property of Carbon Footprint Tracker or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mb-2">5. Disclaimer of Warranties</h2>
            <p className="mb-4">
            Our services are provided on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted, secure, or free of errors. Your use of our services is at your own risk.
            </p>

            <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
            <p className="mb-4">
            To the fullest extent permitted by law, Carbon Footprint Tracker shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any content provided therein.
            </p>

            <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
            <p className="mb-4">
            These Terms of Use shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved in the competent courts of [Your Jurisdiction].
            </p>

            <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
            <p className="mb-4">
            If you have any questions or concerns about these Terms of Use, please contact us at:
            </p>
            <p className="mb-2"><strong>Email:</strong> <a className="link" href={`mailto:${email}`}>{email}</a></p>
            <p><strong>Website:</strong> {window.location.host}</p>

        </div>
      </main>
      <footer className="w-full max-w-xl">
        <Footer />
      </footer>
    </div>
  );
}
