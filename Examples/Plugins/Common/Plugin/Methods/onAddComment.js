window.Asc.plugin.event_onAddComment = function(comment)
{
    Comments.push(comment);
    $('#scrollable-container-id').append(makeComment(comment.Id, comment));
};