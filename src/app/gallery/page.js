import Image from "next/image";
// import localImage from "../../assets/nextjs image.png";
import localImage from "@/assets/nextjs image.png";

export const metadata = {
  title: "ABC GALLERY PAGE",
  description: "here is all images of abc site",
};

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimizations</h1>
      <h2 className="text-3xl text-center">Next js image component</h2>
      <Image
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <h2 className="text-3xl text-center">Next js Local Image</h2>
      <Image
        className="mx-auto"
        src={localImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default GalleryPage;
