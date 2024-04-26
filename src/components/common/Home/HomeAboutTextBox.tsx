const HomeAboutTextBox = ({
  heading,
  para,
}: {
  heading: string;
  para: string;
}) => {
  return (
    <>
      <div className="max-w-[33.5rem] md:max-w-[50rem]">
        <h2 className="font-fredoka text-green-dark font-semibold text-[2rem] md:text-[3.2rem] leading-[2.52rem] md:leading-[4rem]">
          {heading}
        </h2>
        <p className="text-dark mt-[2.17rem] md:mt-[3.2rem] text-[1.4rem] md:text-[2rem] leading-[2.02rem] md:leading-[3.2rem]">
          {para}
        </p>
      </div>
    </>
  );
};
export default HomeAboutTextBox;
