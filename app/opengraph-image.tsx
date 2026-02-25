import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#f7f5f0',
          position: 'relative',
        }}
      >
        {/* Left content block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '72px',
            paddingRight: '48px',
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'serif',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#888888',
              marginBottom: '16px',
            }}
          >
            DELHI, INDIA · OPEN TO ROLES
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#0d0d0d',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Mitanshu Goel
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#4a4a4a',
              lineHeight: 1.4,
              maxWidth: '560px',
            }}
          >
            AI &amp; Robotics Engineer
          </div>
          <div
            style={{
              marginTop: '28px',
              fontSize: '16px',
              color: '#888888',
              display: 'flex',
              gap: '24px',
            }}
          >
            <span>ROS2</span>
            <span>YOLOv8</span>
            <span>PyTorch</span>
            <span>ESP32</span>
            <span>llama.cpp</span>
          </div>
        </div>

        {/* Right accent block */}
        <div
          style={{
            width: '200px',
            background: '#2d5a3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              color: '#f7f5f0',
              fontSize: '52px',
              fontWeight: 700,
              fontFamily: 'serif',
            }}
          >
            MG
          </div>
        </div>

        {/* Bottom rule + domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: '2px solid #e2e0db',
            padding: '20px 72px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '16px', color: '#888888' }}>
            mitanshugoel.dev
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
