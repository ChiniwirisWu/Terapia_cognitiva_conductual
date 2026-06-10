import Logs from "./logs";
import BlueprintsModel from "@models/blueprints";

export default async function LogsView() {

  const blueprints = await BlueprintsModel.getAll();

  return <Logs contentJSON={JSON.stringify(blueprints)} />

};
