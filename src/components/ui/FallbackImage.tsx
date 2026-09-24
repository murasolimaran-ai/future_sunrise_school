import React, { useState } from 'react';
import { School } from 'lucide-react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  className?: string;
  containerClassName?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt = 'School image',
  fallbackText = 'Future Sunrise International School',
  className = 'w-full h-full object-cover',
  containerClassName = '',
  loading = 'lazy',
  ...props
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EFECE3] text-[#102A43] p-4 text-center select-none border border-[#102A43]/10 ${containerClassName || className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full bg-[#102A43]/10 flex items-center justify-center mb-2 text-[#D4A72C]">
          <School className="w-6 h-6" />
        </div>
        <span className="font-serif text-sm font-medium text-[#102A43] line-clamp-1">{fallbackText}</span>
        <span className="text-[11px] text-[#263238]/60 mt-0.5">Heritage Academic Campus</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};
