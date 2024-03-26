import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none w-full h-full">
      <Image
        src="/slow.png"
        alt="avatar"
        width={1024}
        height={1024}
        className="translate-z-0 w-full h-full clip-polygon"
      />
    </div>
  );
};

export default Avatar;
