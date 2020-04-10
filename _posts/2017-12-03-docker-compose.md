--- 
layout: post
title: Manage Containers with Docker Compose
author: uzubair
tags: [microservices, containers, docker, docker-compose, redis, commander]
---

Microservice architecture is gradually changing the industry. The evolution from large monolithic services to microservice architecture is accompanied by another market trend: containerization. Containerization and service-oriented design helps break down of applications into manageable, functional components that are easier to develop, deploy, and scale.

So, the question is how to repeatedly recreate microservice architecture easily? The answer is *Docker Compose*. Docker Compose is “a tool for defining and running multi-container Docker applications” in the scope of a *single host*.

Let’s dive into learning Docker Compose.

##### Basic Workflow
1. Define each service in a Dockerfile
2. Define the services and their relation to each other in the `docker-compose.yml` file
3. Use docker-compose up -d to build and start the services

##### Example
[Redis Commander container talking to a Redis database](https://github.com/uzubair/docker-redis-commander)

If you have any questions and/ or suggestions, please don’t hesitate to drop me a line.

Happy Learning!
