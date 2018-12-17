# General JavaScript Questions

1. What makes Javascript an Object Oriented Language?

JavaScript supports prototype-based objected oriented design in which something can be abstracted into a model with
attributes and methods that define its base components.  This blueprint acts as an object class that can be used to create separate instances of objects.

For example, if you wanted to model a facebook profile, you can abstract it into a facebook profile class with different attributes (e.g. profile picture, friends, posts, status, etc.) and methods for modifying these attributes.  The object class will serve as a blueprint for each separate facebook profile that gets created.

2. What is Object Oriented Programming?

OOP is a programming paradigm that allows for modeling anything by abstracting it into its most basic, relevant components in terms of attributes and methods that modify these attributes.  This abstraction serves as a blueprint called a class that can be used to create an instance of an object.  Every single object inherits its attributes from this initial class definition, but they can be modified via methods.

3. What are classes?

See above

4. What is an Object or and Instance?

See above

5. How does Javascript differ from other Object Oriented Programming Languages?

JavaScript supports prototype-based OOP in which every object "class" must be initiated with a function for creating an instance of that object.  Inheritance works through regressing through an object's hierarchy until it gets to the top-most level, called the prototype.  Methods must be appended to the prototype to be inherited by each object instance.  ES6 and later versions of JavaScript have reconfigured the base syntax of OOP to resemble the more traditional class-based design in which a class definition of an object is provided which encompasses

6. What is the easiest way of defining an object in Javascript?

Defining an empty object with the object's enclosing primitives.  For example, a string object would have enclosing ' or " primitives.  A "dictionary" object would have {} enclosing primitives.  Other methods include using a function constructor or the "new" method of defining a specific object type (e.g. var newString = new String();).

7. How do you add a property to an object?

For ES5, properties are either initially defined in an object's initial constructor function.  Additional properties can be appended by using the prototype method.

8. How do you delete an object property?



9. How do you access properties in Javascript?

10. What wil happen if an object name starts with a number?

11. How do you access an object name that has a space, i.e. "Birth place"

12. What is a primative type?

13. Can an object be a primative type?

14. What is the typeOf operator used for?

15. Are functions objects in Javascript?

16. Can functions be chained in Javascript?

17. How do you invoke a function in Javascript?

18. What is an inner function in Javascript?

19. Explain a callback in Javascript.

20. What are the different ways that you can call a function?

21. What scope does javascript have?

22. What is hoisting and how does it work?

23. What is a "let" variable, introduced in ES6

24. What happens if a "var" or "let" keyword is not defined before a variable?

25. What is closure in javascript?

26. What is the "new" keyword in javascript?

27. Whati is a prototype?

28. Give an example of a prototype.

29. Explain a prototype chain.

30. What does slice do if no argument is passed?

31. What is the keyword "extends"?

32. What is Syntatic Sugar in Harmony (ES 6)

33. Names some changes that were made from ES5 to ES6.