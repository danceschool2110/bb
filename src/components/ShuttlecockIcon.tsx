import React from 'react';

interface ShuttlecockIconProps {
  className?: string;
  size?: number;
  cuteFace?: boolean;
}

export const ShuttlecockIcon: React.FC<ShuttlecockIconProps> = ({
  className = "w-6 h-6",
  size,
  cuteFace = true,
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <path
        d="M26 12L32 6L38 12L36 38H28L26 12Z"
        fill="#BAE6FD"
        stroke="#0284C7"
        strokeWidth="2"
      />
      <path
        d="M16 18L24 10L30 38H24L16 18Z"
        fill="#E0F2FE"
        stroke="#0284C7"
        strokeWidth="2"
      />
      <path
        d="M48 18L40 10L34 38H40L48 18Z"
        fill="#E0F2FE"
        stroke="#0284C7"
        strokeWidth="2"
      />
      <path
        d="M20 22C24 24 40 24 44 22"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 30C26 32 38 32 42 30"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 38H38C40 38 42 40 42 43C42 49 37 55 32 55C27 55 22 49 22 43C22 40 24 38 26 38Z"
        fill="#38BDF8"
        stroke="#0284C7"
        strokeWidth="2"
      />
      {cuteFace && (
        <>
          <circle cx="29" cy="44" r="1.5" fill="#0C4A6E" />
          <circle cx="35" cy="44" r="1.5" fill="#0C4A6E" />
          <path
            d="M30.5 47C31.5 48.2 32.5 48.2 33.5 47"
            stroke="#0C4A6E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="26.5" cy="46" r="1" fill="#F43F5E" opacity="0.6" />
          <circle cx="37.5" cy="46" r="1" fill="#F43F5E" opacity="0.6" />
        </>
      )}
    </svg>
  );
};
