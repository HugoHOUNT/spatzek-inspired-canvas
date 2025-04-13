"use client"

import { useEffect, useState } from "react"

export function Clock() {
  const [time, setTime] = useState({
    ldn: "",
    cpt: "",
    ldnTemp: "",
    cptTemp: "",
  })

  useEffect(() => {
    const updateTime = () => {
      // London time
      const ldnTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })

      // Cape Town time
      const cptTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Johannesburg",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })

      setTime({
        ldn: ldnTime,
        cpt: cptTime,
        ldnTemp: "9°C", // This would normally be fetched from a weather API
        cptTemp: "15°C", // This would normally be fetched from a weather API
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span>LDN</span>
      <span>{time.ldn}</span>
      <span>{time.ldnTemp}</span>
      <span className="mx-1">→</span>
      <span>CPT</span>
      <span>{time.cpt}</span>
      <span>{time.cptTemp}</span>
    </div>
  )
}
