"use client";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Globe3D({ width = 600, height = 600, ...props }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: height,
        minWidth: width,
        background: "none",
      }}
    >
      <Globe
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor="rgba(4,26,85,0.2)"
        atmosphereAltitude={0.2}
        globeImageUrl="/360_F_175581721_gEMwLZksRuHM1UKEkhpWHFvsqQXdGePn.jpg"
        {...props}
      />
    </div>
  );
}
