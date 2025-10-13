import React from "react";
import "./App.css";
import { CounterFunction } from "./CounterFunction";
import CounterClass from "./CounterClass";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-4">
      <header className="py-10">
      <h1 className="text-4xl font-extrabold mb-16 text-grey-900 text-center">
        Assignment-2 Counter Application
      </h1>
      </header>
      <main className="flex flex-col md:flex-row justify-center items-start gap-12 mt-4">
        {/* Class Component */}
        <section className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Class Component
          </h2>
          <div className="bg-white rounded-2xl px-12 py-10 flex flex-col items-center shadow-lg">
            <CounterClass />
          </div>
        </section>

        {/* Function Component */}
        <section className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Function Component
          </h2>
          <div className="bg-white rounded-2xl shadow-lg px-12 py-10 flex flex-col items-center">
            <CounterFunction />
          </div>
        </section>
      </main>
    {/* </div> */}
    </div>
  );
}
export default App;
