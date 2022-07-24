import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header';
import NotFound from './components/NotFound';
function App() {
  const lazyPhoto = React.lazy(()=> import("./features/Photo"))
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/photos' />

            <Route path='/photos' component={lazyPhoto} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
