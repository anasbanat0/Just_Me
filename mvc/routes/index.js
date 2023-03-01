const express = require('express');
const router = express.Router();

const {getHomePage, getBlogPost, get404, redirect404, getAbout, getContact, getFilterList} = require("../controllers/index");

router.get('/', getHomePage);
router.get("/posts/:postId", getBlogPost);

router.get('/about', getAbout);
router.get('/contact', getContact);

router.get('/filter', getFilterList);

router.get('/404', get404);
router.get('*', redirect404);

module.exports = router;
