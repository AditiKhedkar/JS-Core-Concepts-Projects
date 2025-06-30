# Event Propagation Visualizer

deployed on 

This is a simple visual interactive demo to understand **Event Capturing**, **Bubbling**, and **Delegation** in JavaScript.

## Features

- 🔁 Logs event flow visually as you interact.
- 📌 Demonstrates event capturing (trickling), bubbling, and delegation between siblings.
- 🧼 Includes a clear log button.
- 🎨 Styled with CSS for a clean and readable layout.

## How to Use

1. Open `index.html` in a browser.
2. Click on any button ("Click Me 1" or "Click Me 2").
3. Watch the log update with the order of events.
4. Use **"Clear Log"** button to reset the log area.

## Event Flow

- **Capturing Phase**: Starts from the `document` and goes down to the target element.
- **Bubbling Phase**: Starts from the target and bubbles back up.
- **Delegation**: The parent handles events from dynamically created or sibling elements.

## Deployment

To deploy this project on Netlify:
1. Upload the entire folder or zip it.
2. Drag & drop to Netlify or link via GitHub.
3. Netlify auto-detects it as a static HTML project.

| Concept        | Purpose                                                               |
| -------------- | --------------------------------------------------------------------- |
| **Capturing**  | Allow parent to intercept events *before* child gets it               |
| **Bubbling**   | Allow parent to react *after* child has handled the event             |
| **Delegation** | Efficiently handle events for many child elements via a single parent |


---
Made for educational purposes ✨
