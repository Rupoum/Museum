"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Main = () => {
  const words = ` Welcome to the National Museum of India, a vibrant space celebrating
            the rich cultural heritage and history of India. Located in the
            heart of the country, this iconic museum showcases an expansive
            collection of artifacts, artworks, and historical treasures that
            span centuries. From ancient sculptures and traditional crafts to
            contemporary art, the museum offers a journey through India&apos;s
            diverse traditions and creative expressions. Whether you are a
            history enthusiast, art lover, or curious explorer, the National
            Museum promises an unforgettable experience, connecting you to the
            soul of India's vibrant legacy.
`;
  return (
    <>
      <div className="min-h-[40rem] max-h-[42rem] flex items-center">
        <div className="ml-48  h-64 w-[70rem]">
          <h1 className="text-3xl font-[550] text-gray-900">
            INFORMATION - NATIONAL MUSEUM
          </h1>

          <TextGenerateEffect words={words} />
        </div>
      </div>
    </>
  );
};

export default Main;
