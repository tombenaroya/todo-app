import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Header } from '@/components/Header';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
};
