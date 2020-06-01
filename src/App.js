import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Navbar from './components/home/Navbar';


function App() {

  const Routes = [
    {
      component: () => <Home />,
      exact: true,
      path: '/'
    },
    {
      component: () => <Dashboard />,
      path: '/dashboard/mymeetings'
    },
    {
      component: () => <Dashboard />,
      path: '/dashboard/meetingrooms'
    },
    {
      component: () => <Dashboard />,
      path: '/dashboard/createmeeting'
    },
  ]

  const routeSwitch = (
    Routes.map(route => {
      const { component, path } = route;
      // console.log(route);
      return (<Route component={component} exact key={path} path={path} />);
    })
  );


  return (
    <Router>
      <section className="container-fluid no-mp unlocked">
        <Navbar />
        <Switch>
          {routeSwitch}
        </Switch>
      </section>
    </Router>
  );
}

export default App;
