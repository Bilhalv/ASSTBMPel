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
      <div className="w-full flex gap-4">
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
          <Link to={"/"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <Home /> Início
            </MenuItem>
          </Link>
          <Link to={"/alugueis"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <BadgeCent /> Aluguéis
            </MenuItem>
          </Link>
          <Link to={"/convenios"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <CreditCard /> Convênios
            </MenuItem>
          </Link>
          <Link to={"/equipe"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <Users /> Equipe
            </MenuItem>
          </Link>
          <Link to={"/esportes"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <Trophy /> Esportes
            </MenuItem>
          </Link>
          <Link to={"/historico"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <ScrollText /> Histórico
            </MenuItem>
          </Link>
          <Link to={"/locais"}>
            <MenuItem
              onClick={handleClose}
              className="w-full flex gap-3 items-center justify-center transition-all-ease-in-out duration-300"
            >
              <Building /> Locais
            </MenuItem>
          </Link>
        </Menu>
      </div>
      <h1 className="text-accent3 w-full text-3xl text-center">{titulo}</h1>
      <div className="w-full flex justify-between">
        <a></a>
        <Link className="rounded-full" to={"/"}>
          <img
            src="https://i.ibb.co/fCyMR6Y/icone-removebg-preview.png"
            alt="Logo"
            className="w-[70px]"
          />
        </Link>
      </div>
    </nav>
  );
}
