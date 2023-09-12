# CommentReportRecord

Record of one comment.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| IsAnswer | Optional | Boolean | Specifies whether this is an initial comment or a reply to another comment. Default value is "false". |
| CommentMessage | Required | String | The text of the current comment. |
| Date | Required | Number | The time when this change was made in local time. |
| DateUTC | Required | Number | The time when this change was made in UTC. |
| QuoteText | Optional | String | The text to which this comment is related. Default value is "undefined". |

## Example

This example shows how to get a report on all comments.

```javascript
var oCommentsReport = oDocument.GetCommentsReport();
```