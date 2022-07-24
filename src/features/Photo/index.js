import { Switch, Route, useRouteMatch } from "react-router-dom"
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";


const Photo = () =>{
    const match = useRouteMatch();
    return(
        <Switch>
            <Route exact path={match.url} component={MainPage}/>
            <Route path={`${match.url}/add`} component={AddEditPage}/>
            <Route path={`${match.url}/:photoId`} component={AddEditPage}/>
        </Switch>
    )
}

export default Photo;