const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

/* decrypt message */
router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err, client) => {
        if (err) throw err;
        const db = client.db('mwa');
        db.collection('homework7').findOne({}, (err, doc) => {
            if(err) throw err;
            const decipher = crypto.createDecipher('aes256', 'asaadsaad');
            const encrypted = doc.message;
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            client.close();
            res.status(200).json({
                "encrypted": encrypted,
                "decrypted": decrypted
            });
        });        
    });
});

module.exports = router;
