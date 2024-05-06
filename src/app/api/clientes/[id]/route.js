export async function GET(req, {params}){
    return new Response(`código de la persona ${params.id}`);
}