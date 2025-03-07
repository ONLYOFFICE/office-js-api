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

This example shoows how to get the quote text of the comment.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's quote text: ");
worksheet.GetRange("B3").SetValue(comment.GetQuoteText());
```
