import { createContext } from "react";

interface DeviceContextType {
  isDesktop: boolean;
}

export const DeviceContext = createContext<DeviceContextType>({
  isDesktop: true,
});
