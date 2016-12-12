# Declarative UI Workshop

Welcome to Declarative UI Workshops!
We will start with running GraphQL server and dummy client application.

Proceed with steps below.

# STEPS

## Initial setup

Clone code from initial repository:

    $ git clone https://github.com/G3F4/declarative-ui-workshop-initial

Install dependencies and start up:

    $ npm i
    $ npm start

... and check browser http://localhost:30001 :)

## Adding React

In app.js:
    * import `react` and `react-dom`

        ```js
        import React from 'react-dom'
        import ReactDOM from 'react'

    * create application root component

        ```js
        class App extends React.Component {
          render() {
	        return <div>Application root component</div>;
          }
        }

    * render component to document

        ```js
        ReactDOM.render(
          <App />,
          document.getElementById('root')
        );