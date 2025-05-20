import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Tournament</h1>
        <p className="mb-4">
          Register, check the bracket, and follow the live matches.
        </p>
      </div>
    </>
  );
}
