import React from 'react'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import { Routes, Route } from 'react-router'
import About from './About/About'
import Contact from './Contact/Contact'
import TeamPage from './TeamMembers/TeamPage'
import PrivacyPolicy from './PrivacyPolicy/Privacy'
import CommunityGuidelines from './PrivacyPolicy/CommunityGuide'
import ScrollToTop from '../Utils/ScrollToTop'
import { Box } from '@mui/material'
// linear-gradient(to right, #8832d1, #11c8d8)

const AppRoutes = () => {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(110deg, #0F0C29, #302B63, #3ddad7)' }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/community' element={<CommunityGuidelines />} />
          </Route>
        </Routes>
      </Box>
    </>
  )
}

export default AppRoutes
