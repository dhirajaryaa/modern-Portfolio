import { thought } from "../data/profile";

function Thoughts() {
  return (
    <section className="flex flex-col gap-2 my-8">
      <p className="text-lg font-semibold">my thoughts 🤷🏻‍♂️!!</p>
      <p className="text-gray-700 text-base italic font-text px-10 py-2">
       <span className="not-italic">  🤫
       </span>
  {thought}
      </p>
    </section>
  );
}

export default Thoughts;
