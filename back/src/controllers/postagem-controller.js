const Postagem = require("../domain/postagem");
const PostagemService = require("../services/postagem-service");
var postagemService = new PostagemService();

exports.get = async (req, res) => {
  res.json(await postagemService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await postagemService.getById(req.params.id));
};

exports.post = async (req, res) => {
  if (req.body.text.length < 2) {
    res.status(400).send();
  } else {
    let post = await postagemService.add(
      new Postagem(req.query.texto, req.query.data, req.query.hora, req.query.img)
    );

    if (post != null) {
      res.status(201).json(post);
    } else {
      res.status(409).send();
    }
  }
};

exports.put = async (req, res) => {
  res.json(
    await postagemService.update(
      req.params.id,
      new Postagem(req.query.texto, req.query.data, req.query.hora, req.query.img)
    )
  );
};

exports.delete = (req, res) => {
  res.json(postagemService.delete(req.params.id));
};
