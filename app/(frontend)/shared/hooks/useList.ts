import { handleToastByQuery } from "@utils/handleToast";
import { toast } from "sonner";

export default function useList() {

  const confirmAction = async (
    title: string,
    requestFn: () => Promise<Response>
  ): Promise<boolean> => {

    return new Promise((resolve) => {
      toast("¿Desea completar esta acción?", {
        duration: Infinity,
        action: {
          label: title, // Ej: "Eliminar"
          onClick: async () => {
            try {

              const response = await requestFn();

              const isDeleted = await handleToastByQuery({ response });

              resolve(isDeleted); // Devuelve true o false
            } catch (error) {
              toast.error("Connection to database lost");
              resolve(false); // Falló por red
            }
          }
        },
        onDismiss: () => resolve(false),
        onAutoClose: () => resolve(false)
      });
    });
  };

  return {
    actions: {
      confirmAction
    }
  };
}
