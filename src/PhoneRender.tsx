interface PhoneRenderProps {
  color?: string
  variant?: 'front' | 'back'
  size?: number
  engraving?: string
}

export default function PhoneRender({ color = '#b0c4de', variant = 'front', size = 320, engraving }: PhoneRenderProps) {
  const w = size
  const h = size * 2.1
  const frameColor = '#1a1a1a'
  const screenColor = variant === 'front' ? '#0b0e13' : color

  // контрастный цвет для элементов на задней панели
  const isLight = ['#f1f3f4', '#e8b4bc', '#a8d5ba', '#f48fb1'].includes(color)
  const detail = isLight ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)'
  const detailSoft = isLight ? 'rgba(0,0,0,0.28)' : 'rgba(255,255,255,0.28)'

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ maxHeight: '100%', maxWidth: '100%' }}>
      <defs>
        <linearGradient id={`glare-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="gos-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1420" />
          <stop offset="100%" stopColor="#101826" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect x={w*0.05} y={h*0.02} width={w*0.9} height={h*0.96} rx={w*0.12} fill={frameColor} stroke="#333" strokeWidth={2} />

      {/* Screen / Back panel */}
      <rect x={w*0.08} y={h*0.04} width={w*0.84} height={h*0.92} rx={w*0.1} fill={screenColor} />

      {variant === 'front' ? (
        <>
          {/* Экран в стиле GrapheneOS */}
          <rect x={w*0.08} y={h*0.04} width={w*0.84} height={h*0.92} rx={w*0.1} fill="url(#gos-screen)" />
          {/* Вырез камеры */}
          <circle cx={w*0.5} cy={h*0.07} r={w*0.022} fill="#000" stroke="#1e293b" strokeWidth={1} />
          {/* Щит GrapheneOS */}
          <g transform={`translate(${w*0.5}, ${h*0.32})`}>
            <path d={`M0 ${-h*0.075} L${w*0.16} ${-h*0.045} V${h*0.015} C${w*0.16} ${h*0.06} ${w*0.08} ${h*0.085} 0 ${h*0.1} C${-w*0.08} ${h*0.085} ${-w*0.16} ${h*0.06} ${-w*0.16} ${h*0.015} V${-h*0.045} Z`}
              fill="none" stroke="#7da7d9" strokeWidth={w*0.014} />
            <path d={`M${-w*0.05} 0 L${-w*0.015} ${h*0.03} L${w*0.06} ${-h*0.035}`} fill="none" stroke="#7da7d9" strokeWidth={w*0.014} strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x={w*0.5} y={h*0.5} textAnchor="middle" fill="#7da7d9" fontSize={w*0.075} fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing={w*0.012}>GrapheneOS</text>
          <text x={w*0.5} y={h*0.545} textAnchor="middle" fill="rgba(125,167,217,0.55)" fontSize={w*0.042} fontFamily="Inter, sans-serif">private &amp; secure</text>
          {/* Блик */}
          <rect x={w*0.08} y={h*0.04} width={w*0.84} height={h*0.92} rx={w*0.1} fill={`url(#glare-${variant})`} />
        </>
      ) : (
        <>
          {/* Camera bar */}
          <rect x={w*0.08} y={h*0.08} width={w*0.84} height={h*0.13} rx={w*0.06} fill={isLight ? '#e0e0e0' : '#222'} />
          <circle cx={w*0.28} cy={h*0.145} r={w*0.065} fill="#111" stroke="#333" strokeWidth={2} />
          <circle cx={w*0.5} cy={h*0.145} r={w*0.065} fill="#111" stroke="#333" strokeWidth={2} />
          <circle cx={w*0.72} cy={h*0.145} r={w*0.065} fill="#111" stroke="#333" strokeWidth={2} />

          {/* G logo */}
          <text x={w*0.5} y={h*0.56} textAnchor="middle" fill={detailSoft} fontSize={w*0.12} fontWeight="700" fontFamily="Inter, sans-serif">G</text>

          {/* Гравировка */}
          {engraving && (
            <text x={w*0.5} y={h*0.72} textAnchor="middle" fill={detail} fontSize={w*0.052} fontFamily="Inter, sans-serif" fontStyle="italic" letterSpacing={1}>
              {engraving.length > 18 ? engraving.slice(0, 18) + '…' : engraving}
            </text>
          )}

          {/* Блик */}
          <rect x={w*0.08} y={h*0.04} width={w*0.84} height={h*0.92} rx={w*0.1} fill={`url(#glare-${variant})`} />
        </>
      )}

      {/* Side buttons */}
      <rect x={w*0.01} y={h*0.22} width={w*0.04} height={h*0.08} rx={2} fill="#333" />
      <rect x={w*0.01} y={h*0.32} width={w*0.04} height={h*0.12} rx={2} fill="#333" />
      <rect x={w*0.95} y={h*0.24} width={w*0.04} height={h*0.14} rx={2} fill="#333" />
    </svg>
  )
}
