import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 18,
        background: "#0A0A0A",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#38BDF8",
        borderRadius: "6px",
        fontFamily: "sans-serif",
        fontWeight: 700,
        letterSpacing: "-0.05em",
      }}
    >
      MR
    </div>,
    { ...size },
  );
}
