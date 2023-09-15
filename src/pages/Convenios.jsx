import React from "react";
import Navbar from "../components/Navbar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

export default function Convenios() {
  return (
    <div>
      <Navbar titulo={"Nossos convênios disponiveis"} />
      <main className="flex flex-col items-center">
        <h1 className="text-2xl mt-12">Nossos convênios</h1>
        <div className="my-12 z-10">
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Clínica Geral</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                DR. Claudia Nogueira <br /> End. Rua Santa Cruz Nº3132
                <br /> Tel.:(53) 3228-4768 <br />
                <br />
                SÓCIOS E DEPENDENTES NÃO PAGAM TAXA DO IPE.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Dentista</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dr. Dalvio Alencar Gallas Lippert CRO 23770
                <br />
                Especialista em Implantes Dentários
                <br />
                Especialista em Ortodontia
                <br />
                Valor: R$35,00
                <br />
                <br />
                Tel.: (53) 99711-6961.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Farmácia São Francisco</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Desc. 15% medicamentos de referência
                <br />
                E até 60% em medicamento genérico
                <br />
                Tel.: (53) 3302.8185
                <br />
                <br />
                End. Av. São Francisco de Paula Nº3522
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Óticas Bilharva</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Desc. 25% a 15%
                <br />
                Tel.:(53) 3225-9000
                <br />
                <br />
                End. Rua Marechal Floriano Nº 171
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Unopar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Desc. 20%
                <br />
                Tel.: (53) 3028.3591
                <br />
                <br />
                End. Rua Andrade Neves Nº2288
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Ambulare</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1 className="font-bold">Atendimento Pré-Hospitalar</h1>
                <br />
                <ul className="list-disc px-10">
                  <li>Desmaios</li>
                  <li>Problmas cariológicos/respiratórios</li>
                  <li>Acidentes com traumas</li>
                  <li>Quedas e cortes</li>
                </ul>
                <br />
                End. Av. Bento Gonçalves, Nº4061
                <br />
                Tel.: 3031-0001 ou 999.196.161
                <br />
                <br />
                Email – pelotas@ambulare.com
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                The Place - English School (Escola de Inglês)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Curso de inglês com desconto de 10% nas mensalidades para
                associados e seus dependentes.
                <br />
                End. AV. Domingos de Almeida Nº 1355
                <br />
                <br />
                Tel.: (53) 981404153
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Aula de Zumba</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dias: terças e sextas
                <br />
                Horaro: 16:00 às 17:00
                <br />
                Local: Av. Domingos de Almeida N°1489
                <br />
                <br />
                Gratuita para sócios e dependentes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Clínica de Fisioterapia Daniela Castro</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Reabilitação-Pilates-Massoterapia
                <br />
                Desc. 20% Tel: (53) 9 8439-9181
                <br />
                <br />
                Local: Av.Domingos de Almeda N° 487
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Fisioterapia</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Kauane Ramos
                <br />
                Tel.: (53) 9 8456-4140 Ligar para marcar consultas.
                <br />
                <br />
                Local: Av. Domingos de Almeida N° 1489
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>NF - Embelezamento Automotivo</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Tel.: (53) 9 9909-7295
                <br />
                ou
                <br /> (54) 9 9617-8333 <br />
                <br />
                End.Rua Monsenhor Silvano Souza N° 13
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Sest Senat</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1 className="text-accent4 text-xl">Psicologia</h1>
                Sessão de psicoterapia: R$ 45,00
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Nutrição</h1>
                Avaliação: R$ 40,00
                <br />
                Seções subsequentes: R$ 35,00
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Odontologia</h1>
                Avaliação: R$ 35,00
                <br />
                Demais valores de acordo com avaliação e orçamento
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Fisioteravida</h1>
                Centro de Recuperação e Condicionamento Físico que estará
                ofertando aos associados as seguintes áreas: Tel.:(53)
                98160-7879
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Academia</h1>
                Trabalhamos de forma de personalizada onde na qual o aluno terá
                aula individual com o personal com a sua hora marcada.
                <br />O valor de academia para treinar todos os dias é de 250,00
                reais.
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Nutrição</h1>
                <ul className="list-disc px-10">
                  <li>Avaliação Corporal</li>
                  <li>Reeducação Alimentar</li>
                  <li>Plano Alimentar Individualizado</li>
                  <li>Emagrecimento e Ganho de peso saudável</li>
                  <li>Prevenção e tratamento de doenças</li>
                </ul>
                <br />
                O valor da consulta de nutrição é de 130,00 reais.
                <br />
                <br />
                OBS: LEMBRANDO QUE TODOS OS ASSOCIADOS E DEPENDENTES <br />{" "}
                TERAM 10 % DE DESCONTOS NAS ÁREAS DE FISIOTERAPIA, ACADEMIA E
                NUTRIÇÃO.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Doctor Med</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h1 className="text-accent4 text-xl">Especialidades Médicas</h1>
                <br />
                <ul className="list-disc px-10">
                  <li>ALERGOLOGIA</li>
                  <li>ANGIOLOGIA</li>
                  <li>CARDIOLOGIA</li>
                  <li>CIRURGIÃO GERAL</li>
                  <li>CLÍNICA GERAL</li>
                  <li>DERMATOLOGIA</li>
                  <li>ECOGRAFIA / ULTRASSONOGRAFIA</li>
                  <li>ENDOCRINOLOGIA</li>
                  <li>GASTROENTEROLOGIA</li>
                  <li>GERIATRIA</li>
                  <li>GINECOLOGIA/OBSTETRÍCIA</li>
                  <li>MÉDICO DO TRABALHO</li>
                  <li>NEFROLOGIA</li>
                  <li>NEUROLOGIA</li>
                  <li>OFTALMOLOGIA</li>
                  <li>ORTOPEDIA/TRAUMATOLOGIA</li>
                  <li>OTORRINOLARINGOLOGIA</li>
                  <li>PEDIATRIA</li>
                  <li>PNEUMOLOGIA</li>
                  <li>PROCTOLOGIA</li>
                  <li>PSIQUIATRIA</li>
                  <li>REUMATOLOGIA</li>
                  <li>UROLOGIA</li>
                  <li>VASCULAR</li>
                </ul>
                <br />
                <h1 className="text-accent4 text-xl">Exames Laboratoriais</h1>
                Análises Clínicas(Todos)
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Exames de Imagem</h1>
                <ul className="list-disc px-10">
                  <li>ELETROCARDIOGRAMA</li>
                  <li>MAMOGRAFIA</li>
                  <li>MEDICINA NUCLEAR</li>
                  <li>RAIOS-X</li>
                  <li>RESSONANCIA MAGNÉTICA</li>
                  <li>TOMOGRAFIA COMPUTADORIZADA</li>
                  <li>ULTRASSONOGRAFIA</li>
                  <li>ENTRE OUTROS</li>
                </ul>
                <br />
                <h1 className="text-accent4 text-xl">Horário de atendimento</h1>
                Segunda a sexta das 07:00 às 18:00 Sabado das 08:00 às 12:00
                <br />
                <br />
                <h1 className="text-accent4 text-xl">Endereço</h1>
                Rua General Osório Nº 874, Centro, Pelotas Tel.: (53) 3325-0840
                ou (53) 98148-5678
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                DR. José Paulo Mendes e Luis Paulo Niktaszewcz (Dentista)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-disc px-10">
                  <li>Endontologia</li>
                  <li>Ontologia</li>
                  <li>Estética</li>
                  <li>Prótese</li>
                </ul>
                <br />
                End. Rua Andrades Neves 3350
                <br />
                Tel.: (53) 3222-9229
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </main>
    </div>
  );
}
