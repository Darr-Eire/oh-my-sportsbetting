import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) throw new Error("MONGODB_URI not set");

const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } =
  (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  cached.promise = mongoose.connect(MONGODB_URI, {
    dbName: "ohmysportsbook",
  });

  cached.conn = await cached.promise;
  return cached.conn;
}
