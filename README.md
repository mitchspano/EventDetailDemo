# Event Detail Demonstration
The purpose of this project is to illustrate how to fire custom events with dynamic details using lightning web components.
Below is an example of the eventDetailButton component works alongside a similar component called eventDetailDiv. We can see that the toast message shows the dynamic content.

![Event Demo](demo/EventDetailDemo.gif)

One of the biggest challenges in making the change  to Lightning Web Components is the lack of inline expression. For example, a developer might want to do something like this:
`<button onclick="handleButtonClick('Hello World');"></button>`

This will not work with lightning web components. This is particularly frustrating when you have a collection of objects with buttons and want to do something particular to the object you pressed the button for.

However, we can be clever and use public attributes to allow for an event with a dynamic name and payload to be fired. 
Now, developers can use the component by dynamically setting an event name and custom detail.

This custom event handling allows the user to more effectively work with dynamic collections at run time

## Event Detail Button
This component renders a lightning button and fires a custom payload with a dynamic detail whenever the button is clicked.

## Event Detail Div
This component renders a div and fires a custom payload with a dynamic detail whenever the div is hovered over. Use the "body" slot to pass markup into the div itself.
