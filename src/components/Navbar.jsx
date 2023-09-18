import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import {
  AlignJustify,
  BadgeCent,
  Building,
  CreditCard,
  Home,
  ScrollText,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ titulo }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="bg-principal flex justify-between items-center py-6 px-5 shadow-md sticky top-0 z-30">
      <div className="flex gap-4">
        <button
          onClick={handleMenuClick}
          className="bg-accent2 text-white px-12 py-4 rounded flex gap-3 hover:bg-[#5c1328] transition-all-ease-in-out duration-300"
        >
          <AlignJustify />
          Menu
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to={"/"} className="flex gap-3">
              <Home /> Início
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/alugueis"} className="flex gap-3">
              <BadgeCent /> Aluguéis
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/convenios"} className="flex gap-3">
              <CreditCard /> Convênios
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/equipe"} className="flex gap-3">
              <Users /> Equipe
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/esportes"} className="flex gap-3">
              <Trophy /> Esportes
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/historico"} className="flex gap-3">
              <ScrollText /> Histórico
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/locais"} className="flex gap-3">
              <Building /> Locais
            </Link>
          </MenuItem>
        </Menu>
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
