'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const deviceInfo = {
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        pixelRatio: window.devicePixelRatio,
      },
      window: {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      },
      browser: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: navigator.languages,
      },
      hardware: {
        cpuCores: navigator.hardwareConcurrency || 'unknown',
        memoryGB: navigator.deviceMemory || 'unknown',
        touchPoints: navigator.maxTouchPoints || 0,
      },
      system: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        doNotTrack: navigator.doNotTrack,
      },
      timestamp: new Date().toISOString(),
    };

    if (apiUrl) {
      fetch(`${apiUrl}/log`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deviceInfo),
      }).catch((err) => console.error('Log error:', err));
    }
  }, []);

  return null;
}
