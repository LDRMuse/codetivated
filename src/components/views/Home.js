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
        </ul>
      </div>

      <div className="col-6 col-s-9">
        <h1>Meet me, Melissa Heying</h1>
        <p>What began as a journey of finding myself, I have discovered that I am many things! I a Full-Stack JavaScript developer, Podcast Creator, Nature photographer, GarageBand music maker and much more! I created this site to share all the things that keeps me codetivated. What exactly does codetivated mean? The idea of codetivated came to me after deciding to share my experience of becoming a Web Developer. My intention is to help others realize their potential, specifically in the world of programming but ideally in all aspects of life! Please use my platforms as tools and resources to help you become the Developer you were meant to be! </p>
        <p>And most importantly, <strong>Stay Codetivated!</strong></p>
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
