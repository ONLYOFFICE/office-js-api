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

```javascript
var oComment = Api.AddComment("Comment", "Bob");
var sId = oComment.GetId();
oComment = Api.GetCommentById(sId);
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", oComment.GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", oComment.GetAuthorName());
```
