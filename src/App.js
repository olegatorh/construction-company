import MainContent from "./components/mainPage/mainContent";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import {Route, Switch} from "react-router-dom"
import Contacts from "./components/Contacts/contacts";
import Projects from "./components/Projects/projects";
import Gallery from "./components/gallery/galleryPage";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={MainContent}/>
                <Route path={'/Gallery'} component={Gallery}/>
                <Route path={'/Projects'} component={Projects}/>
                <Route path={'/Contacts'} component={Contacts}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default App;