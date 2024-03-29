import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/App';

function App() {
  return (
    <div className="text-black bg-white dark:bg-gray-900 dark:text-white box-border p-0 m-0">
      <div className="container mx-auto p-4">
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
