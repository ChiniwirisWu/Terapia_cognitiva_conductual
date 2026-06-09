import { NextResponse } from "next/server";

export const HttpErrors = {
  internalServer() {
    return NextResponse.json(
      { message: "Error en el servidor" },
      { status: 500 }
    );
  },

  notFound() {
    return NextResponse.json(
      { message: "El elemento no existe" },
      { status: 400 }
    );
  },

  badRequest(errorData: any) {
    return NextResponse.json(
      { message: "Error de validacion", errors: errorData },
      { status: 400 }
    );
  },

  databaseNotConnected() {
    return NextResponse.json(
      { message: "Conexion a la base de datos perdida" },
      { status: 500 }
    );
  }
};
