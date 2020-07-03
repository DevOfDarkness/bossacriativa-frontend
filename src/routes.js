import React from 'react'
import { Router, Switch } from 'react-router-dom'
import AdminLogin from './pages/admin/adminLogin/index'
import AdminPanel from './pages/admin/adminPanel/index'
import ArtistPanel from './pages/Artista/Artista'
import Palestra from './pages/Palestra/Palestra'
import Home from './pages/Home/Home'
import Route from './Route'
import About from './pages/About/About';
import Shows from './pages/Shows/Shows'
import Imprensa from './pages/Imprensa/Imprensa';
import Oficinas from './pages/Oficinas/Oficinas';
import Noticias from './pages/Noticias/Noticias';
import Noticia from './pages/Noticia/Noticia';
import Oficina from './pages/Oficina/Oficina';
import Parceiros from './pages/Parceiros/Parceiros';
import Palestras from './pages/Palestras/Palestras';
import Midia from './pages/Midia/Midia';
import Editais from './pages/Editais/Editais';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import history from './services/history'
import Patrimonio from './pages/Patrimonio/Patrimonio'
import Temas from './pages/Temas/Temas';
import Apresentacao from './pages/Show/Show'

export default function Routes(){

    return (
        <Router history={history}>
          <div className="App wrapper">
            <div className="content">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" exact component={AdminLogin}/>
              <Route exact path="/login/adminPanel/:page?" exact component={AdminPanel} isPrivate/>
              <Route exact path="/login/artistPanel/:page?" exact component={ArtistPanel} isPrivate/>
              <Route path="/about" component={About}/>
              <Route path="/editais" component={Editais}/>
              <Route path="/galeria" component={Midia}/>
              <Route path="/palestras/:page?" component={Palestras}/>
              <Route path="/palestra/:id?/:speaker?" component={Palestra}/>
              <Route path="/noticias/:page?" component={Noticias}/>
              <Route path="/noticia/:id" component={Noticia}/>
              <Route path="/parceiros" component={Parceiros}/>
              <Route path="/oficinas/:page?" component={Oficinas}/>
              <Route exact path="/oficina/:id?/:artist?" exact component={Oficina}/>
              <Route path="/imprensa" component={Imprensa}/>
              <Route path="/apresentacoes/:page?" component={Shows}/>
              <Route path="/patrimonio" component={Patrimonio}/>
              <Route path="/temas" component={Temas}/>
              <Route path="/apresentacao/:id?" component={Apresentacao}/>
            </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
    )
}