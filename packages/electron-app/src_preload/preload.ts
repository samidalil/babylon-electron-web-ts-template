import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getAppVersion: (): Promise<string> => ipcRenderer.invoke("get-app-version"),
  // Example: send a message to main process
  // send: (channel: string, data: any) => ipcRenderer.send(channel, data),
  // Example: receive a message from main process
  // on: (channel: string, func: (...args: any[]) => void) => {
  //     const subscription = (_event: IpcRendererEvent, ...args: any[]) => func(...args);
  //     ipcRenderer.on(channel, subscription);
  //     return () => ipcRenderer.removeListener(channel, subscription); // Cleanup
  // }
});

console.log("Preload script executed.");
