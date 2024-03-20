"use client";

import { LoginButton } from "@/components/LoginButton";

export default function Error({ error, reset }) {
  return (
    <main className="grid min-h-full place-itewms-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h2 className="text-lg text-pink-500 my-3">
          Please Login to access this feature!
        </h2>
        <LoginButton />
      </div>
    </main>
  );
}
