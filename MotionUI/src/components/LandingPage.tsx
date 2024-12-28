export default function LandingPage() {
  return (
    <section className="h-screen">
      <div className=" container mt-32 mx-auto max-w-7xl  ">
        <div className="flex flex-col space-y-6 text-center items-center justify-center">
          <div className="flex items-center justify-center space-x-2 border border-gray-500 rounded-full px-4">
            <span>🎈</span>
            <span>➜</span>
            <span className="font-bold">✨ Github</span>
            <span>➜</span>
            <span>🔍</span>
          </div>

          <h1 className="text-5xl font-semibold max-w-5xl leading-tighter ">
            Effortless Motion UI – <br /> Built with React and TailwindCSS
          </h1>
          <p className="max-w-2xl text-gray-700 ">
            Addicting, interactive, animated UI components and templates for
            React, Tailwind CSS, Framer motion logo Framer Motion & more. Copy &
            paste them into your code with 2 clicks.
          </p>
          <div className="flex flex-col gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-full">
              Explore UI
            </button>
            <span className="text-xs">Open source Ui library</span>
          </div>
        </div>
      </div>
    </section>
  );
}
