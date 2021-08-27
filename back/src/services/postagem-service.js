const postagemRepo = require("../repositories/postagem-repo");

class PostagemService {
  add(postagem) {
    return postagemRepo.save(postagem);
  }

  getAll() {
    return postagemRepo.findAll();
  }

  getById(id) {
    return postagemRepo.findOne(id);
  }

  update(id, postagem) {
    return postagemRepo.update(id, postagem);
  }

  delete(id) {
    return postagemRepo.delete(id);
  }
}

module.exports = PostagemService;
