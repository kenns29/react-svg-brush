# React SVG Brush (Beta)

A React-based brush library that emulates the [d3-brush](https://github.com/d3/d3-brush) behavior. It renders the brush using React virtual DOM.

This library is still in Beta, please file bug report directly to the author.

## Why Yet Another Brush Library

The [d3-brush](https://github.com/d3/d3-brush) library is commonly used for data selection within visualizations. It enables data selection through dragging on the visualization interface (holding the left mouse and move the curser). It also renders the brushed area directly on the visualization. However, there are several drawbacks when using [d3-brush](https://github.com/d3/d3-brush) directly inside a React-based application:

- d3-brush directly modifies the DOM, which also means customization of the brush behavior/view has to be done directly on the DOM, violating the best practices in React.
- Using d3-brush inside a React component typically requires using the react lifecycle methods, e.g. `componentDidUpdate`, adding complexity in the implementation of the React component.

The React SVG Brush library emulates the d3-brush library DOM structure (95% identical) and functionalities but renders the Brush completely using the React virtual DOM, making it easy for applications that use d3-brush to switch to this library to adhere to React best practices.

## Installation

```
npm install react-svg-brush
```

## Example Usage
