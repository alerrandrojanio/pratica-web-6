const comentarioRepo = require("../repositories/comentario-repo");

class ComentarioService {
  add(id_post, comentario) {
    return comentarioRepo.save(id_post, comentario);
  }

  getAll() {
    return comentarioRepo.findAll();
  }

  getById(id) {
    return comentarioRepo.findOne(id);
  }

  update(id, comentario) {
    return comentarioRepo.update(id, comentario);
  }

  delete(id) {
    return comentarioRepo.delete(id);
  }
}

module.exports = ComentarioService;
