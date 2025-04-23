# GetCommentById

Returns a comment from the current document by its ID.

## Syntax

```javascript
expression.GetCommentById(sId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The comment ID. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example shows how to get a comment from the current document by its ID.

```javascript editor-xlsx
let comment = Api.AddComment("Comment", "Bob");
let id = comment.GetId();
comment = Api.GetCommentById(id);
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + comment.GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + comment.GetAuthorName());
```
