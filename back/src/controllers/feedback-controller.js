const Feedback = require("../domain/feedback");
const FeedbackService = require("../services/feedback-service");
var feedbackService = new FeedbackService();

exports.get = async (req, res) => {
  res.json(await feedbackService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await feedbackService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(
    await feedbackService.add(
      req.body.productId,
      new Feedback(req.body.comentario, req.body.data, req.body.hora)
    )
  );
};

exports.put = async (req, res) => {
  res.json(
    await feedbackService.update(
      req.params.id,
      new Feedback(req.body.comentario, req.body.data, req.body.hora)
    )
  );
};

exports.delete = (req, res) => {
  res.json(feedbackService.delete(req.params.id));
};