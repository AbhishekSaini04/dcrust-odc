"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import "../styles/StatsSection.css"

interface StatItemProps {
  value: number
  suffix: string
  label: string
  delay?: number
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div
      ref={elementRef}
      className={`stat-item ${isVisible ? "animate-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const DevelopersSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const avatars = [
    "https://i.pinimg.com/736x/3c/10/5f/3c105f9a4a7ca9cfe0abb595cbfd5405.jpg",
    "https://i.pinimg.com/736x/1b/cb/c6/1bcbc60f20f3957571775bf60f1a4ca0.jpg",
    "https://i.pinimg.com/736x/ad/94/5b/ad945bc95b4a7780b27e25edfc2ac1e3.jpg",
    "https://i.pinimg.com/736x/4b/ec/11/4bec113c6d3168fc51389b5ff5998963.jpg",
    "https://i.pinimg.com/736x/78/95/a4/7895a408b0a3c7c7c86a8b3cafecd247.jpg",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`developers-section ${isVisible ? "animate-in" : ""}`}>
      <div className="avatars-container">
        {avatars.slice(0, 4).map((avatar, index) => (
          <div
            key={index}
            className="avatar"
            style={{
              animationDelay: `${index * 100}ms`,
              zIndex: avatars.length - index,
            }}
          >
            <img src={avatar || "/placeholder.svg"} alt={`Developer ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="developers-text">
        Joined by <span className="highlight">800+</span> developers
      </div>
    </div>
  )
}

const StatsSection: React.FC = () => {
  return (
    <div className="stats-container">
      <div className="stats-section">
        <StatItem value={5} suffix="K+" label="commits" delay={0} />
        <StatItem value={300} suffix="+" label="pull requests" delay={100} />
        <StatItem value={1000} suffix="+" label="members" delay={200} />
      </div>
      <DevelopersSection />
    </div>
  )
}

export default StatsSection
