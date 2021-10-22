import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from '../components/NavBar';
import Platforms from '../components/Platforms';

export default function Dashboard() {
  const { user } = useAuth0();
  const { email } = user;

  return (
    <div>
      <NavBar />
      Welcome {email}!
      <Platforms />
    </div>
  )
}
