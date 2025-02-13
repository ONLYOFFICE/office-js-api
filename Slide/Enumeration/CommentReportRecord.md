# CommentReportRecord

Record of one comment.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| IsAnswer | boolean | Specifies whether this is an initial comment or a reply to another comment. |
| CommentMessage | string | The text of the current comment. |
| Date | number | The time when this change was made in local time. |
| DateUTC | number | The time when this change was made in UTC. |
| QuoteText | string | The text to which this comment is related. |


## Example

This example shows how to get a report on all comments.

```javascript
let commentsReport = oDocument.GetCommentsReport();
```
