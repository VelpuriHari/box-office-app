import Home from './pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <HashRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/Starred" element={<Starred />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<div>heloo contact☎️</div>} />
              </Route>
              <Route path="/Show/:ShowId" element={<Show />} />
              <Route path="*" element={<div>not found 404</div>} />
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
          </HashRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
