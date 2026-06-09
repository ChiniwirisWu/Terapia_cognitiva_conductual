import Logs from "./logs";

export default async function LogsView() {

  const response = await fetch(process.env.LOGS_API_URL!);
  const blueprints = await response.json();

  return <Logs content={blueprints} />
};
