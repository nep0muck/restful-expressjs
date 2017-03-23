var zone = require('../models/Zone');

module.exports = {
  find: function(params, callback) {
    zone.find(params, function(err, zones) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, zones);
    });
  },

  findById: function(id, callback) {
    zone.findById(id, function(err, zone) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, zone);
    });
  },

  create: function(params, callback) {

    // Split zip codes string by , and trim spaces,
    // then build a new array to save in database
    // to change datatype from string to array
    var zips = params['zipCodes'];
    var zip = zips.split(',');
    var newZips = [];

    zip.forEach(function(zipCode) {
      newZips.push(zipCode.trim());
    });

    params['zipCodes'] = newZips;

    zone.create(params, function(err, zone) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, zone);
    });
  },

  update: function(id, params, callback) {
    zone.findByIdAndUpdate(id, params, {
      new: true
    }, function(err, zone) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, zone);
    });
  },

  delete: function(id, callback) {
    zone.findByIdAndRemove(id, function(err) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, null);
    });
  }
}
