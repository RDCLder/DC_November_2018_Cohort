import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/add-movie" component={AddMovie} />
                <Route path="/all-movies" component={AllMovies} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
);
