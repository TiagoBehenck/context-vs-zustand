import ProfileContext from './components/Context/Profile';
import ScoreCardContext from './components/Context/ScoreCard';
import ProfileZustand from './components/Zustand/Profile';
import ScoreCardZustand from './components/Zustand/ScoreCard';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <ProfileContext />
      <ScoreCardContext />

      <h1>Zustand</h1>
      <ProfileZustand />
      <ScoreCardZustand />
    </div>
  );
}

export default App;
