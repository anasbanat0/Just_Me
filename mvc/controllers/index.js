const data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;

const recentPostsAmount = 3;

const defaultData = {categoryData: categoryData};
const rightSidebarData = {
  uniqueTags: uniqueTags,
  recentPosts: postData.slice(0, recentPostsAmount)
}


const getHomePage = function(req, res) {
  let data = {
    ...defaultData,
    title: "Just Me",
    posts: postData,
    active: "index"
  };
  res.render("index", data);
}

const getBlogPost = function({params}, res) {
    let post = postData.find((val) => val.id == params.postId);
    if(!post) {res.redirect("/404")}
    let data = {
      ...defaultData,
      title: post.title,
      post: post,
      ...rightSidebarData
    };
    res.render("post", data);
}

const get404 = function(req, res) {
  let data = {
    ...defaultData,
    ...rightSidebarData,
    title: "404 - I couldn't find the page...",
  };
  res.render('404', data);
}

const redirect404 = function(req, res) {
  res.redirect("/404");
}

const getAbout = function(req, res) {
  let data = {
    ...defaultData,
    title: "About Me",
    active: 'about'
  };
  res.render('about', data);
}

const getContact = function(req, res) {
  let data = {
    ...defaultData,
    title: "Contact",
    active: 'contact'
  };
  res.render('contact', data);
}

const getFilterList = function({query}, res) {
  let filteredPosts = postData.filter((val) => {
    return val.category === query.category || val.tags.includes(query.tag);
  });
  let data = {
    ...defaultData,
    title: "Just Me - Filtered",
    active: query.category,
    posts: filteredPosts
  };
  res.render('filter', data);
}

module.exports = {
  getHomePage,
  getBlogPost,
  get404,
  redirect404,
  getAbout,
  getContact,
  getFilterList
}