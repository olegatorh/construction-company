import MainContent from "./components/mainPage/mainContent";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import {Route, Switch} from "react-router-dom"
import Contacts from "./components/Contacts/contacts";
import Projects from "./components/Projects/projects";
import Gallery from "./components/gallery/galleryPage";
import AboutCompany from "./components/aboutCompany/aboutCompany"

function App() {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&display=swap');
            </style>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={MainContent}/>
                <Route path={'/Gallery'} component={Gallery}/>
                <Route path={'/Projects'} component={Projects}/>
                <Route path={'/Contacts'} component={Contacts}/>
                <Route path={'/About_Company'} component={AboutCompany}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default App;
