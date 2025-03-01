# GetQuoteText

Returns the quote text of the current comment.

## Syntax

```javascript
expression.GetQuoteText();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

String \| null

## Example

This example shows how to get the quote text of the comment.

```javascript editor-xlsx
// How to get a comment quote.

// Add a comment to the range and display its quote text in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's quote text: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetQuoteText());
```
