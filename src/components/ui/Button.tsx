interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children}: ButtonProps) {
  return (
    <button
      className="
        px-6
        py-3
        rounded-full

        bg-white
        text-black

        text-sm
        font-medium

        transition-all
        duration-300

        hover:bg-zinc-200
        hover:translate-y-[-2px]

        active:scale-[0.98]
      "
    >
      {children}
    </button>
  );
}
