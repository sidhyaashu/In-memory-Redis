import client from "../client.js";



async function init(){
    // await client.set("user:4","Boni")
    await client.expire("user:4",10) 
    // const res = await client.get("user:4")
    console.log(`Result -> ${res}`)
}


init()