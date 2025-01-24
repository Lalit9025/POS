import React, { useState } from "react"
import { Grid, Card, CardContent, Typography, Button, TextField, CardActions } from "@mui/material"
import Box from "@mui/material/Box"

//services to show
const services = [
  { id: 1, name: "Fitness Class", price: 20 },
  { id: 2, name: "Therapy Session", price: 80 },
  { id: 3, name: "Workshop", price: 50 },
  { id: 4, name: "Yoga Class", price: 15 },
  { id: 5, name: "Nutrition Consultation", price: 60 },
]

const ServiceList = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredServices = services.filter((service) => service.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" gutterBottom>
        Available Services
      </Typography>
      <TextField
        fullWidth
        label="Search services"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
      />
      <Grid container spacing={3} sx={{ flexGrow: 1, mt: 2 }}>
        {filteredServices.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${service.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => addToCart(service)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ServiceList

