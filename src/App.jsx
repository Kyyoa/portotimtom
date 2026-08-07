import React, { useState, lazy, Suspense } from "react"
import { AnimatePresence } from "framer-motion"
import "./index.css"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import AnimatedBackground from "./components/Background"
import Footer from "./components/Footer"

const WelcomeScreen = lazy(() => import("./Pages/WelcomeScreen"))

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <>
      <div className="pointer-events-none">
        <AnimatedBackground />
      </div>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>
      {!showWelcome && (
        <>
          <Navbar />
          <Home />
          <About />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
