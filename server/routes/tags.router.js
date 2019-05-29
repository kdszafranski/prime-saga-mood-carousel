const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/:imageId', (req, res) => {
    console.log('GET tags for image: ', req.params.imageId);
    
    pool.query(
            `SELECT tags.name FROM images
            JOIN images_tags ON images.id = images_tags.image_id
            JOIN tags ON images_tags.tag_id = tags.id
            WHERE images.id = $1`, [req.params.imageId]
            )
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`error in get images: ${error}`);
            res.sendStatus(500);
        })

    // res.send(['test', 'test2']);
});



module.exports = router;