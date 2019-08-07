# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
<br/>
React JS is a popular library for building applications. It gives developer the ability to build large scale applications effectively and rapidly. It is used for building user interfaces specifically for single page applications. It also allows us to create reusable UI components (DRY).
<br/>

1. What does it mean to think in react?
<br/>
It means that while you build application with react, you have to think about the app. How to set it up, how would you organize it in different file and export and import it to the corresponding file.
<br/>

1. Describe state.
<br/>
An object that determines how that component renders and behaves. “State” is what allows you to create components that are dynamic and interactive.
<br/>

1. Describe props.
<br/>
We pass information held on state inside one component to another component as a props. Props stand for properties, which are arbitrary inputs to a component, where a component is pretty much like a JavaScript function in that sense. 
<br/>

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
<br/>
A side effect is anything outside the scope of the functions being executed. React offers tools for managing side effects, useEffect(). With this effect hook, we can set the application to avoid running many times of the same interaction to avoid breaking the application. The effect hook tells React that a component need to run, or execute some side effects. There are many times we only want a side effect to run when certain data changes, this bring in sync side effects with state and props using effect hook. In order to do this. We have to pass in a dependency array as the second argument to the effect hook. If we don’t, we still have to pass in an array after the callback function or else the effect will fire after any changes. 
<br/>