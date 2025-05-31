"use client";

import React, { useState } from "react";
import { useBetSlip } from "../context/BetSlipContext";

interface Selection {
  id: string;
  event: string;
  type: string;
  odds: number;
}

function getMultipleLabel(count: number) {
  if (count === 2) return "Double";
  if (count === 3) return "Treble";
  return `${count}-Fold`;
}

export default function BetSlip() {
  const { selections, removeSelection, clearSelections } = useBetSlip();
  const [singleStakes, setSingleStakes] = useState<{ [key: string]: number }>({});
  const [multiStake, setMultiStake] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSingleStakeChange = (id: string, value: string) => {
    const stake = parseFloat(value);
    setSingleStakes((prev) => ({ ...prev, [id]: isNaN(stake) ? 0 : stake }));
  };

  const calculateSingleReturns = (id: string, odds: number) => {
    const stake = singleStakes[id] || 0;
    return (stake * odds).toFixed(2);
  };

  const calculateMultipleReturns = () => {
    if (selections.length < 2) return "0.00";
    const accOdds = selections.reduce((acc, sel) => acc * sel.odds, 1);
    return (multiStake * accOdds).toFixed(2);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div
          className="bg-[#10182f] border-t border-gray-700 text-white p-2 flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold text-sm">🧾 Bet Slip ({selections.length})</span>
          <span className="text-lg">{isOpen ? "▼" : "▲"}</span>
        </div>

        <div
          className="fixed left-0 bottom-0 w-full h-[80vh] bg-[#0a1024] border-t border-gray-700 z-50 shadow-xl"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(80vh)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="p-2 flex justify-between items-center bg-[#10182f] border-b border-gray-600 text-white">
            <h2 className="font-semibold text-base">🧾 Bet Slip</h2>
            <button onClick={() => clearSelections()} className="text-xs bg-red-600 px-2 py-1 rounded shadow hover:bg-red-700">Clear</button>
          </div>

          <div className="p-2 overflow-y-auto h-full">
            {selections.length === 0 ? (
              <div className="text-softText text-center">Your Bet Slip is empty.</div>
            ) : (
              <>
                <h3 className="text-sm font-bold text-softText mb-2">Singles</h3>
                <div className="space-y-2">
                  {selections.map((selection: Selection) => (
                    <div key={selection.id} className="bg-[#12182f] p-2 rounded shadow border border-[#2a2a3d]">
                      <div className="flex justify-between">
                        <span className="text-white text-sm font-semibold">{selection.event}</span>
                        <button onClick={() => removeSelection(selection.id)} className="text-red-400 font-bold">×</button>
                      </div>
                      <div className="flex justify-between text-xs text-softText my-1">
                        <span>{selection.type}</span>
                        <span className="text-electricCyan font-bold">{selection.odds.toFixed(2)}</span>
                      </div>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full p-2 rounded text-black font-bold border border-gray-400 mb-2"
                        value={singleStakes[selection.id] ?? ""}
                        onChange={(e) => handleSingleStakeChange(selection.id, e.target.value)}
                      />
                      <div className="flex justify-between text-xs text-softText">
                        <span>Returns:</span>
                        <span className="text-green-400 font-bold">{calculateSingleReturns(selection.id, selection.odds)} π</span>
                      </div>
                    </div>
                  ))}
                </div>

                {selections.length >= 2 && (
                  <>
                    <h3 className="text-sm font-bold text-softText mt-4 mb-2">Multiples</h3>
                    <div className="bg-[#12182f] p-2 rounded shadow border border-[#2a2a3d]">
                      <div className="flex justify-between mb-1 text-white text-sm font-semibold">
                        <div>{getMultipleLabel(selections.length)}</div>
                        <div>{(selections.reduce((acc, sel) => acc * sel.odds, 1) - 1).toFixed(2)}/1</div>
                      </div>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full p-2 rounded text-black font-bold border border-gray-400 mb-2"
                        value={multiStake || ""}
                        onChange={(e) => setMultiStake(parseFloat(e.target.value) || 0)}
                      />
                      <div className="flex justify-between text-xs text-softText">
                        <span>Returns:</span>
                        <span className="text-green-400 font-bold">{calculateMultipleReturns()} π</span>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
