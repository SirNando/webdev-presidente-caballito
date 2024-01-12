export default function TextPill({ children }) {
  return (
    <h2 className="text-white text-center text-2xl py-2 bg-medium w-[80%] rounded-3xl font-semibold md:rounded-none md:p-20 md:mt-10">
      {children}
    </h2>
  );
}
