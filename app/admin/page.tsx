import Header from "@/components/header";
import Image from "next/image";

const Admin = () => {
  return (
    <>
      <Header title="Home" />

      <div className="mt-5 h-80 max-w-full overflow-hidden">
        <div className="relative mx-auto w-[95%] pb-[64%]">
          <Image
            src="/card.png"
            alt="School Management Solution Card"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
