export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 bg-mesh opacity-100" />
      
      {/* Dynamic Overlay Glows */}
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
    </div>
  );
}
