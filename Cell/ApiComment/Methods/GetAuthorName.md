# GetAuthorName

Returns the comment author's name.

## Syntax

```javascript
expression.GetAuthorName();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the comment author's name.

```javascript editor-xlsx
// How to remove a comment from a range.

// Get a range, add a comment to it and then remove it.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's author: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetAuthorName());
```
