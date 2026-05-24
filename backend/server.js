const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {

    const { userId, password, role } = req.body;

    const users = [

        {
            userId: 'admin',
            password: 'admin123',
            role: 'Admin'
        },

        {
            userId: 'user',
            password: 'user123',
            role: 'General User'
        }

    ];

    const matchedUser = users.find(

        (user) =>

            user.userId === userId &&
            user.password === password &&
            user.role === role

    );

    if (matchedUser) {

        res.status(200).json({

            success: true,
            message: 'Login Successful',
            user: matchedUser

        });

    }

    else {

        res.status(401).json({

            success: false,
            message: 'Invalid Credentials'

        });

    }

});

app.get('/records', (req, res) => {

    res.json([

        {
            employee: 'Lokesh Kumar',
            department: 'Engineering',
            access: 'Admin',
            status: 'Active'
        },

        {
            employee: 'Rahul Sharma',
            department: 'HR',
            access: 'General User',
            status: 'Pending'
        }

    ]);

});

app.listen(5000, () => {

    console.log('Server running on port 5000');

});