import React from 'react'

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }


export default function Navbar() {
  return (
    <section >
            <h1 className='card-title'>Amazing scientists</h1>
            <Profile />
             <Profile />
            <Profile />
       
      </section>
  )
}

