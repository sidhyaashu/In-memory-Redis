import client from '../client.js';
async function redisListOperations() {
    const listKey = 'myList';
  
    // Add elements to the start and end of the list
    await client.lpush(listKey, 'element1');
    await client.rpush(listKey, 'element2');
    await client.lpush(listKey, 'element0');
  
    // Get all elements from the list
    const allElements = await client.lrange(listKey, 0, -1);
    console.log('List elements:', allElements); // Output: ['element0', 'element1', 'element2']
  
    // Remove elements from both ends
    const firstElement = await client.lpop(listKey);
    console.log('First element removed:', firstElement); // Output: 'element0'
  
    const lastElement = await client.rpop(listKey);
    console.log('Last element removed:', lastElement); // Output: 'element2'
  
    // Get the remaining elements
    const remainingElements = await client.lrange(listKey, 0, -1);
    console.log('Remaining elements:', remainingElements); // Output: ['element1']
  }
  
  // Run list operations
  redisListOperations().catch(console.error);