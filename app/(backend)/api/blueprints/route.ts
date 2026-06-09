import { NextResponse } from "next/server";

import { validateBlueprint } from "@schemas/blueprints";
import BlueprintsModel from "@models/blueprints";
import { HttpErrors } from "@errors/errors";

// esto es un getAll
export async function GET(request: Request) {
  try {

    const genre = "blueprint";

    const blueprints = await BlueprintsModel.getAll({ genre });

    return NextResponse.json(blueprints);

  } catch (error) {
    return HttpErrors.internalServer();
  }
};


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateBlueprint(body);

    if (!result.success) {
      const issues = result.error.flatten().fieldErrors;
      return HttpErrors.badRequest(issues); // result.error.message : JSON 
    }

    const newBlueprint = await BlueprintsModel.create({ input: result.data });
    return NextResponse.json(newBlueprint);

  } catch (error) {
    return HttpErrors.internalServer();
  }
};
