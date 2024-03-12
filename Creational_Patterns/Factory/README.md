The Factory pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. It is used to encapsulate object creation logic and decouple it from the client code, providing a centralized place to manage object creation.

So in our example we create a userFactory and based on params we already know which kind of instance create;

In development no need to explore all the classes and know which one to use , just using Factory pattern and passing the params that we have 
and the necessary instance will be created