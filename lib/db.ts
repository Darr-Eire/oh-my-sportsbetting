import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error("MONGODB_URI not set");

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Use globalThis instead of global for proper typing in Next.js
const globalCache = globalThis as typeof globalThis & { mongoose?: MongooseCache };

const cached: MongooseCache = globalCache.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "ohmysportsbook",
    });
  }

  cached.conn = await cached.promise;
  globalCache.mongoose = cached;
  return cached.conn;
}
