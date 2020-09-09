import React from 'react'
import { Button } from '@material-ui/core'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 August to 30 August . 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>

                <Button variant="outlined">Type of place</Button>

                <Button variant="outlined">Price</Button>

                <Button variant="outlined">Rooms and beds</Button>

                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult img="https://a0.muscache.com/im/pictures/46a2acc0-5d08-4555-9efb-f000ada15f4a.jpg?aki_policy=large" location="Entire apartment in Nyali" title="Nyali Serviced 280sqm 4 bed" description="6 guests . 4 bedroom · 3 beds . 4.5 baths . Pool . Wifi . Kitchen . Air conditioning" star="4.70" price="$79/night" total="$741 total" />

            <SearchResult img="https://a0.muscache.com/im/pictures/adb4c435-b1dc-431e-b5e8-77c740429b27.jpg?aki_policy=large" location="Entire apartment in Mombasa" title="Bellevue Shanzu Beach Homes 105" description="5 guests . 2 bedroom · 4 beds . 1 bath . Pool . Wifi . Kitchen . Air conditioning" star="4.50" price="$31/night" total="$302 total" />

            <SearchResult img="https://a0.muscache.com/im/pictures/2f1a6ae6-ca92-4414-90ff-fc21a39e9a49.jpg?aki_policy=x_large" location="Entire apartment in Mombasa" title="Luvly 1 Bedroom apartment, Mombasa" description="2 guests . 1 bedroom · 1 bed . 15 baths . Wifi . Kitchen" star="4.90" price="$20/night" total="$183 total" />

            <SearchResult img="https://a0.muscache.com/im/pictures/065f6125-0338-42b9-97ad-eaacb5c85328.jpg?aki_policy=x_large" location="Entire apartment in Mombasa" title="Executive Bamburi Seafront designer studio" description="4 guests · Studio · 3 beds · 1 bath . Pool . Wifi . Kitchen . Air conditioning" star="4.80" price="$33/night" total="$129 total" />

            <SearchResult img="https://a0.muscache.com/im/pictures/ee13450f-3e68-4c40-9c11-675a2b91aeca.jpg?aki_policy=large" location="Entire apartment in Mombasa" title="2 Bedroom Penthouse in Elite Nyali Area" description="5 guests · 2 bedrooms · 3 beds · 2 baths . Pool . Wifi . Kitchen . Air conditioning" star="4.60" price="$76/night" total="$694 total" />

            <SearchResult img="https://a0.muscache.com/im/pictures/dc0e4ce0-6ef3-45fc-8372-1ef572229c99.jpg?aki_policy=large" location="Private room in Mombasa" title="Beautoful room in spacious apartment" description="2 guests · 1 bedroom · 1 bed · 1 private bath . Pool . Wifi . Kitchen . Air conditioning" star="4.90" price="$40/night" total="$362 total" />

            <SearchResult img="https://a0.muscache.com/im/pictures/abb8178b-2cfd-4adc-ab6f-204c6f4420d7.jpg?aki_policy=large" location="Private room in Mombasa" title="Pirates Beach Luxury Private Suite" description="2 guests · 1 bedroom · 1 bed · 1 private bath . Pool . Wifi . Kitchen . Air conditioning" star="4.80" price="$45/night" total="$411 total" />

        </div>
    )
}

export default SearchPage
