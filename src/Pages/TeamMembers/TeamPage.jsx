import React from 'react'
import TeamHero from './TeamHero'
import TeamMember from './TeamMember'
import { Box } from '@mui/material'

const TeamPage = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #0F0C29, #302B63, #24243e)' }}>
    <TeamHero />
    <TeamMember />
    </Box>
  )
}

export default TeamPage
