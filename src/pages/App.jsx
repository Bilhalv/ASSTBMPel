import React from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";

function App() {
  return (
    <>
    <main>
      <img src="https://i.ibb.co/DRyp3XH/asstbmpel.jpg" className="w-full"/>
      <Navbar titulo={"ASSTBMPel"} />
      <Post
        titulo="Zumba 🕺"
        img="https://conteudo.imguol.com.br/c/entretenimento/c1/2016/10/04/zumba-danca-1475607275131_v2_900x506.jpg"
        desc="💃🎉 Junte-se a nós para uma animada sessão de Zumba! 🎉💃"
        dsemana="📅 Segundas e quartas-feiras"
        horario="⏰ 19h às 20h"
        gratuito="🆓 Gratuito para sócios"
        info="Prepare-se para se mover, se divertir e se exercitar com nossa aula de Zumba. É um treino cheio de energia que combina ritmos dançantes com exercícios cardiovasculares. Não perca essa experiência de dança fitness emocionante!"
      />

      <Post
        titulo="Aulas de Inglês 📚"
        img="https://imgur.com/qo0s7JV.jpg"
        desc="📚 Aperfeiçoe suas habilidades linguísticas com nossas aulas de inglês! 📚"
        dsemana="📅 Segundas e quintas-feiras"
        horario="⏰ 14h às 15h30min"
        gratuito="🆓 Gratuito para sócios"
        info="Aprimore seu inglês de forma divertida e interativa! Nossas aulas oferecem uma oportunidade de aprender e praticar o idioma, abordando gramática, vocabulário e conversação. Não perca essa chance de expandir seus conhecimentos linguísticos!"
      />

      <Post
        titulo="Programa Vida Ativa 💪"
        img="https://i.ibb.co/4MX3SNG/7-AD5642-D-AF8-B-45-A4-B01-B-A72-DEE318-C41.jpg"
        desc="🌞🏋️‍♀️ Participe do Programa Vida Ativa! 🏋️‍♀️🌞"
        dsemana="📅 Terças e sextas-feiras"
        horario="⏰ 16h às 17h"
        gratuito="🆓 Gratuito"
        info="O Programa Vida Ativa é uma ótima maneira de se exercitar e manter um estilo de vida saudável. Com uma variedade de atividades físicas e orientação especializada, você terá a oportunidade de melhorar sua condição física e bem-estar. Todos são bem-vindos para participar!"
      />

      <Post
        titulo="Ginástica para Idosos 👵"
        img="https://www.sescsp.org.br/wp-content/uploads/2022/01/ESPORTE-PARA-IDOSOS-ft-divulgacao-664x332.png"
        desc="👵🏋️‍♀️ Cuide do seu corpo com a Ginástica para Idosos! 🏋️‍♀️👴"
        dsemana="📅 Terças e quintas-feiras"
        horario="⏰ 8h30min às 9h30min e 10h15min às 11h15min"
        gratuito="💰 R$95 mensais"
        info="Nossa aula de ginástica é especialmente projetada para atender às necessidades e capacidades dos idosos. Com exercícios adequados e orientação profissional, você poderá melhorar sua força, flexibilidade e equilíbrio. Não deixe de se juntar a nós para cuidar da sua saúde e bem-estar!"
      />

      <Post
        titulo="Aulas de Pintura 🎨🖌️"
        img="https://img.freepik.com/vetores-gratis/sala-de-aula-de-estudio-de-arte-com-pinturas-de-cavaletes-e-pinceis-nas-prateleiras-busto-e-pinturas-nas-paredes_107791-6641.jpg"
        desc="🎨🖌️ Explore sua criatividade com nossas aulas de pintura! 🎨🖌️"
        dsemana="📅 Terças-feiras"
        horario="⏰ 14h às 16h"
        gratuito="🆓 Gratuito para sócios"
        info="Descubra o artista dentro de você com nossas aulas de pintura! Aprenda técnicas e explore diferentes estilos artísticos enquanto desenvolve sua criatividade. Nosso instrutor experiente irá orientá-lo ao longo do processo, ajudando você a criar obras de arte únicas. Junte-se a nós e deixe sua imaginação fluir nas terças-feiras!"
      />

      <Post
        titulo="Futebol ⚽️"
        img="https://img.freepik.com/fotos-gratis/futebol-na-praia_53876-31635.jpg"
        desc="⚽️ Venha jogar futebol conosco! ⚽️"
        dsemana="📅 Segunda e quintas"
        horario="⏰ A partir das 15h30"
        gratuito="🆓 Gratuito para sócios"
        info="Junte-se a nós para partidas animadas de futebol! Convide seus amigos e divirta-se em nossos jogos semanais. Aproveite a oportunidade para praticar suas habilidades, fazer exercício e desfrutar de momentos de competição saudável. Todos os níveis são bem-vindos, desde iniciantes até jogadores experientes. Não perca essa chance de se divertir em campo!"
      />
    </main>
    <Fotter/>
    </>
  );
}

export default App;
