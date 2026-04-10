import {prisma} from '../lib/prisma.js'

export async function getUserBy( field, value ){
    return await prisma.user.findFirst({
        where : { [field] : value }
    })
}

export async function createUser(data) {
    return await prisma.user.create({ data : data })
}

export async function updateUser( id, data ) {
    return await prisma.user.update({ 
        where : {id: id},
        data : data
    })
}

export async function deleteUser( id ) {
    return await prisma.user.delete({ 
        where : {id: id}
    })
}
