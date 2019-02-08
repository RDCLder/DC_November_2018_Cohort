# React Interview Questions

[Questions](https://app.schoology.com/page/1908602590)

1. What is React? How is it different from other JS frameworks?

React is a front-end library used for creating UI with a heavy emphasis on dynamic, component-based elements.  A library is different from a framework by letting the developer control which parts of the library to use and how to use them.  A framework, on the other hand, inverts control by forcing the developer to use it in a specific way.

2. What happens during the lifecycle of a React component?
 

3. What can you tell me about JSX?
 

4. How would you break this app into components?
thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png
 

5. What is the difference between a state and a prop?
 

 

6. What is a stateless function, give an example?
 

 

7. What are some of the benefits of using a stateless function?
 

 

8. What is the purpose of the render function?
 

 

9. What is the purpose of ReactDom.render?
 

 

10. What does create-react-app do?
 

 

11. What is meant by "Data is passed down"?
 

 

12.What is a higher order component in React?
 

 

13. What is the purpose of "key" in React?
 

 

14. What is the purpose of "refs" in React?
 

 

 

15. What is wrong with this code?
 
```js
this.setState((prevState, props) => { 
    return { 
        streak: prevState.streak + props.count 
    }
})
```