# Broken App Issues
There were a few with this app. 
1. req was set to body and not headers
2. adding .split(',') allows to catch every instance in req.developers.map
3. set results to await Promise.all(results) this gets the data from the inital promises because it can be multiple.