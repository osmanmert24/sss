import { Outlet } from "react-router"
import Header from "./Header"
import { useState } from "react"

export default function MainLayout() {
  return (
    <div>
      <Header />    
      <Outlet />
    </div>
  )
}