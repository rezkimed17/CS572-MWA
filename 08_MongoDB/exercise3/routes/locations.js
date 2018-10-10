var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
    mongoClient.connect("mongodb://127.0.0.1", { useNewUrlParser: true }, (err, client) => {
        if(err) throw err;
        const db = client.db('mwa');
        db.collection('locations').find().toArray( (err,data) => {
            res.json(data);
            client.close();
        });
    });
});

router.post('/', function(req, res, next) {

    const location = {
        "_id": req.body._id,
        "name": req.body.name,
        "category": req.body.category,
        "location": req.body.location
    }
    mongoClient.connect("mongodb://127.0.0.1", { useNewUrlParser: true }, (err, client) => {
        if(err) throw err;
        const db = client.db('mwa');
        db.collection('locations').insert(location, (err,data) => {
            if (err) 
                res.json({'success': 'false', 'message': 'Unable to insert location!'});
            else 
                res.json({'success': 'true', 'message': 'Location inserted successfully!'});
        });
    });

});

router.post('/nearest', function(req, res, next) {
    const longitude = req.body.location[0];
    const latitude = req.body.location[1];
    const name = req.body.name;
    const category = req.body.category;

    mongoClient.connect("mongodb://127.0.0.1", { useNewUrlParser: true }, (err, client) => {
        if(err) throw err;
        const db = client.db('mwa');
        db.collection('locations').find(
                { $and: [   {'location': {$near: [longitude, latitude]}},
                            {'name': {$regex: name, $options: 'i'}},
                            {'category': {$regex: category, $options: 'i'}}
                        ]
                }
            ).limit(3).toArray( (err,data) => {
            res.json(data);
            client.close();
        });
    });
});

module.exports = router;
