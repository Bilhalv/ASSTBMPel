import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";

function App() {
  return (
    <>
      <Navbar titulo="Nossos locais para alugar" />
      <main className="flex justify-center items-center flex-wrap gap-12">
        <Card
          type="aluguel"
          titulo="Quadra de esportes"
          img="https://i.ibb.co/31Hyfdq/Quadra-de-esportes.jpg"
          precoNormal="80,00"
          precoSocio="Grátis"
        />
        <Card
          type="aluguel"
          titulo="Area da churrasqueira"
          img="https://imgur.com/zrUyApO.jpg"
          precoNormal="300,00"
          precoSocio="150,00"
        />
        <Card
          type="aluguel"
          titulo="Salão Grande"
          img="https://imgur.com/EKG7EHj.jpg"
          precoNormal="2.000,00"
          precoSocio="800,00"
        />
        <Card
          type="aluguel"
          titulo="Salão pequeno + Churrasqueira"
          img="https://i.ibb.co/3Mj8zxS/05161-BED-E0-E3-46-A7-B3-C3-CA44-D369-C881.jpg"
          precoNormal="1.000,00"
          precoSocio="400,00"
        />
      </main>
      <Fotter/>
    </>
  );
}

export default App;
