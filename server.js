/*const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database-name>?retryWrites=true&w=majority';

// Middleware
app.use(express.json());

// Connect to MongoDB Atlas
async function connectToDatabase() {
    const client = new MongoClient(mongoURI);

    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        return client.db('<database-name>');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        throw error;
    }
}

// Validation rules for signup
const signupValidationRules = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Invalid email address'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// Routes
app.post('/api/signup', signupValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const db = await connectToDatabase();
    const users = db.collection('users');

    try {
        // Check if email already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const newUser = { name, email, password: hashedPassword };
        await users.insertOne(newUser);

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const db = await connectToDatabase();
    const users = db.collection('users');

    try {
        // Find user by email
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    return res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

*/

const express = require('express');
const cors = require('cors')
const app = express();
const stripe = require('stripe')("sk_test_51NBE82FW6Es16DlXn4bLYmNL8tlJfDQgQI1Hy0emz8qD6UFdMdB5PFJfLyG86tHZ9IDjgPrTy4GcqEtR7gjWCJUn00ACKxTmqF");

app.use(express.json());
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, 
            currency: currency
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


