'use client'

import { auth } from '../../../firebase.config'

function User() {
  const user = auth.currentUser
  return (
    <main>
      <h1>{user?.displayName}</h1>
      <p>{user?.email}</p>
    </main>
  )
}

export default User
