import React from 'react'
import Home1 from '../components/Home1'
import Home2 from '../components/Home2'
import { Route, Routes } from "react-router-dom"
import Home3 from '../components/Home3'
import Home4 from '../components/Home4'
import Home5 from '../components/Home5'
import Home6 from '../components/Home6'
import Home7 from '../components/Home7'
import ListingGrid from '../components/ListingGrid'
import ListingList from '../components/ListingList'
import ListingFullwidthMap from '../components/ListingFullwidthMap'
import ListingHalfmapGrid from '../components/ListingHalfmapGrid'
import ListingHalfmapList from '../components/ListingHalfmapList'
import ListingLeftSidebar from '../components/ListingLeftSidebar'
import ListingRightSidebar from '../components/ListingRightSidebar'
import ListingDetails from '../components/ListingDetails'
import Dashboard from '../components/Dashboard/Dashboard'
import DashboardBooking from '../components/Dashboard/DashboardBooking'
import DashboardBookmark from '../components/Dashboard/DashboardBookmark'
import DashboardMessages from '../components/Dashboard/DashboardMessages'
import DashboardWallet from '../components/Dashboard/DashboardWallet'
import DashboardMyListing from '../components/Dashboard/DashboardMyListing'
import DashboardReviews from '../components/Dashboard/DashboardReviews'
import AddListing from '../components/AddListing'
import Myprofile from '../components/Dashboard/Myprofile'
import About from '../components/About'
import UserProfile from '../components/UserProfile'
import AddNewPost from '../components/AddNewPost'
import Career from '../components/Career'
import CareerDetails from '../components/CareerDetails'
import Invoice from '../components/Invoice'
import Pricing from '../components/Pricing'
import AllCategories from '../components/AllCategories'
import ContactUs from '../components/ContactUs'

function RoutingLayout() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/Home-two' element={<Home2 />} />
        <Route path='/Home-three' element={<Home3 />} />
        <Route path='/Home-four' element={<Home4 />} />
        <Route path='/Home-five' element={<Home5 />} />
        <Route path='/Home-six' element={<Home6 />} />
        <Route path='/Home-seven' element={<Home7 />} />
        <Route path='/listing-grid' element={<ListingGrid />} />
        <Route path='/listing-list' element={<ListingList />} />
        <Route path='/listing-fullwidth-map' element={<ListingFullwidthMap />} />
        <Route path='/listing-halfmap-grid' element={<ListingHalfmapGrid />} />
        <Route path='/listing-halfmap-list' element={<ListingHalfmapList />} />
        <Route path='/listing-Left-sidebar' element={<ListingLeftSidebar />} />
        <Route path='/listing-Right-sidebar' element={<ListingRightSidebar />} />
        <Route path='/listing-details' element={<ListingDetails />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard-booking' element={<DashboardBooking />} />
        <Route path='/dashboard-bookmark' element={<DashboardBookmark />} />
        <Route path='/dashboard-messages' element={<DashboardMessages />} />
        <Route path='/dashboard-wallet' element={<DashboardWallet />} />
        <Route path='/dashboard-my-listings' element={<DashboardMyListing />} />
        <Route path='/dashboard-reviews' element={<DashboardReviews />} />
        <Route path='/add-listing' element={<AddListing />} />
        <Route path='/dashboard-my-profile' element={<Myprofile />} />
        <Route path='/about' element={<About />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/add-new-post' element={<AddNewPost />} />
        <Route path='/career' element={<Career />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/career-details' element={<CareerDetails />} />
        <Route path='/invoice' element={<Invoice />} />
        <Route path='/all-categories' element={<AllCategories />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default RoutingLayout