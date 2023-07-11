import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GeneratePDFForm } from "./components/GeneratePDFForm";

function App() {
	return (
		<div>
			<Header />
			<GeneratePDFForm />
			<Footer />
		</div>
	);
}

export default App;
