import Header from "@/components/Header";

export default function Rules() {
  return (
    <>
      <Header />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Tournament Rules</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Double elimination format</li>
          <li>Best of 3 until Top 8 (then Best of 5)</li>
          <li>No coaching during sets</li>
          <li>Bring your own controller</li>
          <li>Tardiness of 5+ minutes results in DQ</li>
        </ul>
      </div>
    </>
  );
}