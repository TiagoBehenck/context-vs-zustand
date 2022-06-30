import shallow from 'zustand/shallow';

import { useStore } from '../../stores/zustand';

export default function ScoreCardZustand() {
  const { score } = useStore((state) => ({ score: state.user.score }), shallow);
  const updateUser = useStore((state) => state.updateUser);

  return (
    <div>
      <input
        type="number"
        value={score}
        placeholder="Score"
        onChange={(e) => updateUser({ score: parseInt(e.target.value) })}
      />
    </div>
  );
}
