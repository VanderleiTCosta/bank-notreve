
import { useState, useEffect } from 'react';

interface CustomizationSettings {
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
}

const defaultSettings: CustomizationSettings = {
  primaryColor: '#8b5cf6',
  secondaryColor: '#ec4899',
  logoUrl: ''
};

export const useCustomization = () => {
  const [settings, setSettings] = useState<CustomizationSettings>(defaultSettings);

  useEffect(() => {
    // Load settings from localStorage
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    const savedSecondaryColor = localStorage.getItem('secondaryColor');
    const savedLogoUrl = localStorage.getItem('logoUrl');

    if (savedPrimaryColor || savedSecondaryColor || savedLogoUrl) {
      setSettings({
        primaryColor: savedPrimaryColor || defaultSettings.primaryColor,
        secondaryColor: savedSecondaryColor || defaultSettings.secondaryColor,
        logoUrl: savedLogoUrl || defaultSettings.logoUrl
      });
    }
  }, []);

  useEffect(() => {
    // Apply colors to CSS custom properties
    const root = document.documentElement;
    
    // Convert hex to HSL for CSS variables
    const hexToHsl = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
    };

    // Apply primary color
    root.style.setProperty('--primary', hexToHsl(settings.primaryColor));
    
    // Apply secondary color as accent
    root.style.setProperty('--accent', hexToHsl(settings.secondaryColor));
    
    // Create gradient for backgrounds
    root.style.setProperty('--custom-gradient', `linear-gradient(to right, ${settings.primaryColor}, ${settings.secondaryColor})`);
    
  }, [settings]);

  const updateSettings = (newSettings: Partial<CustomizationSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    
    // Save to localStorage
    if (newSettings.primaryColor) localStorage.setItem('primaryColor', newSettings.primaryColor);
    if (newSettings.secondaryColor) localStorage.setItem('secondaryColor', newSettings.secondaryColor);
    if (newSettings.logoUrl) localStorage.setItem('logoUrl', newSettings.logoUrl);
  };

  return { settings, updateSettings };
};
