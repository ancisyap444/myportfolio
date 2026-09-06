import React from 'react';

export const TechLogo: React.FC<{ name: string; className?: string }> = ({ 
  name, 
  className = "w-6 h-6" 
}) => {
  const norm = name.trim().toLowerCase();

  if (norm === 'react') {
    return (
      <svg viewBox="-11.5 -10.232 23 20.463" className={className} fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (norm === 'typescript') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M12.5 12h-6v2h1.9v7.5h2.2V14h1.9V12zM19.8 13.9c-.4-.5-1.1-.9-2.1-1.2l-.7-.2c-.6-.2-1-.4-1.2-.6-.2-.2-.3-.4-.3-.7 0-.3.1-.6.4-.8.3-.2.7-.3 1.2-.3.6 0 1.1.1 1.5.4.4.3.7.6.8 1.1l2-.8c-.3-.8-.8-1.4-1.5-1.9-.7-.5-1.7-.7-2.8-.7-1.1 0-2.1.3-2.8.9-.7.6-1.1 1.4-1.1 2.3 0 .8.3 1.4.8 1.9.5.5 1.3.8 2.2 1.1l.7.2c.7.2 1.2.5 1.5.7.3.2.4.6.4 1 0 .4-.2.8-.5 1-.4.3-.9.4-1.5.4-.8 0-1.4-.2-1.9-.6-.5-.4-.8-1-1-1.7l-2 .8c.3 1 .8 1.8 1.6 2.4.8.6 1.9.9 3.3.9 1.3 0 2.4-.3 3.1-.9.8-.6 1.2-1.5 1.2-2.5.1-1-.3-1.8-.8-2.3z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'javascript') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5l1.8-1.1c.4.6.7 1.1 1.3 1.1.6 0 1-.3 1-1.1V10H13v6.4c0 1.9-1.1 2.8-2.8 2.8-1.4 0-2.4-.8-3.2-1.7zM14.7 17.2l1.8-1c.5.8 1.1 1.3 2.1 1.3.9 0 1.4-.4 1.4-1 0-.6-.4-.9-1.4-1.3l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.3 0-1.7 1.3-2.9 3.3-2.9 1.4 0 2.5.5 3.3 1.9l-1.7 1.1c-.4-.7-.9-1-1.6-1-.7 0-1.1.4-1.1.9 0 .5.3.8 1.2 1.2l.6.2c2 .9 3 1.7 3 3.5 0 2-1.6 3.1-3.6 3.1-2 0-3.3-.9-4-2.5z" fill="#000000" />
      </svg>
    );
  }

  if (norm === 'python') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M11.9 2c-3.1 0-5 .7-5 2.8v2.1h5.2v.7H4.3C2.3 7.6 2 9.4 2 12.3c0 2.7.5 4.5 2.3 4.5h1.7v-2.3c0-2.5 1.7-4.4 4.4-4.4h4.4V7.8c0-3-2.6-5.8-5.7-5.8h2.8zm-2.4 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB" />
        <path d="M12.1 22c3.1 0 5-.7 5-2.8v-2.1h-5.2v-.7h7.8c2 0 2.3-1.8 2.3-4.7 0-2.7-.5-4.5-2.3-4.5H18v2.3c0 2.5-1.7 4.4-4.4 4.4H9.2v2.3c0 3 2.6 5.8 5.7 5.8h-2.8zm2.4-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
      </svg>
    );
  }

  if (norm === 'php' || norm === 'pdo') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
        <path d="M6 14.5l.8-5h2.1c1.2 0 1.9.6 1.7 1.8-.2 1.3-1 2.2-2.1 2.2H7.2l-.5 3H6zm1.7-4.2l-.4 2.2h.9c.5 0 .9-.3 1-.9.1-.6-.2-.9-.7-.9h-.8zm4.3 4.2l1.1-7h1.4l-.5 3h1.3c1.2 0 1.9.6 1.7 1.8-.2 1.3-1 2.2-2.1 2.2h-1.6l-.5 3H12zm1.9-4.2l-.4 2.2h.9c.5 0 .9-.3 1-.9.1-.6-.2-.9-.7-.9h-.8zm5.1 4.2l.8-5h2.1c1.2 0 1.9.6 1.7 1.8-.2 1.3-1 2.2-2.1 2.2h-1.3l-.5 3H19zm1.7-4.2l-.4 2.2h.9c.5 0 .9-.3 1-.9.1-.6-.2-.9-.7-.9h-.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'c#' || norm === 'csharp') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2l8.5 4.9v9.8L12 22l-8.5-4.9V6.9L12 2z" fill="#9B4993" />
        <path d="M9.8 15.6c-2 0-3.3-1.4-3.3-3.6s1.3-3.6 3.3-3.6c1.2 0 2 .5 2.5 1.3l-1.3 1c-.3-.5-.7-.8-1.2-.8-1 0-1.6.8-1.6 2.1 0 1.3.6 2.1 1.6 2.1.5 0 .9-.3 1.2-.8l1.3 1c-.5.8-1.3 1.3-2.5 1.3zm4.5-2.2h1.1l.2-1.3h-1.1l.3-1.6h-1.3l-.3 1.6h-1l-.2 1.3h1l-.3 1.8h-1l-.2 1.3h1l-.3 1.7h1.3l.3-1.7h1.1l-.3 1.7h1.3l.3-1.7h1l.2-1.3h-1l.3-1.8zm-.8 1.8h-1.1l.3-1.8h1.1l-.3 1.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'c') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2l8.5 4.9v9.8L12 22l-8.5-4.9V6.9L12 2z" fill="#00599C" />
        <path d="M13.8 16.5c-2.8 0-4.8-1.9-4.8-4.5s2-4.5 4.8-4.5c1.6 0 2.8.7 3.5 1.8l-1.8 1.4c-.4-.7-1-1.1-1.7-1.1-1.4 0-2.3 1.1-2.3 2.4 0 1.3.9 2.4 2.3 2.4.7 0 1.3-.4 1.7-1.1l1.8 1.4c-.7 1.1-1.9 1.8-3.5 1.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'java') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M8.8 17.5s-1.8.4-.7.6c1.3.2 2.7.2 4.4-.1 1.6-.2 3.8-.9 3.8-.9s.7.4-.2.7c-1.3.4-3.3.7-5.1.7-2.3 0-4.2-.4-4.2-.4s.2-.5 2-.6zm-.5-2.2s-1.7.5-.4.8c1.5.3 3.6.3 5.9-.2 1.8-.4 2.4-.9 2.4-.9s-.7.3-1.7.5c-1.8.3-3.7.3-5.2-.1-1.4-.4-1-.1-1-.1zm3.8-3.4c.5.5.9 1.1.2 2.1-.6.8-1.5 1.3-1 2.3.4.8 1.2.6 1.4.5.3-.2.3-.3.3-.3s.1.2.4.2c.4.1.8-.2.9-.6.2-.6-.1-1.1-.6-1.5-.7-.7-.9-1.2-.4-1.9.4-.6 1.2-1.3.6-2.1-.5-.8-1.3-1.6-1.1-2.4.1-.4.4-.7.4-.7s-.5.3-.7.8c-.3.7-.1 1.7.5 2.4.5.6.6 1 .5 1.2zm6.2 5.5s.6-.5-.6-.9c-1.6-.5-3.8-.5-5.9-.2-2.1.3-3.6 1-3.6 1s1.3-.3 3.4-.6c2.3-.3 4.8-.2 6.7.7zm-8.8-10.2s-.9.9.5 2.4c1.1 1.2 1.4 1.9 1.1 2.7-.2.7-.8 1.3-.8 1.3s.4-.3.7-.7c.4-.6.5-1.3.1-2-.6-1-1.4-1.8-1.6-2.5-.2-.8 0-1.2 0-1.2zm7.6 9.6s.4.4-.4.8c-1.1.5-2.4.6-3.8.7-1.4.1-2.8 0-4.1-.3-.6-.1-1.2-.3-1.2-.3s.5.1 1.2.3c1.3.3 2.7.4 4.1.3 1.4 0 2.7-.2 3.7-.7.5-.3.5-.8.5-.8z" fill="#E76F00" />
        <path d="M12.9 2.1c.3.5-.1 1-.4 1.4-.4.5-.8 1-.4 1.6.4.7 1.1 1.2 1.3 2 .2.8 0 1.7-.6 2.3-.5.6-1.2 1.2-1.1 2.1.1.8.7 1.3.6 2.1-.1.7-.6 1.3-1 1.9-.3.5-.4 1-.1 1.4.3.4.9.4 1.2.1.4-.4.5-1 .4-1.6-.1-.7-.6-1.2-.6-1.9 0-.8.6-1.4 1-2 .5-.7.9-1.5.8-2.4-.1-.9-.7-1.6-.9-2.5-.2-.9.1-1.7.6-2.4.4-.6.8-1.3.6-2-.2-.7-.8-1.2-1.2-1.8-.3-.4-.5-.9-.3-1.4.2-.6.7-1 1.1-1.4.2-.2.3-.4.3-.6 0-.2-.2-.4-.4-.5-.4-.1-.8.2-1 .5-.4.5-.6 1.1-.5 1.7.1.6.5 1.1.9 1.6z" fill="#5382A1" />
      </svg>
    );
  }

  if (norm === 'html' || norm === 'html5') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M3.5 2l1.6 18 6.9 2 6.9-2 1.6-18H3.5z" fill="#E34F26" />
        <path d="M12 3.6v16.7l5.5-1.6 1.3-15.1H12z" fill="#EF652A" />
        <path d="M12 7.7H7.7l.3 3.2H12v-3.2zm0 6.3H9.4l-.2-2h-3l.5 5.2 5.3 1.5V14z" fill="#ECECEC" />
        <path d="M12 7.7v3.2h3.9l-.4 3.9-3.5 1V19l5.3-1.5.6-6.6H12z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'css' || norm === 'css3') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M3.5 2l1.6 18 6.9 2 6.9-2 1.6-18H3.5z" fill="#1572B6" />
        <path d="M12 3.6v16.7l5.5-1.6 1.3-15.1H12z" fill="#33A9DC" />
        <path d="M12 7.7H7.7l.3 3.2h4V7.7zm0 5.4H9.4l-.2-2h-3l.5 5.2 5.3 1.5v-4.7z" fill="#ECECEC" />
        <path d="M12 7.7v3.2h3.9l-.3 3.2-3.6 1V19l5.3-1.5.7-7.6H12z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'tailwind css' || norm === 'tailwind') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.6 11.8 15 13.2 18 13.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.4 7.4 15 6 12 6zM6 13.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C7.6 19 9 20.4 12 20.4c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.4 14.6 9 13.2 6 13.2z" fill="#38BDF8" />
      </svg>
    );
  }

  if (norm === 'vite') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M21.5 3.5L12.7 21a.9.9 0 01-1.6 0L2.5 3.5a.9.9 0 011.1-1.3l8.4 4.5 8.4-4.5a.9.9 0 011.1 1.3z" fill="#646CFF" />
        <path d="M13.2 2.3l-5 9.5h3.4l-1.8 7 6.4-10.2h-3.5l2-6.3h-1.5z" fill="#FFD62E" />
      </svg>
    );
  }

  if (norm === 'bootstrap 5' || norm === 'bootstrap') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5.5" fill="#7952B3" />
        <path d="M8 6.5h4.2c1.7 0 2.8.8 2.8 2.1 0 1-.7 1.7-1.6 1.9 1.2.2 2 1 2 2.3 0 1.6-1.3 2.5-3.2 2.5H8V6.5zm2.3 3.5h1.7c.6 0 1-.3 1-.9s-.4-.8-1-.8h-1.7V10zm0 3.6h2c.7 0 1.1-.3 1.1-.9 0-.6-.4-.9-1.1-.9h-2v1.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm === 'supabase') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12.9 22.8c-.8.8-2.1.2-2.1-.9V13H3.2c-1 0-1.5-1.2-.8-1.9L13.1 1.2c.8-.8 2.1-.2 2.1.9V11h7.6c1 0 1.5 1.2.8 1.9l-10.7 9.9z" fill="#3ECF8E" />
        <path d="M12.9 22.8c-.8.8-2.1.2-2.1-.9V13h7.6c1 0 1.5 1.2.8 1.9l-6.3 7.9z" fill="#24B47E" />
      </svg>
    );
  }

  if (norm === 'postgresql' || norm === 'postgres') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 1.9 6.7 4.8 8.4l1.2-2.1c-2.3-1.3-3.8-3.7-3.8-6.3 0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8c0 2.6-1.5 5-3.8 6.3l1.2 2.1c2.9-1.7 4.8-4.8 4.8-8.4 0-5.5-4.5-10-10-10z" fill="#336791" />
        <path d="M12 6.5c-2.8 0-5 2-5 4.5 0 1.7.9 3.2 2.3 3.9-.3.9-.9 2-1.7 2.8 1.2.2 2.6-.2 3.6-1 .3.1.6.1.8.1 2.8 0 5-2 5-4.5s-2.2-4.8-5-4.8zm-1.8 4.2c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8zm3.6 0c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z" fill="#336791" />
      </svg>
    );
  }

  if (norm === 'mysql') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M21.5 14.5c-.8-.2-1.6-.2-2.4-.1-1.2.2-2.3.8-3.3 1.4-1.5 1-3.2 1.6-5 1.7-2.3.1-4.6-.6-6.4-2-1.2-1-2-2.3-2.4-3.8-.1-.4.2-.8.6-.8.4 0 .7.3.8.7.4 1.3 1.1 2.4 2.1 3.2 1.6 1.2 3.6 1.8 5.7 1.7 1.6-.1 3.2-.6 4.5-1.5.9-.6 1.9-1.1 3-1.3.8-.1 1.7-.1 2.5.1.4.1.7.5.6.9-.1.4-.4.8-.8.8z" fill="#F29111" />
        <path d="M16.8 6.5c-1.3-.8-2.9-1-4.4-.8-2.2.3-4.1 1.6-5.3 3.4-1.2 1.8-1.6 4-1.1 6.1.1.4.5.7.9.6.4-.1.7-.5.6-.9-.4-1.8 0-3.7 1-5.2 1-1.5 2.6-2.6 4.4-2.9 1.2-.2 2.5 0 3.5.7.4.3.9.2 1.1-.2.3-.3.2-.8-.1-1.1z" fill="#00758F" />
        <circle cx="17" cy="9" r="1.5" fill="#00758F" />
      </svg>
    );
  }

  if (norm === 'sql') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#39FF88" fillOpacity="0.2" stroke="#39FF88" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#39FF88" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#39FF88" />
        <path d="M9 13.5l1.5 1.5L15 11" stroke="#39FF88" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (norm === 'database design' || norm === 'database') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="6" rx="1.5" fill="#39FF88" fillOpacity="0.15" stroke="#39FF88" />
        <rect x="14" y="3" width="7" height="6" rx="1.5" fill="#39FF88" fillOpacity="0.15" stroke="#39FF88" />
        <rect x="8.5" y="15" width="7" height="6" rx="1.5" fill="#39FF88" fillOpacity="0.25" stroke="#39FF88" />
        <path d="M6.5 9v3.5a1.5 1.5 0 001.5 1.5H12m5.5-5v3.5a1.5 1.5 0 01-1.5 1.5H12m0 0V15" stroke="#39FF88" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('row level security') || norm === 'rls') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l7 3.5v6.5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5.5L12 2z" fill="#39FF88" fillOpacity="0.15" stroke="#39FF88" />
        <rect x="9" y="11" width="6" height="5" rx="1" fill="#39FF88" stroke="#39FF88" />
        <path d="M10.5 11V9a1.5 1.5 0 013 0v2" stroke="#39FF88" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('rest api') || norm === 'rest') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="5" cy="12" r="3" fill="#39FF88" fillOpacity="0.2" stroke="#39FF88" />
        <circle cx="19" cy="6" r="3" fill="#39FF88" fillOpacity="0.2" stroke="#39FF88" />
        <circle cx="19" cy="18" r="3" fill="#39FF88" fillOpacity="0.2" stroke="#39FF88" />
        <path d="M8 12h3a2 2 0 002-2V7a1 1 0 011-1h2m-5 8v3a1 1 0 001 1h2" stroke="#39FF88" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('quill')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.2 3.8a4 4 0 00-5.7 0L4 14.3V20h5.7L20.2 9.5a4 4 0 000-5.7z" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" />
        <path d="M14.5 9.5L18 6m-9 9l-4 4" stroke="#38BDF8" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('routing') || norm.includes('switch')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" stroke="#00BCEB" fill="#00BCEB" fillOpacity="0.1" />
        <path d="M7 9h10m-3-3l3 3-3 3M17 15H7m3 3l-3-3 3-3" stroke="#00BCEB" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (norm.includes('wireless') || norm.includes('wi-fi')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 8.5c5.5-5 14.5-5 20 0M5 12c3.9-3.5 10.1-3.5 14 0M8.5 15.5c2-1.8 5-1.8 7 0" stroke="#39FF88" strokeLinecap="round" />
        <circle cx="12" cy="19" r="1.5" fill="#39FF88" />
      </svg>
    );
  }

  if (norm.includes('ccna') || norm.includes('cisco')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="5" fill="#00BCEB" fillOpacity="0.2" stroke="#00BCEB" strokeWidth="1.5" />
        <path d="M5 15V9m3.5 8V7m3.5 10V5m3.5 12V7m3.5 8V9" stroke="#00BCEB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#39FF88" />
      </svg>
    );
  }

  if (norm.includes('tcp') || norm.includes('ip')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="5" rx="1.5" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" />
        <rect x="3" y="11" width="18" height="5" rx="1.5" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" />
        <rect x="3" y="18" width="18" height="3" rx="1" fill="#39FF88" stroke="#39FF88" />
        <path d="M7 6.5h3m4 0h3m-10 7h4m3 0h3" stroke="#38BDF8" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('vlan')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="#A855F7" fill="#A855F7" fillOpacity="0.15" />
        <circle cx="7.5" cy="12" r="2" fill="#39FF88" />
        <circle cx="12" cy="12" r="2" fill="#A855F7" />
        <circle cx="16.5" cy="12" r="2" fill="#38BDF8" />
        <path d="M7.5 14v2m4.5-2v2m4.5-2v2" stroke="#A855F7" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('git')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M21.6 10.7l-8.3-8.3a1.9 1.9 0 00-2.6 0L8.4 4.7l3.3 3.3a2.2 2.2 0 012.8 2.8l3.2 3.2a2.2 2.2 0 012.5 3.7 2.2 2.2 0 01-3.1-3.1l-3.1-3.1v-2.3a2.2 2.2 0 01-1.3-1.9L9.4 4l-7 7a1.9 1.9 0 000 2.6l8.3 8.3c.7.7 1.9.7 2.6 0l8.3-8.3a1.9 1.9 0 000-2.9z" fill="#F05032" />
      </svg>
    );
  }

  if (norm.includes('excel') || norm.includes('sheetjs')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" rx="4" fill="#107C41" />
        <path d="M7 6.5l3.2 5.5L7 17.5h2.4l1.9-3.8 1.9 3.8h2.4l-3.2-5.5 3.2-5.5h-2.4l-1.9 3.8-1.9-3.8H7z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes('flask')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 2v5.5L4.5 18a2 2 0 001.7 3h11.6a2 2 0 001.7-3L14 7.5V2h-4z" fill="#39FF88" fillOpacity="0.15" stroke="#39FF88" />
        <path d="M8.5 2h7M7 15h10" stroke="#39FF88" strokeLinecap="round" />
        <circle cx="10" cy="18" r="1" fill="#39FF88" />
        <circle cx="14" cy="17" r="1.5" fill="#39FF88" />
      </svg>
    );
  }

  if (norm.includes('ollama')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" fill="#0A0F11" stroke="#39FF88" strokeWidth="1.5" />
        <path d="M9 16c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5m-5-6a1 1 0 102 0 1 1 0 00-2 0zm4 0a1 1 0 102 0 1 1 0 00-2 0z" stroke="#39FF88" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 7l-1-2m7 2l1-2" stroke="#39FF88" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('packet tracer')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="#00BCEB" fill="#00BCEB" fillOpacity="0.15" />
        <circle cx="7" cy="9" r="2" fill="#39FF88" />
        <circle cx="17" cy="9" r="2" fill="#00BCEB" />
        <circle cx="12" cy="16" r="2" fill="#FFD62E" />
        <path d="M8.5 10.5l2 4m3-4l-2 4" stroke="#00BCEB" strokeLinecap="round" strokeDasharray="1.5 1.5" />
      </svg>
    );
  }

  if (norm.includes('postman')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="11" fill="#FF6C37" />
        <path d="M14.5 7.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-5.7 6.3l-2.4 1.2c-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4l3.1-1.6 1.6 4.7c.1.4.6.7 1 .5.4-.1.7-.6.5-1l-1.3-4 2.8 1.4c.4.2.9 0 1.1-.4.2-.4 0-.9-.4-1.1l-6.7-3.3z" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#39FF88" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#39FF88" fill="#39FF88" fillOpacity="0.1" />
      <path d="M8 12h8m-4-4v8" strokeLinecap="round" />
    </svg>
  );
};
