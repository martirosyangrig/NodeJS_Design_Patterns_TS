The Proxy pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it. It allows you to create a substitute or placeholder object, which can be used to control access to the original object, handle lazy initialization, add additional behavior before or after the core functionality of the original object, or provide access control and security.

So here we have created proxy for fs in FS_Proxy.ts 

REMEMBER Proxy must have same interface same methods as original one 
We just implimented only readFile method