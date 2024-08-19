/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        univers: ["Univers"],
      },
      colors: {
        treetech: "#008242",
        background: "bg-slate-800",
      },
      backgroundImage: {
        pattern: "url(/tailwind.avif)",
      },
    },
  },
  plugins: [],
};
