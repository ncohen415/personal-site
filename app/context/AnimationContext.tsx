"use client"
import { createContext, useContext, useState, useRef } from "react"
import { gsap } from "gsap"

const AnimationContext = createContext<any>({})

export const useAnimationContext = () => {
  return useContext(AnimationContext)
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <AnimationContext.Provider value={gsap.timeline()}>
      {children}
    </AnimationContext.Provider>
  )
}
