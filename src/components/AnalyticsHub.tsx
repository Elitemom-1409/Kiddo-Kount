'use client';
import { useEffect } from 'react';

export default function AnalyticsHub() {
  useEffect(() => {
    // Only initialize analytics on the client side
    // Meta Pixel Placeholder
    // GTM Placeholder
    console.log('Analytics loaded (child-safe)');
  }, []);

  return null; // Invisible component
}
