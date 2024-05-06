import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, {params}){

    try {
    let id = Number(params.id);
    const resp= await prisma.producto.findUnique({
        where: {id:id}
    })
    return new Response(JSON.stringify(resp),
    {headers:{'Content-Type': 'application/json'},
    status: 200
    })

} catch (error) {
    console.log(error);
}
}
export async function DELETE (req, {params}){
    try {
        let id=Number(params.id);
    const new_producto = await prisma.producto.delete(
        { where : {id:id}
        })
        return new Response(JSON.stringify(new_producto),
        {headers:{'Content-Type': 'application/json'},
        status: 200
        });
    } catch (error) {
        return new Response(JSON.stringify({message: error}),
        {headers:{'Content-Type': 'application/json'},
        status: 500
        });
    }
}
export async function PUT(req, {params}){
    try {
        let id=Number(params.id);
        const {descuento, nombre, precio, stock} = await req.json();
        const new_producto = await prisma.producto.update(
        { where: {id:id},
          data: {descuento, nombre, precio, stock}
        })
        return new Response(JSON.stringify({message: 'Se actualizo con exito', producto:new_producto}),
        {headers:{'Content-Type': 'application/json'},
        status: 200
        }
    );
    } catch (error) {
        return Response.json({message: error})
    }
}

