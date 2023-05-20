import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes';
import AppLoader from "./components/AppLoader/AppLoader";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
