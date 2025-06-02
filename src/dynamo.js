import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient, PutCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const table = "pet_adoption";

const docClient = DynamoDBDocumentClient.from(client);

export async function scanAnimals() {
  const { Items } = await docClient.send(new ScanCommand({ TableName: table }));
  return Items || [];
}

export async function createAnimal(animal) {
  await docClient.send(new PutCommand({ TableName: table, Item: animal }));
}

export async function deleteAnimal(id) {
  await docClient.send(new DeleteCommand({ TableName: table, Key: {id} }));
}

export async function toggleAdopted(id, adopted) {
    await docClient.send(new UpdateCommand({ TableName: table, Key: { id }, UpdateExpression: "SET: #adopted = :val", ExpressionAttributeNames:{"#adopted": "adopted"},
    ExpressionAttributeValues: {":val" : adopted} }));
}