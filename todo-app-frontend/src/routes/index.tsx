import { Navigate, Route,Routes as AllRoutes} from "react-router-dom"
import { Home } from "../pages"

export const Routes = () => {
  return (
    <AllRoutes>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
      <Route path='/' element={<Home />}></Route>
    </AllRoutes>
  )
}