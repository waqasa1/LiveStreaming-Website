import { Box, Typography, Avatar } from "@mui/material"

const teamMembers = [
  {
    img: "",
    name: "Ahmed Arif",
    role: "Marketing Manager at Streamify",
  },
  {
    img: "",
    name: "Nouman Saeed",
    role: "South Asia Manager at Streamify",
  },
  {
    img: "",
    name: "Shan Ali",
    role: "Web Developer at Streamify Live",
  },
  {
    img: "",
    name: "Huy Nguyen",
    role: "Project Manager at Streamify",
  },
  {
    img: "",
    name: "Noel",
    role: "Team Lead at Streamify",
  },
  {
    img: "",
    name: "Linh Kim Huynh",
    role: "UI/UX Designer at Streamfiy Live",
  },
]

export default function TeamSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        fontFamily: "SVN-Gilroy",
        borderTopLeftRadius: { xs: 0, md: "100px" },
        borderTopRightRadius: { xs: 0, md: "100px" },
        backgroundColor: "white",
        width:{md:'94vw'},
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: { xs: 4, md: 6 },
          justifyItems: "center", // ensures cards are centered in their grid cells
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "80%", sm: "220px", md: "300px" }, // responsive widths
              height: { xs: "auto", sm: "220px", md: "300px" },
              p: 3,
              background: "#0F0C29",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:'center',
              textAlign: "center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Avatar
              src={member.img}
              alt={member.name}
              sx={{
                width: { xs: 70, md: 100 },
                height: { xs: 70, md: 100 },
                mb: 2,
                border: "3px solid white",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                opacity: 0.9,
                lineHeight: 1.4,
              }}
            >
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>

  )
}
