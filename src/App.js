import React from 'react'
import Parallax from 'parallax-js'

const App = (props) => {
  var scene = document.getElementById('scene')
  var parallaxInstance = new Parallax(scene)
  parallaxInstance.friction(0.4, 0.4)
  parallaxInstance.limit(35.0, 35.0)
  return (
    <>
    <p>All credit for characters goes to Nintendo</p>
    <p>And a big thank you to freepngimg.com</p>
    </>
  )
}

export default App
