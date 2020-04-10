--- 
layout: post
title: Debugging Tomcat on a Server
author: uzubair
tags: [debugging, tomcat]
---

In some cases it may be necessary to connect to one of the server Tomcats to troubleshot an issue. Doing so is rather easy – you have to modify the start-up parameters to the service.

Open up the registry to `HKLM/Software/Apache Software Foundation/Procrun 2.0/(Service-Name)/Parameters/Java*`

* On a 64-bit system the registry key will be under Wow6432Node

Open at the Options key and add the following:
```
-Xdebug
-Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n
```
You can choose a different port, but it should be reflected in your configuration below. You can then use a debug launch configuration to debug it as a *Remote Java Application*.

#### Note
- You should stop all other Tomcat service-instances on the machine so that your requests consistently go to the one being debugged
- If you get a connection refused message the debug port may be in use. Try a different port (remember to update the registry, restart the service, and update the run configuration)