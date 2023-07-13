import Timer from "./timer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="p-1 flex bg-gray-900 min-h-screen flex-col items-center justify-center">
      <p className="text-neutral-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
        <a
          href="https://twitter.com/kiwicopple/status/1664118998169014273"
          className="hover:underline"
        >
          Copple gives Sam 1% of Supabase
        </a>{" "}
        in
      </p>
      <Timer />
    </main>
  );
}
