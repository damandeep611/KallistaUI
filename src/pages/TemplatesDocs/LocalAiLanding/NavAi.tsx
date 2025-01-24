export default function NavAi() {
  return (
    <header className=" flex items-center justify-between px-6 h-16">
      <div className="flex items-center justify-between gap-6">
        <span className="font-bold">Tomochi 友智</span>
        <nav>
          <ul className="flex items-center justify-between gap-4 text-xs sm:text-sm capitalize">
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">pricing</a>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between gap-6">
        <button>Sign Up</button>
        <button className="bg-blue-600 p-2 px-6 rounded-lg">Sign In</button>
      </div>
    </header>
  );
}
