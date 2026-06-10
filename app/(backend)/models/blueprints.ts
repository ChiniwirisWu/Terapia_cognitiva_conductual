import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { LogsType } from "@types";

const URI = process.env.MONGODB_URI;

if (!URI) {
  console.error("❌ ERROR CRÍTICO: La variable de entorno MONGODB_URI no está definida.");
  console.error("Asegúrate de tener un archivo .env en la raíz de tu servidor.");
  process.exit(1);
}

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function connect() {
  try {
    await client.connect();
    const database = client.db("teracc_db");
    return database.collection("blueprints");
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
    await client.close();
  }
}

export default class BlueprintsModel {

  static async getAll(): Promise<LogsType[]> {
    const genre = "blueprints";
    let result = [];

    try {
      const db = await connect();
      if (!db) {
        throw new Error("Error conectando con la base de datos");
      }

      result = await db.find({
        genre: {
          $regex: genre,
          $options: "i"
        }
      }).toArray();

      return result as unknown as LogsType[];


    } catch (error) {
      console.error(error);
      return [];
    }
  };

  static async getById({ id }: { id: string }) {
    const db = await connect();

    if (!db) return false;

    const objectId = new ObjectId(id);
    return db.findOne({ _id: objectId });
  };

  static async delete({ id }: { id: string }) {
    const db = await connect();

    if (!db) return false;

    const objectId = new ObjectId(id);
    const { deletedCount } = await db.deleteOne({ _id: objectId });
    return deletedCount > 0;
  };

  static async create({ input }: { input: any }) {
    const db = await connect();

    if (!db) return false;

    const { insertedId } = await db.insertOne(input);

    return {
      id: insertedId,
      ...input
    };
  };

  static async update({ id, input }: { id: string, input: any }) {
    const db = await connect();

    if (!db) return false;

    const objectId = new ObjectId(id);

    const updatedDocument = await db.findOneAndUpdate(
      { _id: objectId },
      { $set: input },
      { returnDocument: "after" });

    if (!updatedDocument) return false;

    return updatedDocument;
  }
}
