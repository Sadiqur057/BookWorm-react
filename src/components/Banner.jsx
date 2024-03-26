import bannerImg from "../../public/banner-img.png";
const Banner = () => {
  return (
    <div className="bg-base-200 rounded-lg lg:rounded-3xl md:rounded-xl">
      <div className="flex flex-col md:flex-row-reverse px-8 md:px-10 lg:px-28 py-8 md:py-10 lg:py-20 gap-6 md:gap-14 items-center">
        <div className="w-1/2 md:w-[40%] lg:w-1/3">
          <img src={bannerImg} className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-snug mb-6 md:mb-8 lg:mb-10">Books to freshen up your bookshelf</h1>
          <button className="text-white py-3 md:py-4 lg:py-5 px-7 font-medium bg-c-primary text-lg md:text-xl font-work hover:border-c-primary border-[1px] hover:bg-white hover:text-c-primary rounded-lg">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
