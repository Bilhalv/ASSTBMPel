import React from "react";

export default function Post({
  titulo,
  desc,
  img,
  dsemana,
  horario,
  gratuito,
  info,
}) {
  return (
    <div className="w-[50%] bg-principal m-auto my-12 rounded-2xl px-4 shadow-sm">
      <h1 className="text-3xl p-4">{titulo}</h1>
      <img src={img} alt="" className="w-full rounded-2xl" />
      <h2 className="text-center py-4">{desc}</h2>
      <ul className="px-6 py-3 text-lg flex flex-col gap-4">
        <li>{dsemana}</li>
        <li>{horario}</li>
        <li>{gratuito}</li>
      </ul>
      <h2 className="p-8">{info}</h2>
    </div>
  );
}
