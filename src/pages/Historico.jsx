import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Historico() {
  return (
    <div>
      <Navbar titulo={"Histórico de nossos presidentes"} />
      <div className="flex gap-5 flex-wrap py-12 justify-center items-center">
        <Card
          type={"historico"}
          titulo={"Querino de Quadros"}
          img={"../../Assets/hist/p1.jpeg"}
          periodo={"1967-1968"}
        />
        <Card
          type={"historico"}
          titulo={"Edwaldo Milbrathz Born"}
          img={"../../Assets/hist/p2.jpeg"}
          periodo={"1968-1970"}
        />
        <Card
          type={"historico"}
          titulo={"Miguel Silva Bitencourt"}
          img={"../../Assets/hist/p3.jpeg"}
          periodo={"1970-1977 / 1983-1985"}
        />
        <Card
          type={"historico"}
          titulo={"Elio Olimar Rodrigues"}
          img={"../../Assets/hist/p4.jpeg"}
          periodo={"1977-1979"}
        />
        <Card
          type={"historico"}
          titulo={"Arlindo da Silva Dias"}
          img={"../../Assets/hist/p5.jpeg"}
          periodo={"1979-1981"}
        />
        <Card
          type={"historico"}
          titulo={"Edvaldo Antunes Vieira"}
          img={"../../Assets/hist/p6.jpeg"}
          periodo={"1981-1983 / 1991-1993"}
        />
        <Card
          type={"historico"}
          titulo={"Ademir Urrutia Caldas"}
          img={"../../Assets/hist/p7.jpeg"}
          periodo={"1985-1987"}
        />
        <Card
          type={"historico"}
          titulo={"Manoel Benício Braga Rios"}
          img={"../../Assets/hist/p8.jpeg"}
          periodo={"1987-1989"}
        />
        <Card
          type={"historico"}
          titulo={"José Albano Cruz"}
          img={"../../Assets/hist/p9.jpeg"}
          periodo={"1989-1991"}
        />
        <Card
          type={"historico"}
          titulo={"Trademar Oliveira Isquierdo"}
          img={"../../Assets/hist/p10.jpeg"}
          periodo={"1993-1997 / 1999-2001"}
        />
        <Card
          type={"historico"}
          titulo={"José Felipe Cavalcante de Aguilar"}
          img={"../../Assets/hist/p11.jpeg"}
          periodo={"19997-1999"}
        />
        <Card
          type={"historico"}
          titulo={"Paulo Roberto Gonçalves Siqueira"}
          img={"../../Assets/hist/p12.jpeg"}
          periodo={"2001-2004"}
        />
        <Card
          type={"historico"}
          titulo={"Adão Roberto Pinto Valente"}
          img={"../../Assets/hist/p13.jpeg"}
          periodo={"2005-2006 / 2006-2009"}
        />
        <Card
          type={"historico"}
          titulo={"Érico Leal da Rosa"}
          img={"../../Assets/hist/p14.jpeg"}
          periodo={"2004-2005"}
        />
        <Card
          type={"historico"}
          titulo={"Edwaldo Milbrathz Born"}
          img={"../../Assets/hist/p15.jpeg"}
          periodo={"2016-2018"}
        />
      </div>
    </div>
  );
}
