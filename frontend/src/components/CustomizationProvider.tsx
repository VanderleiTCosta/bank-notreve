
import { useCustomization } from '@/hooks/useCustomization';
import { ReactNode } from 'react';

interface CustomizationProviderProps {
  children: ReactNode;
}

export const CustomizationProvider = ({ children }: CustomizationProviderProps) => {
  // This component automatically loads and applies customization settings
  useCustomization();
  
  return <>{children}</>;
};
