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
        }).catch(() => {});
      }
    };

    collectAndSendAnalytics();

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactiveElement = target.closest('[data-analytics-id]') as HTMLElement;

      if (!interactiveElement) {
        return; 
      }

      const analyticsId = interactiveElement.dataset.analyticsId;

      if (apiUrl && analyticsId) {
        fetch(`${apiUrl}/click`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ analyticsId, timestamp: new Date().toISOString(), currentUrl: window.location.href }),
        }).catch(() => {});
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
