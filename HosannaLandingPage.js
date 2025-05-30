
import React from 'react';

export default function HosannaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <header className="text-center py-10">
        <img src="/logo.png" alt="Hosanna Global Trade Logo" className="mx-auto h-24 mb-4" />
        <h1 className="text-4xl font-bold text-blue-900">Hosanna Global Trade</h1>
        <p className="mt-4 text-lg text-gray-600">Bridging Local Expertise with Global Opportunity</p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 p-6">
        <div>
          <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
          <p className="mt-2 text-gray-700">
            We empower farmers, connect global mineral and precious metal buyers and sellers,
            and support sustainable global trade across agriculture, energy, and natural resources.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800">What We Do</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Agricultural Consulting: Beginning Farmers, Hemp, Livestock, Greenhouses</li>
            <li>Precious Metal & Mineral Deal Facilitation</li>
            <li>Global Trade of Agri-products, Metals, and Green Energy</li>
            <li>ESG and Trade Compliance Advisory</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold text-orange-700">Work With Us</h2>
        <p className="mt-2 text-gray-600">Whether you are a farmer, trader, or investor — let's grow together ethically and globally.</p>
        <button className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-2xl shadow hover:bg-blue-900 transition">
          Contact Us
        </button>
      </section>

      <footer className="text-center py-6 border-t mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hosanna Global Trade. All rights reserved.
      </footer>
    </div>
  );
}
