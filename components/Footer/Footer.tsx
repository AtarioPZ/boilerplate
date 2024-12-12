import Image from "next/image";
import CustomSection from "../Layout/CustomSection";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <CustomSection className="flex-col px-4 py-4 gap-6">
        <div className="flex flex-col gap-2">
          <p>Footer</p>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-b border-white hover:border-black rounded-md"
            >
              <Image
                src="/icons/FB.svg"
                alt=""
                width={24}
                height={24}
                className=""
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-b border-white hover:border-black rounded-md"
            >
              <Image
                src="/icons/IG.svg"
                alt=""
                width={24}
                height={24}
                className=""
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p>logoipsum &copy; 2024</p>
        </div>
      </CustomSection>
    </footer>
  );
};

export default Footer;
