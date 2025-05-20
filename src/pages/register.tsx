import Header from "@/components/Header";

export default function Register() {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Register for the Tournament</h2>
        <p className="mb-4">
          Start.gg registration can't load in an iframe locally.
          <br />
          <a
            href="https://www.start.gg/tournament/testbracket-2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Click here to register on Start.gg
          </a>
        </p>
      </div>
    </>
  );
}