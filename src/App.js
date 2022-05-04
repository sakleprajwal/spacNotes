import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
import Sidebar from "./Components/Sidebar/Sidebar";
import { SidebarProvider } from "./Contexts/sidebar-context";
import Navbar from "./Components/Navbar/Navbar";
import { NotesProvider } from "./Contexts/notes-context";
// import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotesProvider>
        <SidebarProvider>
          <Navbar />
          <Router />
          <Sidebar />
        </SidebarProvider>
        </NotesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
