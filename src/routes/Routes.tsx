import { Route } from 'react-router'
import { BrowserRouter, Routes as Switch } from "react-router-dom"
import Home from '../pages/Home/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes