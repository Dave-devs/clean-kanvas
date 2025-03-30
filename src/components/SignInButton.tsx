import React from 'react'
import { Button } from './ui-custom/Button'
import { login } from '@/lib/actions/auth'

const SignInButton = () => {
  return (
      <Button variant="outline" size="default" onClick={login}>
          Sign In
      </Button>
  )
}

export default SignInButton