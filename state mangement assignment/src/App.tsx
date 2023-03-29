import Sidebar from "./components/Organism/Sidebar";
import Summary from "./components/Organism/Summary";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Organism/Header";
import Contracts from "./components/Organism/Contracts";
import { Back } from "./components/Atoms/BackIcon";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Back></Back>
      <Sidebar></Sidebar>
      <Contracts></Contracts>
    </ThemeProvider>
  );
}

export default App;
