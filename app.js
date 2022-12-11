const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { engine } = require('express-handlebars');
const { getConnection } = require("./db/mongoose");
const userService = require("./users_module/service");
const cookieParser = require("cookie-parser");
const { auth } = require('./users_module/auth')
const { restart } = require("nodemon");




const app = express();
const port = 3000;

app.engine('handlebars', engine ());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, "./Client/Public")));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/index.html"));
});

app.get("/signup", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/signup.html"));
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    await userService.storeUser(req.body);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
    return;
  }
  res.status(200).json({
    message: "user created successfully",
  });
});

app.get('/user/email', (req, resp) =>{
  req.params.email
  const user = userService.getUser(email)
  res.render('profile', {
    layout: 'profile',
    name: user.name,
    email: user.email,
  })
})

app.get('/dashboard', auth, async (res, req) => {
  try{
    const user = await userService.getUserById(req.userId)
    res.render('profile',{
      layout: 'profile',
      email: user.email,
    })
  } catch(error){
    res.redirect('/signin')
    res.end()
    return;
  }
   
})

app.get("/signin", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/signin.html"));
});

app.post("/signin", async (req, res) => {
  const body = req.body

  if(!body.email || !body.password || !body.email.includes('@') || body.password.length === 0 ) {
    res.status(400).json({
      error:"Invalid User Information, please check your input"
    })
    return;
  }

  try {
    const {userId, token} = await userService.signIn(body)
    if(userId && token) {
      res.cookie('token', token, {maxAge: 900000});
      res.set('authorization', token)
      res.status(200).json({
        userId,
        token,
    })
    }
  } catch (err) {
    res.status(400).json({
      error: err,
    });
    return;
  }
  res.status(200).json({
    message: "user signed in successfully",
  });
});

app.get("/leggings", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/leggings.html"));
});

app.get("/tops", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/tops.html"));
});

app.get("/accessories", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/accessories.html"));
});

app.get("/checkout", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "./Client/checkout.html"));
});

app.get("*", (req, resp) => {
  resp.send("./Client/Public/404.html");
});

app.get("/", (req, resp) => {
  console.log("accessing route /, METHOD = get");
  resp.sendFile(path.join(__dirname, "Client/Public/styles.css"));
});





app.get('user', (req, res) => {
    res.render('profile', {
        email: ""
    })
})

app.listen(port, async () => {
  console.log("listening on port " + port);
  await getConnection();
  console.log("connected to DB");
});
