export default function LandingPage() {
  return (
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
      <style>{`
        .grid-background {
          position: relative;
        }

        .grid-layer {
          background-size: 150px 150px;
          opacity: 0.1;
        }

        .vertical-crawl {
          background-image: linear-gradient(
            rgba(0, 0, 0, 1) 3px,
            transparent 3px
          );
          animation: verticalCrawl 20s linear infinite;
        }

        .horizontal-crawl {
          background-image: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 3px,
            transparent 3px
          );
          animation: horizontalCrawl 20s linear infinite;
        }

        @keyframes verticalCrawl {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(150px);
          }
        }

        @keyframes horizontalCrawl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(150px);
          }
        }
      `}</style>
    </section>
  );
}
