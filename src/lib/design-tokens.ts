/**
 * KIDDO KOUNT — Design Tokens
 * "Cosmic Playground" Design System
 * 
 * Color palette extracted from brand reference image:
 * Jewel-tone cosmic background + rainbow-pop candy accents
 */

export const colors = {
  // Cosmic background palette
  cosmicIndigo: '#1a1147',
  cosmicDeep: '#0d0a2e',
  nebulaViolet: '#5b2c9e',
  nebulaPurple: '#3d1a7e',
  cosmicBlue: '#1e3a5f',
  
  // Rainbow-pop accent colors (candy letters)
  cherryPop: '#ff4d6d',
  sunshine: '#ffd60a',
  leaf: '#06d6a0',
  starCyan: '#4cc9f0',
  bubblegum: '#ff70a6',
  hotPink: '#e040a0',
  
  // Neutral / UI
  cloudWhite: '#fefae0',
  starWhite: '#ffffff',
  softCream: '#fff8e7',
  
  // Character - Ralph
  ralphSkin: '#ffd9b8',
  ralphOveralls: '#e63946',
  ralphShirt: '#4cc9f0',
  ralphHair: '#f5d76e',
  ralphEyes: '#4a90d9',
  
  // Semantic
  success: '#06d6a0',
  warning: '#ffd60a',
  error: '#ff4d6d',
  info: '#4cc9f0',
} as const;

export const gradients = {
  cosmicBg: `linear-gradient(135deg, ${colors.cosmicDeep} 0%, ${colors.cosmicIndigo} 30%, ${colors.nebulaViolet} 60%, ${colors.nebulaPurple} 100%)`,
  cosmicRadial: `radial-gradient(ellipse at 50% 50%, ${colors.nebulaViolet}40 0%, ${colors.cosmicIndigo} 70%, ${colors.cosmicDeep} 100%)`,
  heroShimmer: `linear-gradient(90deg, ${colors.cherryPop}, ${colors.sunshine}, ${colors.leaf}, ${colors.starCyan}, ${colors.bubblegum})`,
  glassLight: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  glassDark: 'linear-gradient(135deg, rgba(26,17,71,0.8) 0%, rgba(91,44,158,0.6) 100%)',
  buttonPrimary: `linear-gradient(135deg, ${colors.cherryPop} 0%, ${colors.bubblegum} 100%)`,
  buttonSecondary: `linear-gradient(135deg, ${colors.starCyan} 0%, ${colors.leaf} 100%)`,
  sunshineGlow: `linear-gradient(135deg, ${colors.sunshine} 0%, #ffaa00 100%)`,
} as const;

export const typography = {
  // Font families (loaded via next/font)
  display: 'var(--font-fredoka)',   // Rounded, friendly — headings
  body: 'var(--font-nunito)',       // Legible — body text for parents
  numerals: 'var(--font-baloo)',    // Bouncy — math digits
  
  // Font sizes (rem)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem', // 30px
    '3xl': '2.25rem',  // 36px
    '4xl': '3rem',     // 48px
    '5xl': '3.75rem',  // 60px
    '6xl': '4.5rem',   // 72px
    '7xl': '6rem',     // 96px
  },
  
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
  section: '6rem',
  sectionMobile: '3rem',
} as const;

export const glassmorphism = {
  backdrop: 'blur(20px) saturate(180%)',
  background: 'rgba(255, 255, 255, 0.08)',
  backgroundHover: 'rgba(255, 255, 255, 0.12)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderHover: '1px solid rgba(255, 255, 255, 0.28)',
  shadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
  shadowHover: '0 12px 48px rgba(31, 38, 135, 0.3)',
  innerGlow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15)',
} as const;

export const borderRadius = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  full: '9999px',
  pill: '100px',
} as const;

export const motion = {
  // Duration (seconds)
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
    cinematic: 1.2,
  },
  
  // Easing curves
  ease: {
    default: [0.25, 0.1, 0.25, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
    smooth: [0.4, 0, 0.2, 1],
    decelerate: [0, 0, 0.2, 1],
    accelerate: [0.4, 0, 1, 1],
  },
  
  // Stagger for list animations
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  toast: 50,
  stars: -1,
} as const;

// Ad-safe config
export const adConfig = {
  blockedCategories: [
    'Adult', 'Violence', 'Politics', 'Gambling',
    'Alcohol', 'Tobacco', 'Dating', 'Weapons', 'Religion-divisive',
  ],
  allowedCategories: [
    'Education', 'Toys', "Kids' Books", 'Family Services', 'Healthy Snacks',
  ],
  placements: {
    sidebar: true,
    betweenVideos: 6, // Every 6th video card
    footerBanner: true,
  },
  neverPlaceIn: ['hero', 'games', 'videoPlayer', 'midContent', 'parentZone'],
} as const;
