export const LogsServices = {
  delete: async (_id: string): Promise<Response> => {
    return await fetch(`/api/blueprints/${_id}`, {
      method: "DELETE"
    });
  }
};
