The Decorator pattern is a structural design pattern that allows behavior to be added to individual objects dynamically, without affecting the behavior of other objects from the same class. It is used to extend or modify the functionality of objects at runtime by wrapping them with decorator objects that provide additional features or behavior.

So in our example as you see we have 3 classes and 2 of them modifing our item without affectin the behaivor of the other class

We can create an Inventory Item and using our DiamondInventoryItem and GoldenInventoryItem modyfy the item without affecting to the InventoryItem