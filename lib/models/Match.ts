import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  sport: { type: String, required: true },           // e.g., "Football"
  league: { type: String, required: true },          // e.g., "Premier League"
  teams: { type: String, required: true },           // e.g., "Liverpool vs Arsenal"
  time: { type: String, required: true },            // e.g., "Today 19:00"
  status: { type: String, default: "upcoming" },     // "upcoming", "live", "finished"

  odds: {
    home: { type: Number, required: true },          // Win odds for home team
    draw: { type: Number, required: true },          // Draw odds
    away: { type: Number, required: true },          // Away win odds
    over25: { type: Number, required: true },        // Over 2.5 goals
    under25: { type: Number, required: true },       // Under 2.5 goals
    btts: { type: Number, required: true }           // Both teams to score
  }
}, { timestamps: true });

export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
