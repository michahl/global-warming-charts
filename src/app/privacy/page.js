'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const email = 'legal@site.com'
export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <header className="w-full max-w-xl my-5 px-3">
        <Navbar />
      </header>
      <main className="flex-grow flex justify-center w-full">
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="text-3xl font-semibold mb-1">Privacy Policy</h1>
            <p className="mb-4"><strong>Effective Date:</strong> 5th Oct 2024</p>
            <div className="border-t border-zinc-500/30 my-3"/>
            <p className="mb-4">
            At Green Habit, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <ul className="list-disc list-inside mb-4">
            <li><strong>Personal Information:</strong> When you create an account, we collect personal information such as your name, email address, and profile information.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on our site.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">
            We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-4">
            <li>To provide and maintain our services</li>
            <li>To improve, personalize, and expand our website</li>
            <li>To analyze how you use our services</li>
            <li>To communicate with you, including sending updates and promotional materials</li>
            <li>To process your transactions and manage your account</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
            <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
            <li>With service providers who assist us in operating our website and providing our services (e.g., payment processors)</li>
            <li>To comply with legal obligations or protect our rights</li>
            <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p className="mb-4">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
            <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside mb-4">
            <li>The right to access, correct, or delete your personal information</li>
            <li>The right to object to or restrict the processing of your personal information</li>
            <li>The right to data portability</li>
            </ul>
            <p className="mb-4">
            To exercise these rights, please contact us at [Your Contact Email].
            </p>

            <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
            <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
            <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
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
