import React from 'react'

function Profile() {
    return (
        <>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson" />
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </article>
        </>
    );
}

export default function UserProfile() {
    return (
        <section >
            <h3 className='card-title mb-3'>User Listing </h3>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}

