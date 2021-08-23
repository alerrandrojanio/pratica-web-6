const feedbackRepo = require("../repositories/feedback-repo");

class FeedbackService {
  add(id_post, feedback) {
    return feedbackRepo.save(id_post, feedback);
  }

  getAll() {
    return feedbackRepo.findAll();
  }

  getById(id) {
    return feedbackRepo.findOne(id);
  }

  update(id, feedback) {
    return feedbackRepo.update(id, feedback);
  }

  delete(id) {
    return feedbackRepo.delete(id);
  }
}

module.exports = FeedbackService;
