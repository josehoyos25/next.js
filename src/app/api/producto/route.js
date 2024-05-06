import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(){
    
    const respuesta = await prisma.producto.findMany();
    return new Response(JSON.stringify(respuesta),
    {headers:{'Content-Type': 'application/json'},
    status: 200
    });
}
export async function POST (req){
    try {
    const {descuento, nombre, precio, stock} = await req.json();
    const new_producto = await prisma.producto.create(
        { data: {descuento,nombre,precio, stock}
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

