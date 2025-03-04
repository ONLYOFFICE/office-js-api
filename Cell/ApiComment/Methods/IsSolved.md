# IsSolved

Checks if a comment is solved or not.

## Syntax

```javascript
expression.IsSolved();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if a comment is solved or not.

```javascript editor-xlsx
// How to find out whether a comment is resolved.

// Add a comment resolved status to a range of the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment is solved: ");
oWorksheet.GetRange("B3").SetValue(oComment.IsSolved());
```
