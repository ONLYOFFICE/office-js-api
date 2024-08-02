window.Asc.plugin.executeMethod ("GetAllComments", null, function (comments) {
    Comments = comments;
    addComments (comments);
});