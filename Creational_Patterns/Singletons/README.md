
In Node.js, the Singleton pattern is a design pattern that restricts the instantiation of a class to a single object instance. This means that regardless of how many times the class is instantiated, there will only ever be one instance of that class throughout the application.

In Logger.ts file you can find that we export the one created instance instead of main class;

If we just create an instance from Logger in every file we cant get all logs saved in our class;

Also you can find an commented version of Singleton class that allows us to create instance in every file but keeping the pattern;