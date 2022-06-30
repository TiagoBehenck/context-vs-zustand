import { useContext } from 'react';

import { UserContext } from '../../stores/userContext';

export default function ScoreCardContext() {
  const context = useContext(UserContext);

  return (
    <div>
      <input
        type="number"
        value={context?.user.score}
        placeholder="Score"
        onChange={(e) => context?.updateUser({ score: parseInt(e.target.value) })}
      />
    </div>
  );
}
