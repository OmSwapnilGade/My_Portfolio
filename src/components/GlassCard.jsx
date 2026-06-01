export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass ${hover ? 'hover-glow' : ''} ${className}`}
      style={{
        boxShadow: hover
          ? '0 4px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255,255,255,0.04)'
          : '0 2px 12px rgba(0, 0, 0, 0.15)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
