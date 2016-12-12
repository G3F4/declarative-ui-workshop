# Declarative UI Workshop

Welcome to Declarative UI Workshops!
We will start with running GraphQL server and dummy client application.

Proceed with steps below.

# STEPS

## Initial setup

1. Clone code from initial repository:

        $ git clone https://github.com/G3F4/declarative-ui-workshop-initial

2. Install dependencies and start up:

        $ npm i
        $ npm start

... and check browser http://localhost:30001 :)

## Adding React

In app.js:

1. Import `react` and `react-dom`.

        import React from 'react-dom'
        import ReactDOM from 'react'

2. Create application root component.

        class App extends React.Component {
          render() {
            return <div>Application root component</div>;
          }
        }

3. Render component to document.

        ReactDOM.render(
          <App />,
          document.getElementById('root')
        );

## Components composition

1. Create Event component with dummy texts and some basic styles.

        class Event extends React.Component {
          render() {
            return <div style={{ margin: '10px', padding: '10px', backgroundColor: '#6d77ed', border: 'solid' }}>
              <h3>Event name</h3>
              <div>Event description</div>
            </div>;
          }
        }

2. Create Category component with dummy texts, some basic styles and use Event component within.

        class Category extends React.Component {
          render() {
            return <div style={{ margin: '10px', padding: '10px', backgroundColor: '#d6611d', border: 'solid', width: '300px' }}>
              <h2 style={{ textAlign: 'center' }}>Category name</h2>
              <h4>Category description</h4>
              <Event />
              <Event />
              <Event />
            </div>;
          }
        }

3. Modify App component with some basic styles and use Category component within.

        class App extends React.Component {
          render() {
            return <div style={{ margin: '10px', padding: '10px', display: 'inline-flex', backgroundColor: '#2db712', border: 'solid' }}>
              <Category />
              <Category />
              <Category />
            </div>;
          }
        }
