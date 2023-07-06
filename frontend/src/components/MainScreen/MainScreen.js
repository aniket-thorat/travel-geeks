import React from 'react'
import { Button } from 'react-bootstrap' ;
import './MainScreen.css'
// import './mainscreen_image.jpg'
const MainScreen = () => {
  return (
    <>
    
    <div className='img-container'>
      <img  src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='mainscreen'/>
      <div className='upper'><h1>Travel Around the globe and feel the vibes of nature.....</h1></div>
      <div className='centered'>
        <Button href='/login' className='btn' variant='danger' size='lg'>Login</Button>
        <Button href='/signup' className='btn' variant='danger' size='lg'>Signup</Button>
      </div>

    </div>

    </>
  )
}

export default MainScreen ;