type createProps = {
  fields: {
    suceso_transtornador: string,
    emociones: string[],
    distorsiones_cognitivas: string[],
    creencias_contraproducentes: string[],
    costo_beneficio: string,
    pensamiento_negativo: string,
    pensamiento_positivo: string,
  }
}

export const BlueprintsServices = {
  create: async ({ fields }: createProps): Promise<Response> => {
    return await fetch("/api/blueprints", {
      method: "POST",
      body: JSON.stringify({
        suceso_transtornador: fields.suceso_transtornador,
        emociones: fields.emociones,
        distorsiones_cognitivas: fields.distorsiones_cognitivas,
        creencias_contraproducentes: fields.creencias_contraproducentes,
        costo_beneficio: fields.costo_beneficio,
        pensamiento_negativo: fields.pensamiento_negativo,
        pensamiento_positivo: fields.pensamiento_positivo,

        genre: "blueprint",
        fecha: new Date().toISOString().split('T')[0]
      }),
      headers: { "Content-Type": "application/json" }
    });
  }
};
