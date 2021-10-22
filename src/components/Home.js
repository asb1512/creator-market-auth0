import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return (
      <>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>

        <h1>Welcome to Creator Market</h1>
      </>
    )
  } else return null;
}
