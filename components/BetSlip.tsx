"use client";

import React, { useState } from "react";
import { useBetSlip } from "../context/BetSlipContext";

type Selection = { id: string; event: string; type: string; odds: number };

interface SlipContentProps {
  selections: Selection[];
  singleStakes: Record<string, number>;
  multiStake: number;
  handleSingleStakeChange: (id: string, value: string) => void;
  setMultiStake: (value: number) => void;
  removeSelection: (id: string) => void;
  calculateSingleReturns: (id: string, odds: number) => string;
  calculateMultipleReturns: () => string;
}

// Utility function for multiples label
function getMultipleLabel(count: number): string {
  if (count === 2) return "Double";
  if (count === 3) return "Treble";
  return `${count}-Fold`;
}

export default function BetSlip() {
  const { selections, removeSelection, clearSelections } = useBetSlip();
  const [singleStakes, setSingleStakes] = useState<Record<string, number>>({});
  const [multiStake, setMultiStake] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSingleStakeChange = (id: string, value: string) => {
    const stake = parseFloat(value);
    setSingleStakes(prev => ({ ...prev, [id]: isNaN(stake) ? 0 : stake }));
  };

  const calculateSingleReturns = (id: string, odds: number): string => {
    const stake = singleStakes[id] || 0;
    return (stake * odds).toFixed(2);
  };

  const calculateMultipleReturns = (): string => {
    if (selections.length < 2) return "0.00";
    const accOdds = selections.reduce((acc, sel) => acc * sel.odds, 1);
    return (multiStake * accOdds).toFixed(2);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div
        className="bg-[#141f3c] border-t border-[#00c6ff] text-white p-3 flex justify-between items-center cursor-pointer shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-sm">🧾 Bet Slip ({selections.length})</span>
        <span className="text-lg">{isOpen ? "▼" : "▲"}</span>
      </div>

      <div
        className="w-full bg-[#0b132b] border-t border-[#00c6ff] shadow-xl transition-transform duration-300"
        style={{ height: isOpen ? "72vh" : "0", overflow: "hidden" }}
      >
        <div className="p-3 flex justify-between items-center bg-[#141f3c] border-b border-[#00c6ff] text-white">
          <h2 className="font-semibold text-sm">Bet Slip</h2>
          <div className="flex gap-2">
            <button onClick={clearSelections} className="text-xs bg-red-500 px-2 py-1 rounded shadow hover:bg-red-600">Clear</button>
            <button onClick={() => setIsOpen(false)} className="text-lg font-bold text-red-400">×</button>
          </div>
        </div>

        <div className="p-3 overflow-y-auto" style={{ maxHeight: "calc(72vh - 60px)" }}>
          <SlipContent
            selections={selections}
            singleStakes={singleStakes}
            multiStake={multiStake}
            handleSingleStakeChange={handleSingleStakeChange}
            setMultiStake={setMultiStake}
            removeSelection={removeSelection}
            calculateSingleReturns={calculateSingleReturns}
            calculateMultipleReturns={calculateMultipleReturns}
          />
        </div>
      </div>
    </div>
  );
}

function SlipContent({
  selections,
  singleStakes,
  multiStake,
  handleSingleStakeChange,
  setMultiStake,
  removeSelection,
  calculateSingleReturns,
  calculateMultipleReturns,
}: SlipContentProps) {
  if (selections.length === 0) {
    return (
      <div className="p-3 text-center text-gray-400 text-xs">
        Your bet slip is empty. Add selections to get started.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {selections.map(selection => (
          <div key={selection.id} className="bg-gradient-to-tr from-[#1c2b4a] to-[#0b132b] p-3 rounded-xl border border-[#00c6ff] text-xs shadow-md">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-white">{selection.event}</span>
              <button onClick={() => removeSelection(selection.id)} className="text-red-400 text-sm font-bold">×</button>
            </div>
            <div className="flex justify-between text-gray-300 mb-2">
              <span>{selection.type}</span>
              <span className="text-[#00ffd5] font-bold">{selection.odds}</span>
            </div>
            <input
              type="number"
              placeholder="Stake"
              className="w-full p-2 rounded-md text-black font-bold border border-gray-400 mb-2"
              value={singleStakes[selection.id] ?? ""}
              onChange={(e) => handleSingleStakeChange(selection.id, e.target.value)}
            />
            <div className="flex justify-between text-gray-300">
              <span>Returns:</span>
              <span className="text-green-400 font-bold">{calculateSingleReturns(selection.id, selection.odds)} π</span>
            </div>
          </div>
        ))}
      </div>

      {selections.length >= 2 && (
        <>
          <div className="text-sm font-bold text-[#7ee8fa] mt-4 mb-2">Multiples</div>
          <div className="bg-gradient-to-tr from-[#1c2b4a] to-[#0b132b] p-3 rounded-xl border border-[#00c6ff] text-xs shadow-md">
            <div className="flex justify-between mb-2">
              <span className="text-white">{getMultipleLabel(selections.length)}</span>
              <span className="text-white font-bold">
                {(selections.reduce((acc, sel) => acc * sel.odds, 1) - 1).toFixed(2)}/1
              </span>
            </div>

            <input
              type="number"
              placeholder="Stake"
              className="w-full p-2 rounded-md text-black font-bold border border-gray-400 mb-2"
              value={multiStake || ""}
              onChange={(e) => setMultiStake(parseFloat(e.target.value) || 0)}
            />
            <div className="flex justify-between text-gray-300">
              <span>Returns:</span>
              <span className="text-green-400 font-bold">{calculateMultipleReturns()} π</span>
            </div>
          </div>
        </>
      )}

      <div className="mt-5">
        <button className="w-full bg-gradient-to-r from-[#00ffd5] to-[#005eff] text-black py-3 font-bold rounded-2xl shadow-xl transition text-base hover:scale-105">
          Login & Place Bets
        </button>
      </div>
    </>
  );
}
