const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const mongoUri = "mongodb+srv://sivasankaravula128:Siva$128@cluster0.qh7vx7e.mongodb.net/User"; 

mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
  
app.get("/", (req, res) => {
  res.send("Running");
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Users', userSchema);

app.post('/signup', async (req, res) => {
  try {
    let checkMail = await User.findOne({ email: req.body.email });
    let checkName = await User.findOne({ name: req.body.name });

    if (checkMail || checkName) {
      return res.status(400).json({ success: false, errors: "Existing E-Mail or Name" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new User({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/login',async(req,res)=>{
    let user = await User.findOne({ email: req.body.email });
    if(user){
        const passcomp = req.body.password === user.password;
        if(passcomp){
            const data = {
                    user:{id:user.id}
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"Incorrect Password"})
        }
    }
    else{
        res.json({success:false,errors:"Wrong E-Mail"})
    }
})

const fetchUser =async(req,res,next)=>{
    const token =req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please Authenticate using Valid Token"});
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user =data.user
            next();
        }
        catch(error){
            res.status(401).send({errors:"Please Authenticate using Valid Token"})
        }
    }
}

app.get('/user', fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


app.post('/addtocart',fetchUser,async(req,res)=>{
    let userdata = await User.findOne({_id:req.user.id});
    userdata.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
})
app.post('/removefromcart',fetchUser,async(req,res)=>{
    let userdata = await User.findOne({_id:req.user.id});
    if( userdata.cartData[req.body.itemId]>0)
    userdata.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
    
})

app.post('/getcart',fetchUser,async(req,res)=>{
    let userdata = await User.findOne({_id:req.user.id});
    res.json(userdata.cartData);
})

app.listen(port, (error) => {
    if (!error) {
      console.log(`Server running on port ${port}`);
    } else {
      console.log('Error starting server:', error);
    }
  });