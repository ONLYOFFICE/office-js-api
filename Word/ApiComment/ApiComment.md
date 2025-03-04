# ApiComment

Represents the ApiComment class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "comment" | Returns a type of the ApiComment class. |
| [GetId](./Methods/GetId.md) | string | Returns the current comment ID. If the comment doesn't have an ID, null is returned. |
| [GetText](./Methods/GetText.md) | string | Returns the comment text. |
| [SetText](./Methods/SetText.md) | [ApiComment](../ApiComment/ApiComment.md) | Sets the comment text. |
| [GetAuthorName](./Methods/GetAuthorName.md) | string | Returns the comment author's name. |
| [SetAuthorName](./Methods/SetAuthorName.md) | [ApiComment](../ApiComment/ApiComment.md) | Sets the comment author's name. |
| [GetUserId](./Methods/GetUserId.md) | string | Returns the user ID of the comment author. |
| [SetUserId](./Methods/SetUserId.md) | [ApiComment](../ApiComment/ApiComment.md) | Sets the user ID to the comment author. |
| [IsSolved](./Methods/IsSolved.md) | boolean | Checks if a comment is solved or not. |
| [SetSolved](./Methods/SetSolved.md) | [ApiComment](../ApiComment/ApiComment.md) | Marks a comment as solved. |
| [GetTimeUTC](./Methods/GetTimeUTC.md) | Number | Returns the timestamp of the comment creation in UTC format. |
| [SetTimeUTC](./Methods/SetTimeUTC.md) | [ApiComment](../ApiComment/ApiComment.md) | Sets the timestamp of the comment creation in UTC format. |
| [GetTime](./Methods/GetTime.md) | Number | Returns the timestamp of the comment creation in the current time zone format. |
| [SetTime](./Methods/SetTime.md) | [ApiComment](../ApiComment/ApiComment.md) | Sets the timestamp of the comment creation in the current time zone format. |
| [GetQuoteText](./Methods/GetQuoteText.md) | Number | Returns the quote text of the current comment. |
| [GetRepliesCount](./Methods/GetRepliesCount.md) | Number | Returns a number of the comment replies. |
| [GetReply](./Methods/GetReply.md) | [ApiCommentReply](../ApiCommentReply/ApiCommentReply.md) | Returns the specified comment reply. |
| [AddReply](./Methods/AddReply.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a reply to a comment. |
| [RemoveReplies](./Methods/RemoveReplies.md) | [ApiComment](../ApiComment/ApiComment.md) | Removes the specified comment replies. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current comment from the document. |
