--- 
layout: post
title: Docker Terminology
author: uzubair
tags: [Docker, Docker Containers]
---

Docker is an open-source project that automates the development and deployment of software applications inside containers. In simple words, Docker is a tool that allows developers, sys-admins etc. to easily build an deploy their applications in a sandbox (containers) to run on the host operating system.

Let’s get over with Docker-specific jargon to help understand the Docker ecosystem.

- Images – The blueprints of our application that form the containers
- Containers – Created from Docker images and run the actual application
- Docker Daemon – The background service running on the host machine that manages building, running, and distribution of Docker containers. The Docker client talks to this process
- Docker Client – The command line tool that allows the user to interact with Docker daeom
- Docker Hub – A registry of Docker images created by other users. If required, one can extend these images, and can host their own Docker registeries
