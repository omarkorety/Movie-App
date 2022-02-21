import "./App.css";
import "./components/Styles/portfolio.css";
import "./components/Styles/MovieApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/MovieApp/Navbar/Navbar";
import Login from "./components/MovieApp/Login/Login";
import Register from "./components/MovieApp/Register/Register";
import Home from "./components/MovieApp/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/MovieApp/Footer/Footer";
import NotFound from "./components/MovieApp/NotFound/NotFound";
import MovieDetails from "./components/MovieApp/MovieDetails/MovieDetails";
import Favorites from "./components/MovieApp/Favorites/Favorites";
import About from "./components/MovieApp/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/movie-details/:id" exact component={MovieDetails} />
          <Route path="/register" excat component={Register} />
          <Route path={"*"} component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
