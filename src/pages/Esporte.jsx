import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Esporte() {
  return (
    <div>
      <Navbar titulo={"Conquistas Esportivas"} />
      <div className="flex justify-center items-center flex-col bg-principal p-5 rounded-3xl">
        <h1 className="my-4 text-3xl">Galeria de fotos</h1>
        <Link to={"/galeria"} className="bg-accent2 p-5 rounded-3xl text-white hover:bg-accent transition-all ease-in-out">
          Clique aqui para ir a galera
        </Link>
      </div>
      <main className="flex justify-center items-center flex-col">
        <h1 className="text-3xl my-4 bg-principal p-5 rounded-3xl">Nossas postagens</h1>
        <div className="flex gap-5 my-2">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FASSTBMPEL%2Fposts%2Fpfbid03HFaxmf5GbFuYgw9XP8JstbRN7L7fcaNfEjnJ3jMVQuQJJrH1vCEsvPwWxvi2Wx1l&show_text=true&width=500"
            width="500"
            height="800"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fasstbm.pelotas%2Fposts%2Fpfbid0SqUHHP2m1bU3pjYvC7WTmv7vJSgiLZn2pLksXs5JP9U6jsgvHcN49Ao2q7N46Ut7l&show_text=true&width=500"
            width="500"
            height="750"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
