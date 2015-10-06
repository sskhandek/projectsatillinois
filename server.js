/**
 * Created by SujayKhandekar on 10/6/15.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 80);