# ApiComment

Represents the ApiComment class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| AuthorName | string | Returns or sets the comment author's name. |
| Id | string | Returns the current comment ID. |
| QuoteText | string | Returns the quote text of the current comment. |
| RepliesCount | Number | Returns a number of the comment replies. |
| Solved | boolean | Checks if a comment is solved or not or marks a comment as solved. |
| Text | string | Returns or sets the comment text. |
| Time | number \| string | Returns or sets the timestamp of the comment creation in the current time zone format. |
| TimeUTC | number \| string | Returns or sets the timestamp of the comment creation in UTC format. |
| UserId | string | Returns or sets the user ID of the comment author. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddReply](./Methods/AddReply.md) | None | Adds a reply to a comment. |
| [Delete](./Methods/Delete.md) | None | Deletes the ApiComment object. |
| [GetAuthorName](./Methods/GetAuthorName.md) | string | Returns the comment author's name. |
| [GetClassType](./Methods/GetClassType.md) | "comment" | Returns a type of the ApiComment class. |
| [GetId](./Methods/GetId.md) | string | Returns the current comment ID. |
| [GetQuoteText](./Methods/GetQuoteText.md) | String \| null | Returns the quote text of the current comment. |
| [GetRepliesCount](./Methods/GetRepliesCount.md) | Number | Returns a number of the comment replies. |
| [GetReply](./Methods/GetReply.md) | [ApiCommentReply](../ApiCommentReply/ApiCommentReply.md) | Returns the specified comment reply. |
| [GetText](./Methods/GetText.md) | string | Returns the comment text. |
| [GetTime](./Methods/GetTime.md) | Number | Returns the timestamp of the comment creation in the current time zone format. |
| [GetTimeUTC](./Methods/GetTimeUTC.md) | Number | Returns the timestamp of the comment creation in UTC format. |
| [GetUserId](./Methods/GetUserId.md) | string | Returns the user ID of the comment author. |
| [IsSolved](./Methods/IsSolved.md) | boolean | Checks if a comment is solved or not. |
| [RemoveReplies](./Methods/RemoveReplies.md) | None | Removes the specified comment replies. |
| [SetAuthorName](./Methods/SetAuthorName.md) | None | Sets the comment author's name. |
| [SetSolved](./Methods/SetSolved.md) | None | Marks a comment as solved. |
| [SetText](./Methods/SetText.md) | None | Sets the comment text. |
| [SetTime](./Methods/SetTime.md) | None | Sets the timestamp of the comment creation in the current time zone format. |
| [SetTimeUTC](./Methods/SetTimeUTC.md) | None | Sets the timestamp of the comment creation in UTC format. |
| [SetUserId](./Methods/SetUserId.md) | None | Sets the user ID to the comment author. |
