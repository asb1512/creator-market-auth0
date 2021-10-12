import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();
  const { email } = user;

  return (
    <div>
      Welcome {email}!
    </div>
  )
}
