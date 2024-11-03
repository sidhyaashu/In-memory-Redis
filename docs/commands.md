Here's a comprehensive `README.md` for Redis useful commands. This document will cover various essential commands across different Redis functionalities in a single file format.

```markdown
# Redis Useful Commands

This document provides a list of useful Redis commands organized by categories like keys, strings, hashes, lists, sets, sorted sets, and more. These commands are helpful for managing data within Redis.

## Table of Contents

- [Getting Started](#getting-started)
- [Basic Server Commands](#basic-server-commands)
- [Key Management](#key-management)
- [String Commands](#string-commands)
- [Hash Commands](#hash-commands)
- [List Commands](#list-commands)
- [Set Commands](#set-commands)
- [Sorted Set Commands](#sorted-set-commands)
- [Transaction Commands](#transaction-commands)
- [Pub/Sub Commands](#pubsub-commands)
- [Scripting Commands](#scripting-commands)
- [Server Monitoring and Administration](#server-monitoring-and-administration)

---

## Getting Started

To connect to your Redis server, open your terminal and run:
```bash
redis-cli
```

If Redis is running on a different host or port:
```bash
redis-cli -h <host> -p <port>
```

## Basic Server Commands

- `PING`: Check if the server is running.
  ```bash
  PING
  ```
- `AUTH <password>`: Authenticate to the server.
  ```bash
  AUTH mypassword
  ```
- `SELECT <index>`: Select the database with the specified index.
  ```bash
  SELECT 0
  ```

## Key Management

- `EXISTS <key>`: Check if a key exists.
- `DEL <key>`: Delete a key.
- `EXPIRE <key> <seconds>`: Set a timeout on a key.
- `TTL <key>`: Get the remaining time to live of a key.
- `RENAME <key> <newkey>`: Rename a key.
- `TYPE <key>`: Find the type of a key.
- `KEYS <pattern>`: Find all keys matching a pattern.
  
  ```bash
  EXISTS mykey
  DEL mykey
  EXPIRE mykey 60
  TTL mykey
  RENAME mykey newkey
  TYPE mykey
  KEYS pattern*
  ```

## String Commands

- `SET <key> <value>`: Set a key to hold a string value.
- `GET <key>`: Get the value of a key.
- `MSET <key> <value> [<key> <value> ...]`: Set multiple keys to multiple values.
- `INCR <key>`: Increment the integer value of a key by one.
- `DECR <key>`: Decrement the integer value of a key by one.
- `APPEND <key> <value>`: Append a value to a key.

  ```bash
  SET mykey "Hello"
  GET mykey
  MSET key1 "Hello" key2 "World"
  INCR counter
  DECR counter
  APPEND mykey " World"
  ```

## Hash Commands

- `HSET <key> <field> <value>`: Set the value of a hash field.
- `HGET <key> <field>`: Get the value of a hash field.
- `HMSET <key> <field> <value> [<field> <value> ...]`: Set multiple fields at once.
- `HGETALL <key>`: Get all fields and values in a hash.
- `HDEL <key> <field> [<field> ...]`: Delete one or more hash fields.

  ```bash
  HSET myhash field1 "Hello"
  HGET myhash field1
  HMSET myhash field1 "Hello" field2 "World"
  HGETALL myhash
  HDEL myhash field1
  ```

## List Commands

- `LPUSH <key> <value>`: Push a value to the start of a list.
- `RPUSH <key> <value>`: Push a value to the end of a list.
- `LPOP <key>`: Remove and return the first element of a list.
- `RPOP <key>`: Remove and return the last element of a list.
- `LRANGE <key> <start> <stop>`: Get a range of elements from a list.

  ```bash
  LPUSH mylist "Hello"
  RPUSH mylist "World"
  LPOP mylist
  RPOP mylist
  LRANGE mylist 0 -1
  ```

## Set Commands

- `SADD <key> <member>`: Add a member to a set.
- `SREM <key> <member>`: Remove a member from a set.
- `SISMEMBER <key> <member>`: Check if a member exists in a set.
- `SMEMBERS <key>`: Get all members in a set.

  ```bash
  SADD myset "Hello"
  SREM myset "Hello"
  SISMEMBER myset "Hello"
  SMEMBERS myset
  ```

## Sorted Set Commands

- `ZADD <key> <score> <member>`: Add a member to a sorted set, or update its score if it exists.
- `ZRANGE <key> <start> <stop> [WITHSCORES]`: Return a range of members in a sorted set, by index.
- `ZREM <key> <member>`: Remove a member from a sorted set.
- `ZSCORE <key> <member>`: Get the score associated with the given member in a sorted set.

  ```bash
  ZADD myzset 1 "one"
  ZRANGE myzset 0 -1 WITHSCORES
  ZREM myzset "one"
  ZSCORE myzset "one"
  ```

## Transaction Commands

- `MULTI`: Start a transaction.
- `EXEC`: Execute a transaction.
- `DISCARD`: Discard a transaction.

  ```bash
  MULTI
  SET mykey "Hello"
  SET anotherkey "World"
  EXEC
  ```

## Pub/Sub Commands

- `PUBLISH <channel> <message>`: Publish a message to a channel.
- `SUBSCRIBE <channel>`: Subscribe to a channel.
- `UNSUBSCRIBE [<channel> ...]`: Unsubscribe from a channel.

  ```bash
  PUBLISH mychannel "Hello Redis"
  SUBSCRIBE mychannel
  UNSUBSCRIBE mychannel
  ```

## Scripting Commands

- `EVAL <script> <numkeys> <key> [<key> ...] <arg> [<arg> ...]`: Evaluate a Lua script.
- `SCRIPT LOAD <script>`: Load a script into the script cache without executing it.
- `SCRIPT FLUSH`: Flush the script cache.

  ```bash
  EVAL "return redis.call('set', KEYS[1], ARGV[1])" 1 mykey "Hello"
  SCRIPT LOAD "return redis.call('get', KEYS[1])"
  SCRIPT FLUSH
  ```

## Server Monitoring and Administration

- `INFO`: Get information about the server.
- `CONFIG GET <parameter>`: Get the value of a configuration parameter.
- `CONFIG SET <parameter> <value>`: Set a configuration parameter.
- `MONITOR`: Monitor real-time commands received by the server.
- `SHUTDOWN`: Stop the Redis server.

  ```bash
  INFO
  CONFIG GET maxmemory
  CONFIG SET maxmemory 256mb
  MONITOR
  SHUTDOWN
  ```

---

## Additional Resources

- [Redis Official Documentation](https://redis.io/documentation)
- [Redis Command Reference](https://redis.io/commands)

This `README.md` serves as a quick reference for essential Redis commands. For more advanced usage and configuration options, refer to the official Redis documentation.
```

This README provides a comprehensive overview of Redis commands in a single file. You can further expand it or add examples as needed.