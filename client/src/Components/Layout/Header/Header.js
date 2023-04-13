import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <Link to="/signin"> <Button>Log Out</Button></Link>
    </>
  )
}

export default Header