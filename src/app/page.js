import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="w-full max-w-xl my-5 px-3">
        <Navbar />
      </header>
      <main className="flex-grow flex items-center justify-center">

      </main>
      <footer>

      </footer>
    </div>
  );
}
