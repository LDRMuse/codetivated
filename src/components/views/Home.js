import React from 'react'
import {PhotoGrid} from './photos/PhotoGrid'

export const Home = () => {
  return (
    <>
    <div className="mainBody">
    <div className="row">
      <div className="col-3 col-s-3 menu">
        <ul>
        <img className='me' src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/118651673_10218090462076616_9169680802065893598_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=99lyOcRXiCAAX_qdvxN&_nc_ht=scontent-ort2-1.xx&oh=c87a7c12a831889c15625e4655163272&oe=5FF4E16A" alt="logo" />
          {/* <li>Microblading</li>
          <li>Microshading</li>
          <li>Lips</li>
          <li>Eyeliner</li>
          <li>Lash Extensions</li>
          <li>Hair</li> */}
        </ul>
      </div>

      <div className="col-6 col-s-9">
        <h1>Meet Melissa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="col-3 col-s-12">
        <div className="aside">
          <h2>Info</h2>

        </div>
      </div>
    </div>
    </div>
<div className='gallery'>
    <PhotoGrid />
    </div>
    </>
  )
}
