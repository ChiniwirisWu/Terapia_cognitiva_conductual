import { validateBlueprint, validatePartialBlueprint } from "../schemas/blueprint.js";

export class BlueprintController {

  constructor({ blueprintModel }) {
    this.blueprintModel = blueprintModel;
  }

  getAll = async (req, res) => {
    const { genre } = req.query;
    const blueprints = await this.blueprintModel.getAll({ genre });
    res.json(blueprints);
  };

  getById = async (req, res) => {
    const { id } = req.params;
    const blueprint = await this.blueprintModel.getById({ id });
    if (blueprint) res.json(blueprint);
    res.status(404).json({ message: "Blueprint not found" });
  };

  create = async (req, res) => {
    const result = validateBlueprint(req.body);

    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newBlueprint = await this.blueprintModel.create({ input: result.data });

    res.status(201).json(newBlueprint);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const result = await this.blueprintModel.delete({ id });

    if (!result) {
      return res.status(400).json({ error: "Blueprint cannot be deleted because it doesn't exist" });
    }

    res.status(201).json({ message: "Blueprint deleted successfully" });
  };

  update = async (req, res) => {
    const result = validatePartialBlueprint(req.body);

    if (!result.success) {
      return res.status(400).json({ error: result.error.message });
    }

    const { id } = req.params;

    const updatedBlueprint = await this.blueprintModel.update({ input: result.data, id });

    // TODO: I don't know how to return this value yet so it is used in the view.
    res.status(200).json(updatedBlueprint);
  };
}
