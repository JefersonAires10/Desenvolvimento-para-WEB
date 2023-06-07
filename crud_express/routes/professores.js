var express = require('express');
var router = express.Router();
var professoresService = require('../services/professor.services')

/* GET home page. */

router.get(
    "/listar"
    , (req, res, next) => {
        res.json(professoresService.list())
    }
)

router.post(
  "/cadastrar"
  , (req, res, next) => {
      //res.json(professoresService.list())
      const professor = professoresService.register(req.body)
      res.json(professor)

  }
)

router.get(
  "/recuperar/:id"
  , 
  (req, res, next) => {
    const professor = professoresService.retrieve(req.params.id)
    res.json(professor)
  }
)

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
