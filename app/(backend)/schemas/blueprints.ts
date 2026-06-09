import z from "zod";
import { creenciasEnum, distorsionesEnum, emocionesEnum } from "./blueprintsEnums";


const blueprintSchema = z.object({
  suceso_transtornador: z.string()
    .trim()
    .min(1, { message: "El suceso transtornador no puede estar vacío." })
    .max(1000, { message: "El pensamiento es demasiado largo, el maximo valido es de 1000 caracteres" }),

  pensamiento_negativo: z.string()
    .trim()
    .min(1, { message: "El pensamiento negativo no puede estar vacío." })
    .max(1000, { message: "El pensamiento es demasiado largo, el maximo valido es de 1000 caracteres" }),

  pensamiento_positivo: z.string()
    .trim()
    .min(1, { message: "El pensamiento positivo no puede estar vacío." })
    .max(1000, { message: "El pensamiento es demasiado largo, el maximo valido es de 1000 caracteres" }),

  costo_beneficio: z.string()
    .trim()
    .min(1, { message: "La evaluación Costo-Beneficio no puede estar vacía." })
    .max(1000, { message: "El pensamiento es demasiado largo, el maximo valido es de 1000 caracteres" }),

  fecha: z.string()
    .date({ message: "Formato de fecha invalido, debe ser (YYYY-MM-DD)" }),

  genre: z.enum(['blueprint']),

  emociones: z.array(emocionesEnum)
    .nonempty({ message: "Debes seleccionar al menos una emocion" }),

  distorsiones_cognitivas: z.array(distorsionesEnum)
    .nonempty({ message: "Debes seleccionar al menos una disonacia cognitiva" }),

  creencias_contraproducentes: z.array(creenciasEnum)
    .nonempty({ message: "Debes seleccionar al menos una creencia contraproducente" }),
});

export function validateBlueprint(input: any) {
  return blueprintSchema.safeParse(input);
};

export function validatePartialBlueprint(input: any) {
  return blueprintSchema.partial().safeParse(input);
};
