import React, { useState } from "react"
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"

const Checkout = ({ cart, onCheckout, onCancel }) => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerData({ ...customerData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCheckout(customerData)
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={customerData.name}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={customerData.email}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={customerData.phone}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Order Summary
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.name} secondary={`${item.quantity} x $${item.price}`} />
                <Typography variant="body2">${item.quantity * item.price}</Typography>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" gutterBottom>
            Total: ${total}
          </Typography>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Complete Purchase
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Checkout

