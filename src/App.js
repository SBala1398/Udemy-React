import Categories from './components/Categories.js'
import Navbar from './components/Navbar.js'
import Recommended from './components/Recommended.js'
import Saleimages from './components/Sale-image.js'
import Topics from './components/Topics.js'
import Popular from './components/Popular.js'
import Footer from './components/Footer.js'

function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Saleimages></Saleimages>
      <Recommended></Recommended>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  )
}
export default App