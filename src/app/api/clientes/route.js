import { personas } from "../data"

export async function GET(){
    return Response.json(personas)
}
export async function POST(req){
    const {nombre, edad} = await req.json();
    const new_persona = {nombre, edad}
    personas.push(new_persona)
    console.log(new_persona);
    return Response.json('registro de clientes');
}