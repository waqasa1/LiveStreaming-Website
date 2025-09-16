import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';

export default function CommunityGuidelines() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: { md: '94vw' },
                position: 'relative',
                background: '#fff',
                borderTopLeftRadius: { xs: 0, md: '80px' },
                borderTopRightRadius: { xs: 0, md: '80px' },
                mx: 'auto',
                pt: { xs: 6, md: 8 },
                pb: { xs: 6, md: 8 },
                fontFamily: 'SVN-Gilroy'
            }}
        >
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                maxWidth: '900px'
            }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '10vw', md: '4vw' },
                        fontWeight: 900,
                        color: '#0F0C29',
                        mb: 4,
                        mx:'auto'
                    }}
                >
                    Community Guidelines & SOP
                </Typography>

                <Typography sx={{ fontSize: '1.2rem', color: '#333', lineHeight: 1.7, mb: 4 }}>
                    This policy is designed in accordance with the live streaming guidelines for both streamers and users. Live streamers must adhere to these policies set forth by streanLive. This SOP outlines actions taken for each  account or UID in case of violations.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2, textAlign: 'left' }}>
                    Ban Procedure for LiveStream & Normal Accounts
                </Typography>

                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 3 }}>
                    Reasons for account bans include but are not limited to:
                </Typography>

                <List sx={{ pl: 2, mb: 4 }}>
                    <ListItem>• Meaningless content: blank screens, sleep, idle sitting.</ListItem>
                    <ListItem>• Abusive behavior towards hosts, users, or officials.</ListItem>
                    <ListItem>• Guiding followers to illegal activities.</ListItem>
                    <ListItem>• Campaigns against stream or its officials.</ListItem>
                    <ListItem>• Threatening users, followers, or officials.</ListItem>
                    <ListItem>• Inappropriate content: explicit sexual content, nudity, or sexual conversations.</ListItem>
                    <ListItem>• Display of banned substances: drugs, smoking, alcohol, firearms.</ListItem>
                    <ListItem>• Self-harm activities or encouragement.</ListItem>
                    <ListItem>• Any activities involving blood.</ListItem>
                    <ListItem>• Speaking against any sect, religion, or messenger.</ListItem>
                    <ListItem>• Political campaigns or speaking against any political party.</ListItem>
                    <ListItem>• Note: This list may change as per stream Team’s requirements.</ListItem>
                </List>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2, textAlign: 'left' }}>
                    Banning Timeline
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    • <b>First violation:</b> Warning issued, 7-day grace period, written apology required. Repeat leads to 1-month ban.<br/>
                    • <b>Second violation:</b> After 1-month ban, another violation leads to permanent ban.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 700, color: '#302B63', mb: 2, textAlign: 'left' }}>
                    Creation of New Account After Ban
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    • 1st Instance: 1-day ban<br/>
                    • 2nd Instance: 3-day ban<br/>
                    • 3rd Instance: 7-day ban<br/>
                    • 4th Instance: Permanent ban + device ban.<br/>
                    • Note: These actions can change at stream Team’s discretion.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2, textAlign: 'left' }}>
                    Unban Procedure
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    • <b>Step 1:</b> BD representatives complete the sheet with all details and reasons for ban/unban tied to each UID.<br/>
                    • <b>Step 2:</b> Team head processes it through the MODERATION team.<br/>
                </Typography>

                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    <b>Note:</b><br/>
                    • No direct queries to the MODERATION TEAM will be entertained.<br/>
                    • If unban deviates from the timeline or requests early unban, a valid reason is mandatory. Otherwise, BD conduct will be investigated for potential personal ties, partnerships, or acceptance of bribes.
                </Typography>
            </Container>
        </Box>
    );
}
