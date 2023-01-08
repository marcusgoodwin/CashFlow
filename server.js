if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const path = require('path');
const exphbs = require('express-handlebars');

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
app.use(express.json());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: 'super secret group of words',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

// right now this is not allowing us to go to the input page. I'm trying to figure out why the user (after signing up) isn't redirected to the input page once they login
// IF YOU NEED THE INPUT PAGE TO WORK THEN COMMENT OUT THE APP.GET BELOW


// app.get('/input', checkAuthenticated, (req, res) => {
//   res.render('input.handlebars', { name: req.user.name })
// })


// COMMENT TO HERE OUT TO GET THE INPUT PAGE TO WORK (I commented it out just in case)

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.handlebars')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/input',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/sign-up', checkNotAuthenticated, (req, res) => {
  res.render('sign-up.handlebars')
})

app.post('/sign-up', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/sign-up')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(3000)

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
