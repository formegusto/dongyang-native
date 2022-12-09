import { NativeBaseProvider } from "native-base";
import { Pages } from "./screens";

function App() {
  return (
    <NativeBaseProvider>
      <Pages />
    </NativeBaseProvider>
  );
}

export default App;
