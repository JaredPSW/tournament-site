import Header from "@/components/Header";

export default function Register() {
  return (
    <>
      <Header />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Register for the Tournament</h2>
        <iframe
          src="https://www.start.gg/tournament/testbracket-2/register"
          width="100%"
          height="800"
          frameBorder="0"
          title="Register"
        ></iframe>
      </div>
    </>
  );
}
