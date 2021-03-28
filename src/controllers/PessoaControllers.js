const database = require('../models/')

class PessoaControllers {

  static async listPessoas(req, res) {
    try {
      const listarPessoas = await database.Pessoas.findAll();
      return res.status(200).json(listarPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
}

module.exports = PessoaControllers;