// This file provides type definitions for the API exposed by your preload script.
// It helps TypeScript understand `window.electronAPI` in your renderer code.

export interface IElectronAPI {
  getAppVersion: () => Promise<string>;
  // Add types for other exposed functions here
  // send: (channel: string, data: any) => void;
  // on: (channel: string, func: (...args: any[]) => void) => () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
