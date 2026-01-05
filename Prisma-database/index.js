import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
async function main(){
    await prisma.user.create({
        data:{
            username:"john",
            password:"doe123"
        }
    })
}
main()