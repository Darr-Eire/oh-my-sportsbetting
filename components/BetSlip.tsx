"use client";

import React, { useState } from "react";
import { useBetSlip } from "../context/BetSlipContext";

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
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Top toggle bar */}
      <div
        className="bg-[#10182f] border-t border-gray-700 text-white p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-sm">🧾 Bet Slip ({selections.length})</span>
        <span className="text-lg">{isOpen ? "▼" : "▲"}</span>
      </div>

      {/* The actual drawer */}
      <div
        className="w-full bg-[#0a1024] border-t border-gray-700 shadow-xl transition-transform duration-300"
        style={{
          height: isOpen ? "70vh" : "0",
          overflow: "hidden",
        }}
      >
        {/* Inner content */}
        <div className="p-2 flex justify-between items-center bg-[#10182f] border-b border-gray-600 text-white">
          <h2 className="font-semibold text-sm">Bet Slip</h2>
          <div className="flex gap-2">
            <button onClick={clearSelections} className="text-xs bg-red-600 px-2 py-1 rounded shadow hover:bg-red-700">
              Clear
            </button>
            <button onClick={() => setIsOpen(false)} className="text-lg font-bold text-red-400">×</button>
          </div>
        </div>

        <div className="p-2 overflow-y-auto" style={{ maxHeight: "calc(70vh - 50px)" }}>
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
}: any) {
  if (selections.length === 0) {
    return (
      <div className="p-3 text-center text-softText text-xs">
        Bet Slip is empty. Add selections.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {selections.map((selection: any) => (
          <div key={selection.id} className="bg-[#12182f] p-2 rounded border border-[#2a2a3d] text-xs">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-white">{selection.event}</span>
              <button onClick={() => removeSelection(selection.id)} className="text-red-400 text-sm font-bold">×</button>
            </div>
            <div className="flex justify-between text-softText mb-1">
              <span>{selection.type}</span>
              <span className="text-electricCyan font-bold">{selection.odds}</span>
            </div>
            <input
              type="number"
              placeholder="Stake"
              className="w-full p-1 rounded text-black font-bold border border-gray-400 mb-1"
              value={singleStakes[selection.id] ?? ""}
              onChange={(e) => handleSingleStakeChange(selection.id, e.target.value)}
            />
            <div className="flex justify-between text-softText">
              <span>Returns:</span>
              <span className="text-green-400 font-bold">{calculateSingleReturns(selection.id, selection.odds)} π</span>
            </div>
          </div>
        ))}
      </div>

      {selections.length >= 2 && (
        <>
          <div className="text-sm font-bold text-softText mt-2 mb-1">Multiples</div>
          <div className="bg-[#12182f] p-2 rounded border border-[#2a2a3d] text-xs">
            <div className="flex justify-between mb-1">
              <span className="text-white">{getMultipleLabel(selections.length)}</span>
              <span className="text-white font-bold">
                {(selections.reduce((acc: any, sel: any) => acc * sel.odds, 1) - 1).toFixed(2)}/1
              </span>
            </div>

            <input
              type="number"
              placeholder="Stake"
              className="w-full p-1 rounded text-black font-bold border border-gray-400 mb-1"
              value={multiStake || ""}
              onChange={(e) => setMultiStake(parseFloat(e.target.value) || 0)}
            />
            <div className="flex justify-between text-softText">
              <span>Returns:</span>
              <span className="text-green-400 font-bold">{calculateMultipleReturns()} π</span>
            </div>
          </div>
        </>
      )}

      <div className="mt-3">
        <button className="w-full bg-electricCyan hover:bg-cyan-400 text-black py-2 font-bold rounded shadow transition text-sm">
          Login & Place Bets
        </button>
      </div>
    </>
  );
}
