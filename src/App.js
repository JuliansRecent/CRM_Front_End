import { Routes, Route } from "react-router-dom";
import SplashPage from "./components/main/splash-page/SplashPage";
import Header from "./components/header/Header"
import SignUp from "./components/main/sign-up/SignUp";
import SignIn from "./components/main/sign-in/SignIn";
import Dashboard from "./components/main/dashboard/Dashboard";

function App() {
  return (
		<div>
			<main className='main-content'>
				<Routes>
					<Route path='/' element={<SplashPage />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
