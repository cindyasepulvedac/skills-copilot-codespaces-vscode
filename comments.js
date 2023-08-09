// Create web server

// Import modules

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const User = require('../models/User');
const Post = require('../models/Post');
const { ensureAuthenticated } = require('../config/auth');

// Create comment
