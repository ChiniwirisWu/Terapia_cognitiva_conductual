import { Router } from "express"
import { BlueprintController } from "../controllers/blueprint.js"

export const createBlueprintRouter = ({ blueprintModel }) => {
  const blueprintRouter = Router();

  const blueprintController = new BlueprintController({ blueprintModel });

  blueprintRouter.get('/', blueprintController.getAll);
  blueprintRouter.post('/', blueprintController.create);

  blueprintRouter.get('/:id', blueprintController.getById);
  blueprintRouter.delete('/:id', blueprintController.delete);
  blueprintRouter.patch('/:id', blueprintController.update);

  return blueprintRouter;
}
