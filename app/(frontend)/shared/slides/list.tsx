"use client";

import { useState } from "react"
import ArrowButton from "@components/ArrowButton";
import { FontColors, BackgroundColors } from "@constants/constants"
import useList from "@hooks/useList";
import { LogsServices } from "@services/logs";


type ListProps = {
  content: {
    costo_beneficio: string,
    creencias_contraproducentes: string[],
    distorsiones_cognitivas: string[],
    emociones: string[],
    fecha: string,
    genre: string,
    pensamiento_negativo: string,
    pensamiento_positivo: string,
    suceso_transtornador: string,
    _id: string
  }[],
};

export default function List({ content }: ListProps) {

  const [items, setItems] = useState(content); // I'll use this state to make the UI Effects
  const { actions } = useList();

  const localDeleteHandler = async (_id: string) => {
    const isDeleted = await actions.confirmAction("Eliminar", () => {
      return LogsServices.delete(_id);
    })

    if (isDeleted) {
      setItems((prevItems) => prevItems.filter((element) => element._id !== _id));
    }
  };

  return (
    <div className="pt-40 px-20 text-white">
      <h1 className={`${FontColors.white} text-center text-4xl mb-40 font-semibold hover:underline`}>Registro de Examenes</h1>
      <div className="flex flex-col justify-center gap-5 max-w-2xl m-auto">
        {items.map((element, index) => (
          <ListElement
            key={element._id}
            _id={element._id}
            costo_beneficio={element.costo_beneficio}
            creencias_contraproducentes={element.creencias_contraproducentes}
            distorsiones_cognitivas={element.distorsiones_cognitivas}
            emociones={element.emociones}
            fecha={element.fecha}
            genre={element.genre}
            pensamiento_positivo={element.pensamiento_positivo}
            pensamiento_negativo={element.pensamiento_negativo}
            suceso_transtornador={element.suceso_transtornador}
            deleteHandler={localDeleteHandler}
          />
        ))}
      </div>
    </div>
  )
}

type ListElementProps = {
  costo_beneficio: string,
  _id: string,
  creencias_contraproducentes: string[],
  distorsiones_cognitivas: string[],
  emociones: string[],
  fecha: string,
  genre: string,
  pensamiento_negativo: string,
  pensamiento_positivo: string,
  suceso_transtornador: string,
  deleteHandler: (_id: string) => void
};

function ListElement({
  costo_beneficio,
  creencias_contraproducentes,
  distorsiones_cognitivas,
  emociones,
  fecha,
  _id,
  pensamiento_negativo,
  pensamiento_positivo,
  suceso_transtornador,
  deleteHandler,
}: ListElementProps) {

  const [showDetails, setShowDetails] = useState(false);
  const MIN_EMOTIONS_SHOWN = 3;
  const emotionsShown = emociones.slice(0, (emociones.length > MIN_EMOTIONS_SHOWN) ? MIN_EMOTIONS_SHOWN : emociones.length);
  const extraEmotionsCount = emociones.length - MIN_EMOTIONS_SHOWN;

  return (
    <div className="border rounded-md overflow-hidden border-gray-200 shadow-md transition-transform duration-300 hover:scale-101 hover:shadow-white">
      {/* Shower */}
      <div className={`flex items-center justify-between ${BackgroundColors.mauve_dark} p-5`}>
        <div>
          <p className="text-lg">{suceso_transtornador}</p>
          <p className="text-sm">{emotionsShown} {extraEmotionsCount ? `(+${extraEmotionsCount})` : null}</p>
        </div>
        <ArrowButton selected={showDetails} setSelected={setShowDetails} />
      </div>

      {/* DropBox con los detalles */}
      <div className={`
        grid transition-all duration-300 ease-in-out
        ${showDetails ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
      `}>

        <div className={`overflow-hidden ${BackgroundColors.mauve_black}`}>
          <div className="flex flex-col p-5 gap-5 text-sm">

            <DetailsList title="Emociones" content={emociones} />
            <DetailsList title="Distorsiones Cognitivas" content={distorsiones_cognitivas} />
            <DetailsList title="Creencias Contraproducentes" content={creencias_contraproducentes} />

            <DetailsInfo title="Costo-Beneficio" value={costo_beneficio} />
            <DetailsInfo title="Pensamiento Negativo" value={pensamiento_negativo} />
            <DetailsInfo title="Pensamiento Positivo" value={pensamiento_positivo} />
            <DetailsInfo title="Última modificación" value={fecha} />

            <div className="flex justify-center gap-5">
              <DetailsButton
                title="Eliminar"
                onClick={deleteHandler}
                value={_id}
              />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

type DetailsButtonProps = {
  title: string,
  value: string,
  onClick: (_id: string) => void,
};

function DetailsButton({ title, onClick, value }: DetailsButtonProps) {
  return (
    <button
      className={`${BackgroundColors.mauve_dark} px-10 transition-all duration-300 py-3 cursor-pointer rounded-xl hover:scale-105 hover:bg-purple-100/50`}
      onClick={() => onClick(value)}
    >
      {title}
    </button>
  );
};

function DetailsInfo({ title, value }: { title: string, value: string }) {
  return (
    <div>
      <p><span className="font-semibold">{title}</span></p>
      <p className="pl-5">{value}</p>
    </div>
  );
}


function DetailsList({ title, content }: { title: string, content: string[] }) {
  return (
    <div>
      <p><span className="font-semibold">{title}: </span></p>
      <ul className="list-disc pl-5">
        {content.map((element, index) => (
          <li key={`${element}-${index}`}>{element}</li>
        ))}
      </ul>
    </div>
  );
};


