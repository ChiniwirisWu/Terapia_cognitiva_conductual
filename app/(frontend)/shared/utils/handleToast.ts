import { toast } from "sonner";


export const handleToastByQuery = async ({ response }: { response: Response }): Promise<boolean> => {

  const resData = await response.json();

  if (!response.ok) {
    // si zod tiene un error, tendra la propiedad .errors
    if (resData.errors) {
      // Listo las claves e inspecciono cada error y lo muestro
      Object.keys(resData.errors).forEach((field) => {
        const message = resData.errors[field];
        if (Array.isArray(message)) {
          console.log(message);
          message.forEach((msg) => toast.error(msg));
        }
      });
      return false;
      // si no tiene un error predefinido le dare un error generico
    } else {
      toast.error(resData.message || "Ocurrio un error inesperado");
      return false;
    }
  }

  // efecto visual
  const promise = new Promise((resolve) => setTimeout(() => resolve(true), 500));

  toast.promise(promise, {
    loading: "Guardando...",
    success: "Guardado!",
    error: "No se pudo guardar"
  });

  return true;
};















