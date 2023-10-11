import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";

export default function Equipe() {
  return (
    <>
      <Navbar titulo={"Nossa equipe atual"} />
      <main className="flex gap-5 flex-wrap py-12 justify-center items-center">
        <Card
          type={"equipe"}
          titulo={
            <p>
              Luiz <strong>Antônio</strong> da Rocha Garcia
            </p>
          }
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"1º Tenente aposentado"}
          cargo={"Presidente da associação"}
        />
        <Card
          type={"equipe"}
          titulo={
            <p>
              Claudio Cesar <strong>Moreira</strong> Vargas
            </p>
          }
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"Capitão RR aposentado"}
          cargo={"Chefe da secretaria na associação"}
        />
        <Card
          type={"equipe"}
          titulo={
            <p>
              Marcio <strong>Gil</strong> Rocha da Silva
            </p>
          }
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"1º Tenente aposentado"}
          cargo={"Financeiro e Diretor de esportes na associação"}
        />
        <Card
          type={"equipe"}
          titulo={
            <p>
              Sidnei <strong>Lemke</strong> da Silva
            </p>
          }
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"1º Tenente aposentado"}
          cargo={"Vice presidente da associação"}
        />
        <Card
          type={"equipe"}
          titulo={<p><strong>Edson</strong> Vieira de Vieira</p>}
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"Não militar"}
          cargo={"Serviços gerais na associação"}
        />
        <Card
          type={"equipe"}
          titulo={<p><strong>Luiza</strong> Cardoso de Oliveira</p>}
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"Não militar"}
          cargo={"Secretária na associação"}
        />
        <Card
          type={"equipe"}
          titulo={
            <p>
              <strong>Pedro</strong> Bilhalva Oliveira
            </p>
          }
          img={"https://i.ibb.co/C9TxP51/download.png"}
          patente={"Não militar"}
          cargo={"Técnico de informática na associação"}
        />
      </main>
      <Fotter/>
    </>
  );
}
