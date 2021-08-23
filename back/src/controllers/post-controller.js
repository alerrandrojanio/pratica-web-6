const Post = require("../domain/post");
const PostService = require("../services/post-service");
var postService = new PostService();

exports.get = async (req, res) => {
  res.json(await postService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await postService.getById(req.params.id));
};

exports.post = async (req, res) => {
  if (req.body.text.length < 2) {
    res.status(400).send();
  } else {
    let post = await postService.add(
      new Post(req.query.texto, req.query.data, req.query.hora, req.query.img)
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
    await postService.update(
      req.params.id,
      new Post(req.query.texto, req.query.data, req.query.hora, req.query.img)
    )
  );
};

exports.delete = (req, res) => {
  res.json(postService.delete(req.params.id));
};
