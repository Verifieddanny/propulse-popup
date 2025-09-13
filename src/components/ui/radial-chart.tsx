import React from 'react'

export default function RadialChart({ 
  value = 10, 
  maxValue = 100, 
  size = 36, // 2.25rem = 36px
  strokeWidth = 4,
  backgroundColor = '#334155', 
  progressColor = '#FFBB5B', 
  textColor = '#ffffff'
}) {
  // Calculate the percentage and circumference
  const percentage = (value / maxValue) * 100
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference
  
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151" // gray-700
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-30"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      
      {/* Center text */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-white font-medium"
        style={{ 
          fontSize: size * 0.25,
          color: textColor
        }}
      >
        {value}
      </div>
    </div>
  )
}

