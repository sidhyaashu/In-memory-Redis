Here's a quick guide to using Redis with Docker:

### 1. **What is Redis?**
   - Redis is an in-memory data store often used as a database, cache, and message broker due to its speed and simplicity. It supports various data structures like strings, hashes, lists, sets, and more.

### 2. **Why use Redis with Docker?**
   - Docker simplifies running Redis by encapsulating it in a container, making setup, scaling, and management easier, especially in development and testing environments.

### 3. **Getting Started: Running Redis in Docker**

#### Step 1: **Pull the Redis Image**
   ```bash
   docker pull redis
   ```
   This downloads the official Redis image from Docker Hub.

#### Step 2: **Run Redis Container**
   ```bash
   docker run --name my-redis -p 6379:6379 -d redis
   ```
   - `--name my-redis`: Names the container "my-redis".
   - `-p 6379:6379`: Maps the Redis port (6379) to your local machine.
   - `-d redis`: Runs the Redis image in detached mode.

#### Step 3: **Accessing Redis**
   - To enter the Redis CLI in the running container:
     ```bash
     docker exec -it my-redis redis-cli
     ```
   - Test it by running a command like `PING`. You should see "PONG" if Redis is working.

### 4. **Persisting Data**
   - To keep data even after restarting the container, mount a volume:
     ```bash
     docker run --name my-redis -p 6379:6379 -v redisdata:/data -d redis
     ```
   - This maps the container’s `/data` directory to a volume called `redisdata`, preserving your data.

### 5. **Stopping and Removing the Container**
   - Stop the Redis container:
     ```bash
     docker stop my-redis
     ```
   - Remove the container (if you no longer need it):
     ```bash
     docker rm my-redis
     ```

Using Redis with Docker is a straightforward way to experiment with and utilize Redis in isolated environments.