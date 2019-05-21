const express = require('express');
const router = express.Router();
const axios = require('axios');

let url = '';
let apikey = 'Bearer 8Y39gA7fnoJ2TtVrHgKXoEIFuegen3hRd5FoCjgUc1QsLR8qAu_f5YpD40m00dYEqh0E2mysHzU0Rb2TNRDGDWRhTQ-u3fJ2z0ZRoDuljsLUJpvtMsM97fDFUrriXHYx'

// let config = {
//     headers: {
//         'Authorization': apikey,
//         "Content-Type": "application/json"
//     }
// }

router.put('/get', (req, res) => {
    axios.get(`https://api.yelp.com/v3/businesses/search${req.body.information}`, {
        headers: { Authorization: apikey }
    })
        .then(response => { res.status(200).json(response.data) },
            function (err) {
                console.log(err, 'error in .then')
            })
        .catch(err => res.status(500).json('error:', err))
})



module.exports = router;