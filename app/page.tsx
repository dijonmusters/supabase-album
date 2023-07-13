import Timer from "./timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-neutral-300 text-5xl">
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
