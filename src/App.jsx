import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Starred" element={<Starred />} />
            <Route path="/contact" element={<dev>heloo contact☎️</dev>} />
            <Route path="*" element={<dev>not found 404</dev>} />
          </Route>
          {/*<Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
