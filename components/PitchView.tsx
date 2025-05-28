// components/PitchView.tsx
export default function PitchView() {
  return (
    <div className="bg-gradient-to-b from-green-800 to-green-900 rounded-xl border border-[#2a2a3d] p-6 text-white">
      <h2 className="text-gold font-semibold text-lg text-center mb-4">Pitch View</h2>
      <div className="relative w-full h-64 bg-[#095e20] rounded-md flex items-center justify-center">
        <span className="text-sm text-white opacity-70">Pitch layout here – heatmap, zones, etc.</span>
      </div>
    </div>
  );
}
