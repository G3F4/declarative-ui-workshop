const DATA = {
  "id": "QXBwOg==",
  "categories": [
    {
      "id": "Q2F0ZWdvcnk6MQ==",
      "name": "IT",
      "description": "IT description",
      "events": {
        "edges": [
          {
            "node": {
              "id": "RXZlbnQ6MQ==",
              "name": "WarsawJS",
              "description": "WarsawJS description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjA="
          },
          {
            "node": {
              "id": "RXZlbnQ6Mg==",
              "name": "ReactWarsaw",
              "description": "ReactWarsaw description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjE="
          },
          {
            "node": {
              "id": "RXZlbnQ6Mw==",
              "name": "Runmagedon",
              "description": "Runmagedon description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjI="
          },
          {
            "node": {
              "id": "RXZlbnQ6NA==",
              "name": "PyCon",
              "description": "PyCon description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjM="
          },
          {
            "node": {
              "id": "RXZlbnQ6NQ==",
              "name": "Konfitura",
              "description": "Konfitura description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjQ="
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false
        }
      }
    },
    {
      "id": "Q2F0ZWdvcnk6Mg==",
      "name": "SPORT",
      "description": "SPORT description",
      "events": {
        "edges": [
          {
            "node": {
              "id": "RXZlbnQ6Ng==",
              "name": "Mecz Polska vs Reszta świata",
              "description": "Mecz Polska vs Reszta świata description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjA="
          },
          {
            "node": {
              "id": "RXZlbnQ6Nw==",
              "name": "Rolki nocą",
              "description": "Rolki nocą description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjE="
          },
          {
            "node": {
              "id": "RXZlbnQ6OA==",
              "name": "Extreme swimming",
              "description": "Extreme swimming description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjI="
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false
        }
      }
    },
    {
      "id": "Q2F0ZWdvcnk6Mw==",
      "name": "MUSIC",
      "description": "MUSIC description",
      "events": {
        "edges": [
          {
            "node": {
              "id": "RXZlbnQ6OQ==",
              "name": "Orange festival",
              "description": "Orange festival description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjA="
          },
          {
            "node": {
              "id": "RXZlbnQ6MTE=",
              "name": "Mayday",
              "description": "Mayday description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjE="
          },
          {
            "node": {
              "id": "RXZlbnQ6MTA=",
              "name": "Music fest nocą",
              "description": "Music fest description"
            },
            "cursor": "YXJyYXljb25uZWN0aW9uOjI="
          }
        ],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false
        }
      }
    }
  ]
};
import React from 'react'
import ReactDOM from 'react-dom'

class Event extends React.Component {
  render() {
    return <div style={{ margin: '10px', padding: '10px', backgroundColor: '#6d77ed', border: 'solid' }}>
      <h3>{this.props.event.name}</h3>
      <div>{this.props.event.description}</div>
    </div>;
  }
}

class Category extends React.Component {
  render() {
    return <div style={{ margin: '10px', padding: '10px', backgroundColor: '#d6611d', border: 'solid', width: '300px' }}>
      <h2 style={{ textAlign: 'center' }}>Category name</h2>
      <h4>Category description</h4>
      {this.props.category.events.edges.map(({ node }) =>
        <Event key={node.id} event={node}/>
      )}
    </div>;
  }
}

class App extends React.Component {
  render() {
    return <div style={{ margin: '10px', padding: '10px', display: 'inline-flex', backgroundColor: '#2db712', border: 'solid' }}>
      {this.props.data.categories.map(category =>
        <Category key={category.id} category={category} />
      )}
    </div>;
  }
}

ReactDOM.render(
  <App data={DATA} />,
  document.getElementById('root')
);
