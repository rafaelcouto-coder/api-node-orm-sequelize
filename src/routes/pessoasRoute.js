const { Router } = require('express');
const PessoaControllers = require('../controllers/PessoaControllers');

const router = Router()

router.get('/pessoas', PessoaControllers.listPessoas); 

module.exports = router;