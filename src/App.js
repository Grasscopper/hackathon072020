import React from 'react'
import Parallax from 'parallax-js'

const App = (props) => {
  var scene = document.getElementById('scene')
  var parallaxInstance = new Parallax(scene)
  parallaxInstance.friction(0.2, 0.2)
  parallaxInstance.limit(35.0, 35.0)
  var windWaker = document.getElementsByClassName("wind-waker")[0]

  return (
    <div></div>
  )
}

export default App
