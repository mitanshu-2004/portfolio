'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const collectAndSendAnalytics = async () => {
      const safeInfo: any = {
        screen: {
          width: window.screen.width,
          height: window.screen.height,
          pixelRatio: window.devicePixelRatio,
        },
        window: {
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        },
        browser: {
          userAgent: navigator.userAgent,
          language: navigator.language,
        },
        system: {
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          doNotTrack: navigator.doNotTrack,
        },
        referrer: document.referrer || 'direct',
        currentUrl: window.location.href,
        timestamp: new Date().toISOString(),
      };

      if (apiUrl) {
        fetch(`${apiUrl}/log`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(safeInfo),
        }).catch(() => {
          console.warn("Analytics logging failed.");
        });
      }
    };

    collectAndSendAnalytics();
  }, []);

  return null;
}
