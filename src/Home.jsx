import React from 'react'
import Products from "./Products"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 text-gray-800 nunito">
        Ana Sayfa
      </h1>
      <p className="text-center mt-4 text-gray-600 mb-8">
        Hoş geldiniz! Bu modern e-ticaret platformuna.
      </p>
      <Products category="jewelery" />
    </div>
  )
}