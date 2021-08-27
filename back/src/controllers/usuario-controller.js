const Usuario = require("../domain/usuario");
const UsuarioService = require("../services/usuario-service");
var usuarioService = new UsuarioService();

exports.get = async (req, res)=>{
  res.json(await usuarioService.getAll());
};



exports.post = async (req, res) => {
  if (req.body.nome.length < 2 || req.body.senha < 2) {
    res.status(400).send();
  } else {
    let usuario = await usuarioService.add(
      new Usuario(req.body.nome,req.body.usuario, req.body.senha)
    );

    if (usuario != null) {
      res.status(201).json(usuario);
    } else {
      res.status(409).send();
    }
  }
};

exports.put = async (req,res) =>{
  res.json(await usuarioService.update(req.params.id,
      new Usuario( 
          req.body.nome, 
          req.body.usuario,
          req.body.senha
      )));
};

exports.delete = (req, res) => {
  res.json(usuarioService.delete(req.params.id));
};