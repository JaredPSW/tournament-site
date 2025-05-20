import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome to the Tournament</h1>
          <p className="text-lg text-gray-300">
            Register, check the bracket, and follow live match updates all from this site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Register Now</h2>
          <p className="mb-4">
            Start.gg doesn{"'"}t allow embedding, but you can register directly at the link below:
          </p>
          <a
            href="https://www.start.gg/tournament/testbracket-2/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Start.gg Registration
          </a>
        </div>
      </div>
    </>
  );
}
