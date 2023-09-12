# GetCommentById

Returns a comment from the current document by its ID.

## Syntax

expression.GetCommentById(sId);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sId | Required | String | The comment ID |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) &#124; null

## Example

This example shows how to get a comment from the current document by its ID.

```javascript
builder.CreateFile("xlsx");
var oComment = Api.AddComment("Comment", "Bob");
var sId = oComment.GetId();
oComment = Api.GetCommentById(sId);
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", oComment.GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", oComment.GetAuthorName());
builder.SaveFile("xlsx", "GetCommentById.xlsx");
builder.CloseFile();
```