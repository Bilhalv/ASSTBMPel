import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Locais() {
  return (
    <div>
      <Navbar titulo={"Locais"} />
      <main className="flex flex-wrap gap-4 items-center justify-center py-12">
        <Card
          type={"locais"}
          titulo={"ASSTBMPel"}
          img={"https://i.ibb.co/C9TxP51/download.png"}
          localizacao={"Nossa sede regional de Pelotas."}
        />

        <Card
          type={"locais"}
          titulo={"Casas da Barra"}
          img={"https://i.ibb.co/7CCWq1F/IMG-20230623-WA0024.jpg"}
          localizacao={"Casas disponíveis em Rio Grande - RS."}
        />

        <Card
          type={"locais"}
          titulo={"Casas de Cidreira"}
          img={"https://i.ibb.co/C9TxP51/download.png"}
          localizacao={"Casas disponíveis em Cidreira - RS."}
        />
      </main>
    </div>
  );
}
