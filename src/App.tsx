import Catalog from "./components/catalog"
import reactsvg from './assets/react.svg'
import viteImg from '/vite.svg'
import samsung from '/images/samsung.png'

function App() {
  return (
    <>
      <Catalog name="iphone" price="45000" desc="i dont know" img={reactsvg}/>
      <Catalog name="nike" price="5000" desc="i know" img={viteImg}/>
      <Catalog name="samsung" price="20000" desc="Nice Battery" img={samsung}/>
    </>
  )
}

export default App
