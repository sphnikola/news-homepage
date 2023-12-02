import mobileImg from "./assets/images/image-web-3-mobile.jpg";
import desktopImg from "./assets/images/image-web-3-desktop.jpg";

export default function () {
  return (
    <div
      className="grid gap-8 mx-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-10 lg:gap-x-8 
    "
    >
      <div className="block md:hidden">
        <img src={mobileImg} />
      </div>
      <div className="hidden md:block md:col-start-1 md:col-end-3 ">
        <img src={desktopImg} />
      </div>
      <div className="">
        <h1 className="text-dark-blue font-extrabold max-w-[70rem] text-[40px] leading-[40px] md:text-[53.6px] md:leading-[53.6px]">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="space-y-5 lg:row-start-2 lg:col-start-2 md:space-y-8">
        <p className="text-[15px] text-light-gray  leading-[22.5px] font-normal">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?{" "}
        </p>
        <button className="text-white text-[15px] font-bold bg-light-pink tracking-[3.75px] leading-[22.5px] px-[30px] py-[15px] uppercase">
          Read More
        </button>
      </div>
      <div className="bg-dark-blue text-white p-[30px] md:col-start-1 md:col-end-3 lg:col-start-3 lg:row-start-1 lg:row-end-3">
        <h2 className="mb-8 text-light-brown text-[32px] font-bold leading-8">
          New
        </h2>
        <span className="flex flex-col gap-y-6">
          <a href="#" className="s1_title">
            Hydrogen VS Electric Cars
          </a>
          <p className="s1_excerpt">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr />
        </span>
        <span className="flex flex-col gap-y-6">
          <a href="#" className="s1_title">
            The Downsides of AI Artistry
          </a>
          <p className="s1_excerpt ">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
        </span>
        <span className="flex flex-col gap-y-6">
          <a href="#" className="s1_title">
            Is VC Funding Drying Up?
          </a>
          <p className="s1_excerpt">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </span>
      </div>
    </div>
  );
}
