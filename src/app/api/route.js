import { personas } from "./data"

export async function GET(){
    return Response.json(personas)
}