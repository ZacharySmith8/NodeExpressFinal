### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
      -You can do the then catch method. This .then runs when a promise is successfull. .catch will run if the promise doesnt return successfully. 
- What is a Promise?
    - A promise in Javascript is the response returned when using an async function.

- What are the differences between an async function and a regular function?
    - async functions allow you to almost "backlog" the resposne of the function called. regular functions dont do this. 
- What is the difference between Node.js and Express.js?
    - Node is a programming language kind of like python. while express is the framework. Node is to python as express is to flask. 
- What is the error-first callback pattern?
    - a function which returns an error object or successful  data from the function. you pass error first and then you pass in the data. 
- What is middleware?
  -  functions that have access to the data between your requests and responses on your express routes.
- What does the `next` function do?
  - next makes sure that the middlewhere doesnt stop once the function is ran. 
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
