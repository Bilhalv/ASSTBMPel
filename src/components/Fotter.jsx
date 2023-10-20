import { AtSign, Facebook, Instagram, Phone, Smartphone } from "lucide-react";

export default function Fotter() {
  return (
    <fotter className="bg-principal flex justify-between items-center py-6 px-5 shadow-md bottom-0">
      <p className="flex">
        <AtSign />
        asstbmpel@gmail.com
      </p>
      <p className="flex">
        <Facebook />
        <a
          className="hover:underline hover:cursor-pointer"
          href="https://www.facebook.com/ASSTBMPEL"
        >
          ASSTBMPel
        </a>
      </p>
      <p className="flex">
        <Smartphone />
        +55 (53) 9 9117-7141
      </p>
      <p className="flex">
        <Phone />
        +55 (53) 3228-4355
      </p>
      <p className="flex">
        <Instagram />
        <a
          className="hover:underline hover:cursor-pointer"
          href="https://instagram.com/asstbmpel"
        >
          @asstbmpel
        </a>
      </p>
    </fotter>
  );
}
