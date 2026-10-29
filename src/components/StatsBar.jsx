const formatTime = (s) => {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${String(r).padStart(2, "0")}`;
};

export default function StatsBar({ wpm, accuracy, errors, time }) {
  const items = [
    { label: "Speed", value: `${wpm} WPM`, color: "text-blue-600" },
    { label: "Accuracy", value: `${accuracy}%`, color: "text-green-600" },
    { label: "Errors", value: errors, color: "text-red-600" },
    { label: "Time", value: formatTime(time), color: "text-gray-800" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((it) => (
        <div key={it.label} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
          <div className={`text-xl font-bold ${it.color}`}>{it.value}</div>
          <div className="text-xs text-gray-500">{it.label}</div>
        </div>
      ))}
    </div>
  );
}