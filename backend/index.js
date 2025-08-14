require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get('/addHoldings', async (req, res) => {
//     let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.day,
//         day: item.day,
//     });
//     newHolding.save();
// });
//     res.send("Done!");
// });



app.get('/addPositions', async (req, res) => {
    let tempPositions = [
{
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

tempPositions.forEach((item) => {
    let newPosition = new PositionsModel({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.day,
        day: item.day,
        isLoss: item.isLoss,
    });
    newPosition.save();
});
    res.send("Done!");
});

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.json({message: "Order saved!"});
});

app.listen(PORT, () => {
    console.log("App Started!");
    mongoose.connect(uri)
        .then(() => {
            console.log("DB connected!");
        })
        .catch((err) => {
            console.error("MongoDB connection error:", err.message);
        });
});




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Enhanced CORS configuration
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["POST"],
//   credentials: true
// }));

// app.use(express.json());

// // MongoDB Connection with error handling
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   retryWrites: true
// })
// .then(() => console.log("MongoDB connected successfully"))
// .catch(err => console.error("MongoDB connection failed:", err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);



// app.post('/api/auth/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     // Validate input
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Check if email exists
//     const existingUser = await User.findOne({ email: email.toLowerCase() });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }

//     // Create user
//     const user = new User({ name, email: email.toLowerCase(), password });
//     await user.save();
    
//     res.status(201).json({ 
//       message: 'Signup successful',
//       user: { id: user._id, name: user.name }
//     });
    
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ error: 'Registration failed' });
//   }
// });


// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Validate input
//     if (!email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Find user (case-insensitive email search)
//     const user = await User.findOne({ 
//       email: { $regex: new RegExp(`^${email.trim()}$`, 'i') } 
//     });
    
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Password comparison (plain text for now - use bcrypt in production)
//     if (user.password !== password.trim()) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Successful login
//     res.json({ 
//       message: 'Login successful',
//       user: { 
//         id: user._id,
//         name: user.name,
//         email: user.email
//       }
//     });
    
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ error: 'Login failed' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));