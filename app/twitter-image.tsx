import { ImageResponse } from "next/server";
import getCountdown from "@/utils/getCountdown";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div tw="p-6 w-full h-full bg-gray-900 flex flex-col items-center justify-center text-white text-center">
        <p tw="text-gray-300 text-5xl">Copple gives Sam 1% of Supabase in</p>
        <p tw="text-8xl font-bold text-white">{getCountdown()}</p>
      </div>
    )
  );
}
