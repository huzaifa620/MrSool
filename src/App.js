import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="font-sans overflow-y-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-600 flex flex-col space-y-10">
      <Header />
      <Home />
    </div>
  );
}

export default App;
