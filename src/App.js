import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./Context/ThemeContext";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
