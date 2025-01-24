import React from "react"
import { useNavigate } from "react-router-dom"
import { Typography, List, ListItem, ListItemText, Button, IconButton, Box } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteIcon from "@mui/icons-material/Delete"

const Cart = ({ cart, removeFromCart, updateQuantity, setShowCheckout }) => {
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          <List sx={{ mt: 2 }}>
            {cart.map((item, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item.name} secondary={`$${item.price} x ${item.quantity}`} />
                <Box>
                  <IconButton onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => updateQuantity(index, item.quantity + 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Total: ${total}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setShowCheckout(true)} fullWidth>
            Proceed to Checkout
          </Button>
        </>
      )}
      <Button variant="outlined" onClick={() => navigate("/")} fullWidth sx={{ mt: 2 }}>
        Back to Services
      </Button>
    </Box>
  )
}

export default Cart

