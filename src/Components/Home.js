import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div>
            <Banner />

            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480" title="Online Experiences" description="Unique activities we can do together, led by a world of hosts." />

                <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480" title="Unique Stays" description="Spaces that are more than just a place to sleep." />

                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480" title="Entire Homes" description="Comfortable private places, with rooms for friends and family." />
            </div>

            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/46251622-d87d-430e-b4a9-33c22a26f620.jpg?im_w=480" title="Surprising stays next door" description="Find unique spaces nearby that turn any trip into an adventure." price="$21/night" />

                <Card src="https://a0.muscache.com/im/pictures/09d3634f-575c-4930-a51c-32d49528fc42.jpg?im_w=480" title="Instant Book some serendipity" description="Make the most of opportunities to explore in spur-of-the-moment stays." price="$33/night" />

                <Card src="https://a0.muscache.com/im/pictures/a88e5857-39fc-4e05-a9fe-75e846a89651.jpg?im_w=480" title="Remote discoveries for two" description="Get off the beaten path together in these scenic escapes near you." price="$19/night" />
            </div>

        </div>
    )
}

export default Home
