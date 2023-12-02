import retro from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";

export function Footer() {
  return (
    <div>
      <div className=" grid gap-8 mx-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid grid-cols-[30%,1fr] gap-x-4">
          <div className="">
            <img className="object-fit" src={retro} />
          </div>
          <div>
            <h2>01</h2>
            <h3>Reviving Retro pcs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="grid grid-cols-[30%,1fr] gap-x-4">
          <div className="">
            <img className="object-fit" src={laptop} />
          </div>
          <div>
            <h2>02</h2>
            <h3>Top 10 laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="grid grid-cols-[30%,1fr] gap-x-4">
          <div className="">
            <img className=" object-fit" src={gaming} />
          </div>
          <div>
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
