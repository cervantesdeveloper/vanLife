import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import './App.css'
import "../server"
import Home from './pages/Home'
import About from './pages/About'
import VanDetail from './pages/Vans/VanDetail'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import NotFound from './pages/NotFound'
import Error from "./components/Error"

const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />} errorElement={<Error />} >
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route 
            path='vans' 
            element={<Vans/>} 
            loader={vansLoader}
          />
          <Route path='vans/:id' element={<VanDetail/>}/>

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}/> {/*We add the attribute "index" because this content will be rendered in the same path than the parent*/}
            <Route path='income' element={<Income/>}/> {/*these paths dont need "/host/" because the pahts are realtive to their parent*/ }
            <Route path='vans' element={<HostVans/>} /> 
            <Route path='vans/:id' element={<HostVanDetail/>}> 
              <Route index element={<HostVanInfo />}/>
              <Route path='pricing' element={<HostVanPricing />}/>
              <Route path='photos' element={<HostVanPhotos />}/>
            </Route>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          
          <Route path='*' element={<NotFound />}/>
        </Route>

))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
