import { Link } from "react-router-dom";
import notFound from "../../assets/images/notfound.svg";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const socials = [
  { name: "Instagram", path: "/", icon: RiInstagramFill },
  { name: "Facebook", path: "/", icon: FaFacebookF },
  { name: "LinkedIn", path: "/", icon: FaLinkedinIn },
  { name: "Twitter", path: "/", icon: FaTwitter },
  { name: "Youtube", path: "/", icon: FaYoutube },
];

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center py-10 gap-10 h-full">
      <img src={notFound} className="h-[250px]" />
      <p className="text-4xl font-bold">Oops!</p>
      <p className="text-2xl text-gray-400">
        We can&apos;t seem to find the page you are looking for
      </p>
      <Link
        to="/"
        className="bg-primary p-2 px-4 text-lg text-white rounded-full"
      >
        Back to Homepage
      </Link>
      <div className="flex flex-col gap-6 items-center mt-20">
        <p className="text-lg">Follow us on</p>
        <div className="flex gap-4">
          {socials.map((social, index) => {
            const LinkIcon = social.icon;
            return (
              <Link
                to={social.path}
                key={index}
                className="p-4 rounded-xl bg-[#EBE6F9]"
              >
                <LinkIcon className="text-primary" size={25} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
