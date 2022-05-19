import React from 'react'
import { useParams } from 'react-router-dom'

export const SignInPage: React.FC = () => {
  const params  = useParams()
  console.log(params)
  return (
    <div>SignInPage</div>
  )

}
