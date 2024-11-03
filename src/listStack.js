import client from "../client";

async function init() {

// QUEUE
const res1 = await client.lPush('bikes:repairs', 'bike:1');
console.log(res1);  // 1

const res2 = await client.lPush('bikes:repairs', 'bike:2');
console.log(res2);  // 2

const res3 = await client.rPop('bikes:repairs');
console.log(res3);  // bike:1

const res4 = await client.rPop('bikes:repairs');
console.log(res4);  // bike:2

//STACK
const res5 = await client.lPush('bikes:repairs', 'bike:1');
console.log(res5);  // 1

const res6 = await client.lPush('bikes:repairs', 'bike:2');
console.log(res6); // 2

const res7 = await client.lPop('bikes:repairs');
console.log(res7);  // bike:2

const res8 = await client.lPop('bikes:repairs');
console.log(res8);  // bike:1

    
}


init()