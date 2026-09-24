import React from 'react';

interface SocialIconProps {
  className?: string;
  size?: number;
}

/**
 * Official recognizable brand SVGs.
 * Never recolored to school gold/navy per specifications.
 */

export const InstagramIcon: React.FC<SocialIconProps> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <path
      d="M12 5.838c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      fill="#FFFFFF"
    />
  </svg>
);

export const YouTubeIcon: React.FC<SocialIconProps> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path
      d="M20.62 8.44a1.88 1.88 0 0 0-1.32-1.33C18.13 6.8 12 6.8 12 6.8s-6.13 0-7.3.31A1.88 1.88 0 0 0 3.38 8.44 19.8 19.8 0 0 0 3.07 12c0 1.2.1 2.39.31 3.56a1.88 1.88 0 0 0 1.32 1.33c1.17.31 7.3.31 7.3.31s6.13 0 7.3-.31a1.88 1.88 0 0 0 1.32-1.33c.21-1.17.31-2.36.31-3.56s-.1-2.39-.31-3.56zM10.2 14.28V9.72L14.4 12l-4.2 2.28z"
      fill="#FFFFFF"
    />
  </svg>
);

export const FacebookIcon: React.FC<SocialIconProps> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path
      d="M16.5 12.07h-2.3v7.93h-3.27v-7.93H9.2v-2.77h1.73V7.52c0-1.72 1.05-2.66 2.58-2.66.73 0 1.5.13 1.5.13v1.65h-.85c-.85 0-1.12.53-1.12 1.07v1.62h2.73l-.27 2.74z"
      fill="#FFFFFF"
    />
  </svg>
);

export const LinkedInIcon: React.FC<SocialIconProps> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <path
      d="M7.4 18.5H4.8v-8.2h2.6v8.2zM6.1 9.2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12.9 9.3h-2.6v-4.1c0-1-.02-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.2h-2.6v-8.2h2.5v1.1h.04c.35-.66 1.2-1.36 2.5-1.36 2.67 0 3.16 1.76 3.16 4.05v4.41z"
      fill="#FFFFFF"
    />
  </svg>
);

export const WhatsAppIcon: React.FC<SocialIconProps> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="6" fill="#25D366" />
    <path
      d="M17.05 14.5c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.18-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.4-.83-.75-1.39-1.67-1.55-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36s1.01 2.74 1.15 2.93c.14.19 2 3.06 4.84 4.29.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33z"
      fill="#FFFFFF"
    />
  </svg>
);
