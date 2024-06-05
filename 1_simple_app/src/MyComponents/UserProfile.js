import React from 'react'

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"/>
    );
  }

export default function UserProfile(){
    return(
         <section >
        <h3 className='card-title mb-3'>User Listing </h3>
             <Profile />
             <Profile />
             <Profile />
        </section>
    )
}