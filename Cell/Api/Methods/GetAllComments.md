# GetAllComments

Returns all comments from the current workbook including comments from all worksheets.

## Syntax

expression.GetAllComments();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment[]](../../ApiComment/ApiComment.md)

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
Api.AddComment("Comment 1", "John Smith");
oWorksheet.GetRange("A4").AddComment("Comment 2", "Mark Potato" );
var arrComments = Api.GetAllComments();
oWorksheet.GetRange("A1").SetValue("Comment text: " + arrComments[1].GetText());
oWorksheet.GetRange("A2").SetValue("Comment author: " + arrComments[1].GetAuthorName());
```
