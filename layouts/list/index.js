// Material Dashboard 2 React components
"use client";

import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import MDInput from "components/MDComponents/MDInput";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function List({ items }) {
  return (
    <DashboardLayout>
        <Container sx={{ display: 'flex', gap: 2}}>
            <TextField fullWidth variant="outlined" />
            <Button variant="contained">search</Button>
        </Container>
        <Container sx={{ display: 'flex', gap: 4, mt: 5}}>
            {items.map((item, index) => (
                <Box key={index}>
                    <Box height={200} width={200} sx={{ p: 2, borderRadius: 2, border: '1px solid grey', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    </Box>
                    <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
                      {item.name}
                    </Typography>
                </Box>
            ))}
          
        </Container>
    </DashboardLayout>
  );
}

export default List;
