import { Provider } from "react-redux";
import Body from "./Body";
import appStore from "./redux/appStore"


function App() {
  return <Provider store={appStore}><Body/></Provider>
  
}

export default App;
