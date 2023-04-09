---
title: React Code Demo
pageTitle: React Code Demo
description: React Code Demo.
---

In this lesson, we will do a high-level overview of some core features of React.

## Setup

To get started let's head to the {% redirect-link title="React starter project on Codesandbox." href="https://codesandbox.io/s/react-new" /%}  This project should be scaffolded out and look like this:

![alt text](https://www.developerhandbook.com/static/503a886e55e2ad556d95559c5902cd5f/3a582/codesandbox-create-react-app.webp)


### Codesandbox tour
 In the left section is where we can view and update the files and folders in our project.  For this demo we will work in the src folder and in the App.js and styles.css files.  In the middle section is where we can make changes to our files.  Saving our changes to our file should automatically save and update the right part or the rendering of our app.  Let's make a change to our App.js file and test it out.



```javascript
// src/App.js
import "./styles.css";

export default function App() {
  return (
    <div className="bordered">
      <h1>This is the App Component</h1>
    </div>
  );
}
```

Let's also update our App.css to add the styling for our bordered class. We will use this class to help us visualize where our React components are.

```css
/* src/styles.css */
.bordered {
  border: 2px solid #777;
  margin: 20px;
  padding: 20px;
}
```

As we make and save changes we see our app update.  Pretty cool right?  Now we can do a more in-depth look at React.


{% callout type="warning" title="Codesandbox glitches" %}
Sometimes Codesandbox runs into errors and doesn't work even though your code is correct.  When this happens try refreshing your browsers.  If you are logged in the changes should be saved.

{% /callout %}

## Key parts of a React App

There a many key parts to a React App. Let's quickly go over some of the common terms and ideas.

### JSX

JSX is a syntax extension to JavaScript used with React to describe what the UI should look like. JSX may remind you of HTML, and the syntax is similar but it comes with the full power of JavaScript.

```javascript
// src/App.js
import "./styles.css";

export default function App() {
  let name = "Bob";
  return (
    <div className="bordered">
      <h1>This is the App Component</h1>
      {/* // Embedding Expressions in JSX */}
      <p>Hello {name}</p>
    </div>
  );
}
```

### JSX is an Expression Too
This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```javascript
// src/App.js
import "./styles.css";

export default function App() {
  // a variable
  let name = "Bob";

  // a function
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  return (
    <div className="bordered">
      <h1>This is the App Component</h1>
      {/* Embedding Expressions in JSX */}
      <p>Hello {name}</p>
      <hr />
      {/* calling a function in JSX */}
      {getGreeting(name)}
      {getGreeting()}
      {/* // another expressions in JSX */}
      <p>1 + 1 is: {1 + 1}</p>
    </div>
  );
}
```

{% callout type="warning" title="Note:" %}
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.
{% /callout %}

### Components

One of the core features of React is that it allows you to write reusable components. This allows us to split the UI into independent, reusable pieces, and think about each piece as it is own thing. Let's look at a simple example where we might have users in our UI.

```javascript
// A 'User' Component

function User() {
  return (
    <div className="user">
      <h1>Hello I am James</h1>
      <p>you can reach me at James@james.com</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Our Users</h1>
      <div className="bordered">
        <User />
        <User />
      </div>
    </div>
  );
}

```
{% callout type="warning" title="Note: Always start component names with a capital letter." %}

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

{% /callout %}

Here we define a functional component named `User`. We then render that component in our App component twice.  We do see a problem though in that this component is hard coding the name and email data.  Let's see how we can fix this with props



### Props

Props are how we pass data to our components. Props are read-only and are always going to be a JavaScript object. In our example below you'll see a 'props' param in our User functional components and when you see the User component being rendered we see them being `passed` like this

```javascript
// A 'User' Component

function User(props) {
  return (
    <div className="bordered">
      <h1>Hello I am {props.name}</h1>
      <p>you can reach me at {props.email}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Our Users</h1>
      <div className="users">
        <User name='James' email='James@james.com'/>
        <User name='Jane' email='Jane@jane.com' />
      </div>
    </div>
  );
}

```

Now we can reuse this user component multiple times but also have it be dynamic.  This is a great way to reuse our code and keep our code cleaner and simpler.


{% callout type="note" title="Question" %}
  How could we age information to this User example?
{% /callout %}

### Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

```javascript
<button onclick="someFunction()">click</button>
```

is slightly different in React:

```javascript
<button onClick={someFunction}>click</button>
```

```javascript
function Demo (props) {
  function warn(){
    alert('button clicked')
  }

  return(
    <button onClick={warn}>
      click
    </button>
  )
}
```

### Rendering

Rendering is when React takes our component and actually attaches it to the DOM. For now, this is happening when our component 'mounts' or when the page first loads. This mount happens once. What our functional component returns is what is going to be mounted. We will look more into rendering but first, let's talk about two concepts that go along with this. State and the lifecycle of a component in React

### State and the useState hook

So far everything we have done has been read-only. Most web apps change though, they have state. React handles this with the useState hook. Let's look at an example where we have a counter

```javascript
// We need to import the hook from the react library
import {useState} from 'react'

function Counter(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>counter</h1>
      <p>the count is : {count}</p>
      <button onClick={increment}>add</button>
    </div>
  );
}

export default function App(){
   return (
    <div>
         <h1>Counters</h1>
         <Counter />
         <Counter />
    </div>
   )
}

```

Let's break this down a little. Let's first look at the useState hook. useState is a function that returns an array whose first value is the state or the way to get the state and the second value is a function to set the state.

It has this general signature.  If you are unfamiliar with Array destructuring in JS read about it {% redirect-link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" title="here"/%}. This will help explain the syntax below

```javascript
const [state, setState] = useState(initialState)
```



we can have any type of data with useState. But for today we will just stick with numbers  

```javascript
const [likes, setLikes] = useState(0)
const [color, setColor] = useState('red')
const [people, setPeople] = useState(['jim','sally','bob'])
```



When we click the add button it takes our current state and adds 1 to it this changes our state and React automatically re-renders this Counter component.  



{% callout type="warning" title="Important" %}
 calling our setState function will trigger our component to be rerendered
{% /callout %}


{% callout type="warning" title="Important" %}
 we never want to mutate state directly always use the setState function to change state. Always use the 'setter' function the useState hook to update state. See the example below.
{% /callout %}

```javascript
// We need to import the hook from the react library
import {useState} from 'react'
...
function Counter(props) {
  const [count, setCount] = useState(0);

  function increment() {
    //WRONG WAY: This directly mutates(changes) state
    count = count + 1;

    //RIGHT WAY: This use our setter to change the state
    setCount(count + 1;)
  }
 
  ...
```

{% callout type="note" title="Questions" %}
 This ends the quick demo of React! Any questions before we move on to the challenge?
{% /callout %}

