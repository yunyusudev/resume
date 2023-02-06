import Header from "./components/header"
import MainArea from "./components/mainArea"
import AsideArea from "./components/asideArea"
import Loader from "./components/c_loader.js"

function App() {
  return (<>
    <Loader />
    <Header />
    <MainArea />
    <AsideArea />
  </>)
}
 
export default App;
