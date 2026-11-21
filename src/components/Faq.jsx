export default function Faq({ items }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="bg-white border border-gray-200 rounded-lg p-4">
          <summary className="font-medium text-gray-900 cursor-pointer">{f.q}</summary>
          <p className="mt-2 text-sm text-gray-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
