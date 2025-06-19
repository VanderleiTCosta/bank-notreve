
import { useCustomization } from '@/hooks/useCustomization';

interface CustomLogoProps {
  className?: string;
  showText?: boolean;
}

export const CustomLogo = ({ className = "", showText = true }: CustomLogoProps) => {
  const { settings } = useCustomization();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {settings.logoUrl ? (
        <img 
          src={settings.logoUrl} 
          alt="Logo" 
          className="w-10 h-10 object-contain"
          onError={(e) => {
            // Fallback to default logo if custom logo fails to load
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.classList.remove('hidden');
            }
          }}
        />
      ) : null}
      <div 
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${settings.logoUrl ? 'hidden' : ''}`}
        style={{ background: `linear-gradient(to right, ${settings.primaryColor}, ${settings.secondaryColor})` }}
      >
        <span className="text-white font-bold text-xl">R</span>
      </div>
      {showText && (
        <span className="text-white text-xl font-bold">Banco Rose</span>
      )}
    </div>
  );
};
