export default function HeroGrid(){
  return(
    <section className="relative h-screen overflow-hidden">
    {/* grid bg */}
    <div className="absolute inset-0 z-0">
      <div className="relative w-full h-full grid-background">
        <div className="absolute inset-0 grid-layer vertical-crawl" />
        <div className="absolute inset-0 grid-layer horizontal-crawl" />
      </div>
    </div>
    <div className=" container mt-32 mx-auto max-w-7xl  ">
      <div className="flex flex-col space-y-6 text-center items-center justify-center">
        <div className="flex items-center justify-center space-x-2 border border-gray-500 rounded-full px-4">
          <span>🎈</span>
          <span>➜</span>
          <span className="font-bold">✨ Github</span>
          <span>➜</span>
          <span>🔍</span>
        </div>

        <h1 className="text-6xl leading-[1.1] font-bold max-w-5xl leading-tighter ">
          Effortless Motion UI – <br /> Built with <span className="text-blue-800">React and TailwindCSS</span>
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
    <style>{`
      .grid-background {
        position: relative;
      }

      .grid-layer {
        background-size: 100px 100px;
        opacity: 0.5;
      }

      .vertical-crawl {
        background-image: linear-gradient(
          rgba(0, 0, 0, 1) 1px,
          transparent 1px
        );
        animation: verticalCrawl 10s linear infinite;
      }

      .horizontal-crawl {
        background-image: linear-gradient(
          90deg,
          rgba(0, 0, 0, 1) 1px,
          transparent 1px
        );
        animation: horizontalCrawl 20s linear infinite;
      }

      @keyframes verticalCrawl {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(100px);
        }
      }

      @keyframes horizontalCrawl {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(100px);
        }
      }
    `}</style>
  </section>
  )
}