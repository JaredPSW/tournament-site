import Header from "@/components/Header";

export default function Bracket() {
  return (
    <>
      <Header />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Live Bracket</h2>
        <iframe
          src="https://start.gg/tournament/YOUR-TOURNAMENT-SLUG/events/YOUR-EVENT/brackets/embed"
          width="100%"
          height="700"
          frameBorder="0"
          title="Live Bracket"
        ></iframe>
      </div>
    </>
  );
}