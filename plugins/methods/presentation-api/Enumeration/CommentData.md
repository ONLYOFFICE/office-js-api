# CommentData

The comment data.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| QuoteText | string | The quote comment text. |
| Replies | [CommentData](../Enumeration/CommentData.md)[] | An array containing the comment replies represented as the *CommentData* object. |
| Solved | boolean | Specifies if the comment is resolved (**true**) or not (**false**). |
| Text | string | The comment text. |
| Time | string | The time when the comment was posted (in milliseconds). |
| UserName | string | The comment author. |
## Type

Object



## Example

```javascript
let commentData = {
    "UserName": "John Smith",
    "Text": "comment",
    "Time": "1662737941471",
    "Solved": true,
    "Replies": [
        {
            "UserName": "Mark Potato",
            "Text": "reply 1",
            "Time": "1662740895892",
            "Solved": false
        }
    ]
};
window.Asc.plugin.executeMethod ("AddComment", [commentData]);
```
