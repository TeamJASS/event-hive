import Uber from "../../../assets/images/uber.png";
import Google from "../../../assets/images/google.png";
import Grab from "../../../assets/images/grab.png";
import Medium from "../../../assets/images/medium.png";
import Youtub from "../../../assets/images/youtub.png";
import Spotify from "../../../assets/images/spotify.png";
import Microsoft from "../../../assets/images/microsoft.png";
import Stripe from "../../../assets/images/stripe.png";
import Zoom from "../../../assets/images/zoom.png";

const brandImages = [
  { name: "Spotify", path: Spotify },
  { name: "Google", path: Google },
  { name: "Stripe", path: Stripe },
  { name: "Youtub", path: Youtub },
  { name: "Microsoft", path: Microsoft },
  { name: "Medium", path: Medium },
  { name: "Zoom", path: Zoom },
  { name: "Uber", path: Uber },
  { name: "Grab", path: Grab },
];

const Clientele = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10 justify-center items-center my-20">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h2 className="text-4xl font-bold">
          Join these <span className="text-primary">brands</span>
        </h2>
        <p className="font-bold text-lg text-[#131315] w-[80%] text-center">
          We&apos;ve had the pleasure of working with industry-defining brands.
          These are just some of them.
        </p>
      </div>
      <div className="brand-logos flex flex-wrap gap-5 justify-center items-center mt-10 p-4 w-[80%] mx-auto">
        {brandImages.map((image, index) => {
          return <img key={index} src={image.path} alt={image.name} />;
        })}
      </div>
    </div>
  );
};

export default Clientele;
