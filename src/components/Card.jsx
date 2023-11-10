import React from "react";

export default function Card({
  type,
  titulo,
  img,
  precoNormal,
  precoSocio,
  patente,
  cargo,
  localizacao,
  periodo,
}) {
  return (
    <>
      {type === "aluguel" && (
        <div className="w-[540px] bg-principal my-6 rounded-xl px-6 shadow-md">
          <h1 className="text-center py-4 text-xl">{titulo}</h1>
          <img src={img} alt="" className=" rounded-xl" />
          <div className="text-lg py-4">
            <p className="font-bold">
              Preço normal: <span className="font-normal">R${precoNormal}</span>
            </p>
            <p className="font-bold">
              Preço para sócio:{" "}
              <span className="font-normal">
                {precoSocio === "Grátis" ? "Grátis" : `R$${precoSocio}`}
              </span>
            </p>
          </div>
        </div>
      )}
      {type === "equipe" && (
        <div className="w-[540px] bg-principal text-center px-4 rounded-xl s hadow-md">
          <h1 className="py-4 text-xl">{titulo}</h1>
          <img src={img} alt="" className="w-full rounded-xl shadow-md" />
          <div className="py-4">
            <p className="italic">{patente}</p>
            <p className="italic">{cargo}</p>
          </div>
        </div>
      )}
      {type === "locais" && (
        <div className="w-[540px] bg-principal text-center px-4 rounded-xl shadow-md">
          <h1 className="py-4 text-xl">{titulo}</h1>
          <img
            src={img}
            alt={titulo}
            className="rounded-xl shadow-md object-cover"
            style={{ height: "500px", width: "500px" }}
          />
          <p className="italic py-4">{localizacao}</p>
        </div>
      )}
      {type === "historico" && (
        <div className="w-[540px] bg-principal text-center px-4 rounded-xl shadow-md">
          <h1 className="py-4 text-xl">{titulo}</h1>
          <img
            src={img}
            alt=""
            className="w-full rounded-xl shadow-md max-h-[500px] object-cover"
          />
          <p className="italic py-4">{periodo}</p>
        </div>
      )}
    </>
  );
}
