import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

class AppRoute extends Relay.Route {
  static queries = {
    data: () => Relay.QL`query { app }`
  };
  static routeName = 'AppRoute';
}

class Event extends React.Component {
  render() {
    return <div style={{ margin: '10px', padding: '10px', backgroundColor: '#6d77ed', border: 'solid' }}>
      <h3>{this.props.event.name}</h3>
      <div>{this.props.event.description}</div>
    </div>;
  }
}

Event = Relay.createContainer(Event, {
  fragments: {
    event: () => Relay.QL`
      fragment on Event {
        name
        description
      }
    `
  }
});

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

Category = Relay.createContainer(Category, {
  fragments: {
    category: () => Relay.QL`
      fragment on Category {
        name
        description
        events(first: 10) {
          edges {
            node {
              id
              ${Event.getFragment('event')}
            }
          }
        }
      }
    `
  },
});

class App extends React.Component {
  render() {
    return <div style={{ margin: '10px', padding: '10px', display: 'inline-flex', backgroundColor: '#2db712', border: 'solid' }}>
      {this.props.data.categories.map(category =>
        <Category key={category.id} category={category} />
      )}
    </div>;
  }
}

App = Relay.createContainer(App, {
  fragments: {
    data: () => Relay.QL`
      fragment on App {
        id,
        categories(names: ["IT", "SPORT", "MUSIC"])  {
          id
          ${Category.getFragment('category')}
        }
      }
    `
  }
});

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppRoute()}
  />,
  document.getElementById('root')
);
