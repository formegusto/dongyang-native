import { NativeBaseProvider } from "native-base";
import Screens from "./screens";

function App() {
  return (
    <NativeBaseProvider>
      <Screens />
    </NativeBaseProvider>
  );
}

export default App;
