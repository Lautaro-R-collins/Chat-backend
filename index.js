const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/', (req, res) => {
    // const { message, user: sender, type, members } = req.body;

    // if(type === 'message.new') {
    //     members
    //         .filter((member) => member.user_id !== sender.id)
    //         .forEach(({ user }) => {
    //             if(!user.online) {
    //                 client.messages
    //                 .create({
    //                  body: 'Your appointment is coming up on July 21 at 3PM',
    //                   from: 'whatsapp:+14155238886',
    //                 to: 'whatsapp:+5492616908835'
    //                 })
    //                 .then(message => console.log(message.sid))
    //                     .done();
    //                }
    //                    })

    //         return res.status(200).send('Message sent!');
    // }

    return res.status(200).send('Not a new message request');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
