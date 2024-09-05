import './App.css';
import './Variables.css';
import { HomePage } from './HomePage';

export const PAGINATION_STEP = 10 as const;

function App() {
  return (
    <>
      <h1 className='mainTitle'>The reading</h1>
      <hr />
      <div className='mainWrapper'>
        <HomePage offsetBy={PAGINATION_STEP} />
      </div>
    </>
  );
}

export default App;
