import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a3350",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M2 17c1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0"
            stroke="#22d3ee"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <circle cx="16.5" cy="6.5" r="2.5" fill="#22d3ee" />
          <path
            d="M5 13.5c1.5-.8 3-1.6 5-2.3 3-1 5-3 6.5-4.7"
            stroke="#e2f3ff"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
