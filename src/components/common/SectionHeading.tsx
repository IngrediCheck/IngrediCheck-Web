const SectionHeading = ({ headign }: { headign: string }) => {
  return (
    <h3 className="font-fredoka font-semibold text-inherit text-center text-[2.6rem] sm:text-[3.2rem] md:text-[4rem]">
      {headign}
    </h3>
  );
};
export default SectionHeading;
