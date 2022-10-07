import Header from "../components/Header";
import Image from "next/image";
const HeroArea = ({}) => {
  return (
    <section className=" h-[100vh] bg-gr">
      <Header />
      <div className="container mt-14 mx-auto grid grid-cols-2 gap-5">
        <div>
          <h1 className="text-[60px] text[#333333] font-bold lh-86">
            Sharing Creativity as Learning and Brilliant Ideas
          </h1>
          <p className="text-[16px] text-[#777777] mt-3">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
        </div>
        <div className="hero-area-right relative">
          <Image
            height={720}
            width={800}
            src={
              "https://images.businessnewsdaily.com/app/uploads/2022/04/04081907/market-on-social-media.png"
            }
          />

          <div className="absolute top-20 -right-20 bg-white shadow-lg p-3 rounded-lg">
            <Image 
            
            src="/images/image1.png" width={150} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
