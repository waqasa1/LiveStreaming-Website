import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { gsap } from 'gsap';

export default function PrivacyPolicy() {
    const sectionRef = useRef();
    const headingRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(headingRef.current, {
                y: 10,
                scale: 1.02,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box
            ref={sectionRef}
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
                textAlign: 'left',
                maxWidth: '900px'
            }}>
                <Typography
                    ref={headingRef}
                    variant="h2"
                    sx={{
                        fontSize: { xs: '10vw', md: '5vw' },
                        fontWeight: 900,
                        color: '#0F0C29',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    Privacy Policy
                </Typography>

                <Typography sx={{ fontSize: '1.2rem', color: '#333', lineHeight: 1.7, mb: 4 }}>
                    We and our affiliates (referred to as “We”) respect you and take responsibility in protecting your information. Through this Privacy Policy (referred to as “This Policy”), we intend to remind you that this does not apply to services by other third-parties, nor to products and services with separate policies.
                    <br /><br />
                    Please read and understand This Policy carefully before using our Services. When you use our Services, you agree to be bound by these terms. If you have any questions or suggestions, contact us anytime.
                    <br /><br />
                    We reserve the right to modify This Policy by posting updated contents on our sites or within the Services. Continued use after changes means you accept the new terms. Otherwise, please stop using our Services.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    What This Policy Covers
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    • How do we collect information?<br />
                    • How do we use this information?<br />
                    • Cookies and similar technologies<br />
                    • How is your information shared?<br />
                    • How we protect your info<br />
                    • Your rights & managing your info<br />
                    • Protection for underage users<br />
                    • Global data transfers<br />
                    • How to contact us
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    1. How do we collect information?
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    We collect info you provide when you register, share content, or communicate. This includes metadata like location or file date. With your consent, we may access contacts or call logs. We also collect usage data, device info (OS, browser, IP), cookie data, and get info from partners about your activities on other sites or apps.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    2. How do we use this information?
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    We use info to provide & improve our Services, show you personalized ads, ensure safety, communicate with you, support analytics for partners, and conduct research. If we use your data beyond these purposes, we’ll inform you and get your permission.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    3. Cookies & similar technologies
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    We use cookies, web beacons and similar tech to ensure proper operation, remember preferences, and deliver recommended content. You can unsubscribe from our emails anytime if you don’t wish to be tracked by pixels.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    4. How is your info shared?
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    We may share info to comply with laws, to affiliates, during mergers or acquisitions, or with third-party partners like advertisers, analytics services, and researchers. We never share personal info that identifies you without your consent.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    5. How do we protect your information?
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    We use industry-standard security measures. However, no method is 100% secure. Please notify us immediately if you believe your info is compromised. Be mindful about sharing personal info publicly on our Services.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    6. Managing your info
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    You can access, modify or delete your info unless restricted by law. You may withdraw consent at any time; however, this might affect your ability to use some features.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    7. Info for underage users
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    If you are a minor, please have your parent or guardian read this policy. We process minors’ data only under required legal conditions.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    8. Global data operations
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    As part of providing our global services, we may transfer or store your data with affiliates or partners worldwide in compliance with local laws.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700, color: '#302B63', mb: 2 }}>
                    9. Contact us
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: '#444', mb: 4 }}>
                    Reach out via our online customer service for any questions or feedback about this Policy.
                </Typography>
            </Container>
        </Box>
    );
}
