import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/Navbar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import HomePage from "./pages/HomePage/HomePage";
import { COLORS, FONTS } from "./theme";

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, fonts: FONTS }}>
      <WebsiteLogo />
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
