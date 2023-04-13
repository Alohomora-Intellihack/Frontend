import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Diet = () => {
  return (
    <>
      <h1>Diet</h1>
      <Link to="/home/diet/input"><Button variant="contained">Predict Calaries</Button></Link>
    </>
  )
}

export default Diet