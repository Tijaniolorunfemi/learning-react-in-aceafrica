import React , {Fragment} from "react" 
import {
    BrowserRouter   , 
    Switch , 
    Route, 
    Link
} from "react-router-dom" 

const Home = () => {
    return (
        <Fragment>
            <h1>Welcome to Bigjara</h1>
        </Fragment>

    )
}

const About = () => {
    return (
        <Fragment>
            <h1>Welcome to About Bigjara</h1>
        </Fragment>

    )
}

const Error404 = () => {
    return (
        <>
            <h1>Error 404</h1>
            <p>Sorry , we could not find what you are looking for</p>
            <Link to="/">Go back</Link>
        </>
    )
}

const Contact = () => {
    return (
        <Fragment>
            <h1>Contact Bigjara</h1>
        </Fragment>

    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route>
                    <Error404/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App ;