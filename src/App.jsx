import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import ServiceList from "./components/ServiceList"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Receipt from "./components/Receipt"
import FavoriteIcon from "@mui/icons-material/Favorite"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
})

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [showCheckout, setShowCheckout] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [receiptData, setReceiptData] = useState(null)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (service) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === service.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...service, quantity: 1 }]
    })
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index))
  }

  const updateQuantity = (index, newQuantity) => {
    setCart((prevCart) => prevCart.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item)))
  }

  const handleCheckout = (customerData) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const receipt = {
      customer: customerData,
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
    }
    setReceiptData(receipt)
    setShowReceipt(true)
    setShowCheckout(false)
    setCart([])
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Router>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Service POS System
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/cart">
                Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" sx={{ pt: 2, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<ServiceList addToCart={addToCart} />} />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    setShowCheckout={setShowCheckout}
                  />
                }
              />
            </Routes>
            {showCheckout && (
              <Checkout cart={cart} onCheckout={handleCheckout} onCancel={() => setShowCheckout(false)} />
            )}
            {showReceipt && <Receipt data={receiptData} onClose={() => setShowReceipt(false)} />}
          </Container>
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 2,
              backgroundColor: (theme) => theme.palette.grey[800],
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1" align="center">
                Made with <FavoriteIcon sx={{ color: "red", verticalAlign: "middle" }} /> by Lalit
              </Typography>
            </Container>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App

