"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold text-[#003366]">
        Something went wrong
      </h1>
      <p className="text-slate-600">
        We could not load this page. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md bg-[#003366] px-4 py-2 font-medium text-white"
      >
        Try again
      </button>
    </main>
  );
}
