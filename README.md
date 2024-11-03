# In-memory-Redis
Perform in memory operation using redis on docker

## Requirements:
1. Docker
2. Redis (PORT = 6379 )
3. Node.js


## Steps :
1. redis/redis-stack
To start a Redis Stack container using the redis-stack image, run the following command in your terminal:

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```
The docker run command above also exposes Redis Insight on port 8001. You can use Redis Insight by pointing your browser to localhost:8001.

2. Go to Inside Redis:

```bash
docker exec -t <Container Id> bash
```
3. Chek Connection:

```bash
redis-cli ping
```
Output will be **PONG**

4. Set Your CMD to Redis CLI

```bash
redis-cli
```
```plaintext
root@20db07972e42:/# redis-cli
127.0.0.1:6379>
```