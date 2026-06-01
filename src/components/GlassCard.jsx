export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass ${hover ? 'hover-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
