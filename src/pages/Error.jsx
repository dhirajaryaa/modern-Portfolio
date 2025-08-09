import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
function Error() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-[80vh] flex items-center justify-center flex-col">
      <h1 className="text-3xl sm:text-6xl  font-bold">404</h1>
      <h2 className="text-xl sm:text-2xl  font-bold">Not Found!</h2>
      <div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-3 py-2 border rounded-lg my-5 bg-slate-800 dark:bg-gray-100 text-white dark:text-black"
        >
          <IoMdArrowBack /> Go back
        </button>
      </div>
    </section>
  );
}

export default Error;
