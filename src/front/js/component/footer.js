import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FooterApp() {
  const [value, setValue] = React.useState(0);

  return (
    <footer className="footer">
      <Box sx={{}}>
        <BottomNavigation className="footerBox">
          <BottomNavigationAction
            sx={{ background: "rgba(25,118,210)" }}
            label="Recents"
            icon={<FacebookIcon sx={{ color: "white" }} />}
          />
          <BottomNavigationAction
            sx={{ background: "rgba(25,118,210)" }}
            label="Favorites"
            icon={<InstagramIcon sx={{ color: "white" }} />}
          />
          <BottomNavigationAction
            sx={{ background: "rgba(25,118,210)" }}
            label="Nearby"
            icon={<TwitterIcon sx={{ color: "white" }} />}
          />
        </BottomNavigation>
      </Box>
    </footer>
  );
}
