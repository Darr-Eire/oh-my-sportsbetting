// global.d.ts
declare global {
  interface Window {
    Pi?: {
      wallet: {
        requestAccess: () => Promise<void>;
        makePiNetworkRequest: () => Promise<{ accessToken?: string }>;
      };
    };
  }
}
export {};
