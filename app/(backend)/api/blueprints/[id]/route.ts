import { NextResponse } from "next/server";
import BlueprintsModel from "@models/blueprints";
import { validatePartialBlueprint } from "@schemas/blueprints";
import { HttpErrors } from "@errors/errors";

// esto es un getById
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {

    const { id } = await params;
    const blueprint = await BlueprintsModel.getById({ id });

    if (!blueprint) return HttpErrors.notFound();

    return NextResponse.json(blueprint);

  } catch (error) {
    return HttpErrors.internalServer();
  };
};


export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json();
    const result = validatePartialBlueprint(body);

    if (!result.success) return HttpErrors.badRequest(JSON.parse(result.error.message));

    const { id } = await params;
    const updatedBlueprint = await BlueprintsModel.update({ id, input: result.data });

    return NextResponse.json(updatedBlueprint);

  } catch (error) {
    return HttpErrors.internalServer();
  }
};


export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {

    const { id } = await params;
    const result = await BlueprintsModel.delete({ id });

    if (!result) return HttpErrors.notFound();

    return NextResponse.json(result);

  } catch (error) {
    return HttpErrors.internalServer();
  };
};


