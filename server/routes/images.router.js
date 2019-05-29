const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET images');
    
    pool.query(`SELECT * FROM images`)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`error in get images: ${error}`);
            res.sendStatus(500);
        })
});



module.exports = router;