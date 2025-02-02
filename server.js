



var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser');
//var mangoose = require('mangoose');

var Issue = require('./backend/model/Issue')



const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());


var mongoose = require('mongoose');
//var db = mongojs('mongodb://localhost:27017/proof_concept',['Issue'])

mongoose.connect('mongodb://localhost:27017/proof_concept',['Issues']);

 
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));


app.get('/', (req, res) => res.send('Hello World!'));
//app.listen(4000, () => console.log(`Express server running on port 4000`));






router.route('/issues').get((req, res) => {
    Issue.find((err, proof_concept_table) => {
        if (err)
            console.log(err);
        else
            res.json(proof_concept_table);
    });
});


router.route('/issues/:id').get((req, res) => {
    id={_id:req.params.id}
   
    Issue.findOne(id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
});

router.route('/issues/add').post((req, res) => {
    const issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            console.log("issue", issue)
            
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});



router.route('/issues/update/:id').post((req, res) => {
    Issue.findOneAndUpdate(req.params.id, (err, issue) => {
        console.log(req.params.id)
        console.log(issue.id);
        //if (!issue)
           // return next(new Error('Could not load Document'));
        
            //issue.title = req.body.title;
           // issue.responsible = req.body.responsible;
           // issue.description = req.body.description;
           // issue.severity = req.body.severity;
            //issue.id = req.body.id;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        
    });
});



router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});