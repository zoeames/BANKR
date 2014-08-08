'use strict';

var Account = require('../models/account');

exports.init = function(req, res){
  Account.all(function(err, accounts){
    res.render('accounts/init', {accounts:accounts});
  });
};

exports.create = function(req, res){
  Task.create(req.body, function(){
    res.redirect('/tasks');
  });
};


