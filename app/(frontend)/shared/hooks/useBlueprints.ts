"use client";

import { useState } from "react";
import { toast } from "sonner";
import { RefObject } from "react";
import { scrollToTop } from "@utils/scroll";
import { handleToastByQuery } from "@utils/handleToast";
import { BlueprintsServices } from "@services/blueprints";

export function useBlueprints(mainRef: RefObject<HTMLElement | null>) {
  const [suceso_transtornador, setSucesoTranstornador] = useState<string>("");
  const [pensamiento_positivo, setPensamientoPositivo,] = useState<string>("");
  const [pensamiento_negativo, setPensamientoNegativo] = useState<string>("");
  const [costo_beneficio, setCostoBeneficio] = useState<string>("");
  const [emociones, setEmociones] = useState<string[]>([]);
  const [distorsiones_cognitivas, setDistorsionesCognitivas,] = useState<string[]>([]);
  const [creencias_contraproducentes, setCreenciasContraproducentes] = useState<string[]>([]);

  const clearFields = () => {
    setSucesoTranstornador("");
    setPensamientoNegativo("");
    setPensamientoPositivo("");
    setCostoBeneficio("");
    setEmociones([]);
    setDistorsionesCognitivas([]);
    setCreenciasContraproducentes([]);
  }

  const handleSendTest = async () => {

    try {
      const response = await BlueprintsServices.create({
        fields: {
          suceso_transtornador,
          emociones,
          distorsiones_cognitivas,
          creencias_contraproducentes,
          costo_beneficio,
          pensamiento_negativo,
          pensamiento_positivo,
        }
      });
      const isSaved = await handleToastByQuery({ response });

      if (!isSaved) {
        return false;
      }

      clearFields();
      setTimeout(() => scrollToTop(mainRef), 2000);
      return true;

    } catch (error) {
      toast.error("Conexion al servidor peridida");
      return false;
    }
  };

  return {
    states: {
      suceso_transtornador,
      emociones,
      costo_beneficio,
      creencias_contraproducentes,
      distorsiones_cognitivas,
      pensamiento_negativo,
      pensamiento_positivo
    },
    actions: {
      setSucesoTranstornador,
      setEmociones,
      setCostoBeneficio,
      setCreenciasContraproducentes,
      setDistorsionesCognitivas,
      setPensamientoNegativo,
      setPensamientoPositivo,
      handleSendTest
    }
  }

}
