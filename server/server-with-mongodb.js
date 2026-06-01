import "dotenv/config";

import { createApp } from "./app.js";

import { BlueprintModel } from "./models/blueprint.js";

createApp({ blueprintModel: BlueprintModel });
