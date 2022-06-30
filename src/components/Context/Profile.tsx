import { useContext } from 'react';

import { UserContext } from '../../stores/userContext';

export default function ProfileContext() {
  const context = useContext(UserContext);

  console.log({ context });

  return (
    <div>
      <input
        type="text"
        value={context?.user.fullName}
        placeholder="Full Name"
        onChange={(e) => context?.updateUser({ fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={context?.user.email}
        onChange={(e) => context?.updateUser({ email: e.target.value })}
      />
    </div>
  );
}
