const usuarioRepo = require("../repositories/usuario-repo");

class UsuarioService{
    add(usuario) {
        return usuarioRepo.save(usuario);
      }

    getAll() {
        return usuarioRepo.findAll();
    }

    update(id, usuario) {
        return usuarioRepo.update(id, usuario);
    }

    delete(id) {
        return usuarioRepo.delete(id);
    }
}

module.exports = UsuarioService;