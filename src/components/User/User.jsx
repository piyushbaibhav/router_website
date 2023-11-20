import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=" btn btn-primary  text-3xl m-1"> User: {userid}  </div>
  )
}

export default User