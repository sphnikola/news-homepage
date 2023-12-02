import retro from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";

export function Footer() {
  return (
    <div>
      <div className=" grid gap-8 mx-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid grid-cols-[30%,1fr] gap-x-4">
          <div className="">
            <img className="object-fit" src={retro} />
          </div>
          <div className="">
            <h2 className="mb-5 text-dark-white  leading-[32px] text-[32px] md:text-[36px] md:leading-[36px] font-bold]">
              01
            </h2>
            <a
              href="#"
              className="mb-2 block text-dark-blue te text-lg font-extrabold leading-[18px] hover:text-light-pink focus:text-light-pink"
            >
              Reviving Retro pcs
            </a>
            <p className="text-light-gray text-[15px] font-medium leading-[22.5px]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[30%,1fr] gap-x-4">
          <div className="">
            <img className="object-fit" src={laptop} />
          </div>
          <div>
            <h2 className="mb-5 text-dark-white  leading-[32px] text-[32px] md:text-[36px] md:leading-[36px] font-bold]">
              02
            </h2>
            <a
              href="#"
              className="mb-2 block text-dark-blue te text-lg font-extrabold leading-[18px] hover:text-light-pink focus:text-light-pink"
            >
              Top 10 laptops of 2022
            </a>
            <p className="text-light-gray text-[15px] font-medium leading-[22.5px]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[30%,1fr] gap-x-4">
          <div className="">
            <img className=" object-fit" src={gaming} />
          </div>
          <div>
            <h2 className="mb-5 text-dark-white  leading-[32px] text-[32px] md:text-[36px] md:leading-[36px] font-bold]">
              03
            </h2>
            <a
              href="#"
              className="mb-2 block text-dark-blue te text-lg font-extrabold leading-[18px] hover:text-light-pink focus:text-light-pink"
            >
              The Growth of Gaming
            </a>
            <p className="text-light-gray text-[15px] font-medium leading-[22.5px]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
