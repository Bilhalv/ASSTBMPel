import { Link } from "react-router-dom";

export default function Navbar({ titulo }) {
  return (
    <nav className="bg-principal flex justify-between items-center py-6 px-5 shadow-md sticky top-0">
      <div className="flex gap-4">
        <Link to={"/"}>Início</Link>
        <Link to={"/alugueis"}>Aluguéis</Link>
        <Link to={"/convenios"}>Convênios</Link>
        <Link to={"/equipe"}>Equipe</Link>
        <Link to={"/esportes"}>Esportes</Link>
        <Link to={"/historico"}>Histórico</Link>
        <Link to={"/locais"}>Locais</Link>
      </div>
      <h1 className="text-accent3 text-3xl">{titulo}</h1>
      <img
        src="https://i.ibb.co/C9TxP51/download.png"
        alt="Logo"
        className="rounded-full w-[70px]"
      />
    </nav>
  );
}
