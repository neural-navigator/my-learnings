import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div>
      <UserProvider value="satya">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
