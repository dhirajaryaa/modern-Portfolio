import GrainImg from "../assets/images/grain.jpg";

function Card({children}) {
  return (
    <article
    className="w-full mt-10 gap-10 bg-gray-800 rounded-2xl relative z-0 overflow-hidden shadow-2xl p-8 md:p-12 lg:py-16 lg:px-20 border-white/20 border-[3px]"
    role="article"
  >
    {/* grains background image  */}
    <div
      className="absolute inset-0 -z-30 opacity-5"
      style={{ backgroundImage: `url(${GrainImg})` }}
      role="presentation"
      aria-hidden="true"
    ></div>
    <div className="">{children}</div>
  </article>
  )
}

export default Card
