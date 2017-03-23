var comment = require('../models/Comment');

module.exports = {
  find: function(params, callback) {
    comment.find(params, function(err, comments) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comments);
    });
  },

  findById: function(id, callback) {
    comment.findById(id, function(err, comment) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comment);
    });
  },

  create: function(params, callback) {
    comment.create(params, function(err, comment) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comment);
    });
  },

  update: function(id, params, callback) {
    comment.findByIdAndUpdate(id, params, {
      new: true
    }, function(err, comment) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comment);
    });
  },

  delete: function(id, callback) {
    comment.findByIdAndRemove(id, function(err) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, null);
    });
  }
}
