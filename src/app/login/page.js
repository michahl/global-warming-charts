import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <header className="w-full max-w-xl my-5 px-3">
        <Navbar />
      </header>
      <main className="flex-grow flex justify-center w-full">
        <Login />
      </main>
      <footer className="w-full max-w-xl">
        <Footer />
      </footer>
    </div>
  );
}
