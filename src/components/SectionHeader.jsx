
function SectionHeader({tag,title,description}) {
  return (
    <>
         <h1 className="flex justify-center">
          <span
            className="text-center uppercase tracking-widest text-lg font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"
            id="featured-projects"
          >
           {tag}
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif text-center tracking-wide mt-4 capitalize ">
        {title}
        </h2>
        <p className="text-white/60 text-center my-5 mb-16">
{description}
        </p>
    </>
  )
}

export default SectionHeader
