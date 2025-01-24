import React from "react"
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"

const Receipt = ({ data, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Receipt</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Date: {data.date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Customer: {data.customer.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {data.customer.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: {data.customer.phone}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Items:
        </Typography>
        <List>
          {data.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={`${item.quantity} x $${item.price}`} />
              <Typography variant="body2">${item.quantity * item.price}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom>
          Total: ${data.total}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Receipt

