export default function HighlightText({ children, size }) {
  return (
    <span
      className={`highlight font-extrabold text-${size} text-primary uppercase`}
    >
      {children}
    </span>
  );
}
