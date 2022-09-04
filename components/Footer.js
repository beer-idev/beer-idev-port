import React from "react";
import IconContact from "../components/IconContact";
export default function Footer() {
  return (
    <section className="bg-gray-100 dark:bg-black shadow-xl shadow-slate-100	">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <IconContact />
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          Developed By beer-idev.
        </p>
      </div>
    </section>
  );
}
