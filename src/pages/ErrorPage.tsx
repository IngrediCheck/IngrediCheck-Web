import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center">
        <h3 className="font-fredoka font-semibold text-inherit text-center text-[4rem] md:text-[6rem] text-green-dark">
          404
        </h3>
        <p className="text-[5rem]">Page not found!</p>
        <Link
          className="bg-orang w-[25rem] text-center font-bold text-[2.4rem] capitalize py-[1.8rem] rounded-[2rem] text-light-text mt-[2rem]"
          to="/"
        >
          Go back to home
        </Link>
      </section>
    </>
  );
};
export default ErrorPage;
