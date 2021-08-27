const Comentario = require("../domain/comentario");
const ComentarioService = require("../services/comentario-service");
var comentarioService = new ComentarioService();

exports.get = async (req, res) => {
  res.json(await comentarioService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await comentarioService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(
    await comentarioService.add(
      req.body.postId,
      new Comentario(req.body.comentario)
    )
  );
};

exports.put = async (req, res) => {
  res.json(
    await comentarioService.update(
      req.params.id,
      new Comentario(req.body.comentario)
    )
  );
};

exports.delete = (req, res) => {
  res.json(comentarioService.delete(req.params.id));
};