const express = require('express');
const AuthController = require('../../controllers/auth.controller');
const logger = require('../../../config/logger');
const authenticateJWTToken = require('../../../middlewares/auth');
const router = express.Router();


router.get('/status', (req, res) => {
  res.send('Hello World!')
})

// Auth routes
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await AuthController.loginUser({ email, password });
    return res.status(201).json(user);
  
  } catch(error) {
    logger.error(error)
  }
});

router.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    
    const user = await AuthController.registerUser({ first_name, last_name, email, password });
    return res.status(201).json(user);
  
  } catch(error) {
    logger.error(error)
  }
});


// Users routes
router.post('/users', authenticateJWTToken, async (req, res) => {

});

router.post('/user', authenticateJWTToken, async (req, res) => {

});

// Notes Routes
router.post('/notes', authenticateJWTToken, async (req, res) => {

});

router.put('/notes', authenticateJWTToken, async (req, res) => {

});

router.get('/notes/:note_id', authenticateJWTToken, async (req, res) => {

});


router.get('/users', authenticateJWTToken, async (req, res) => {

});


module.exports = router;