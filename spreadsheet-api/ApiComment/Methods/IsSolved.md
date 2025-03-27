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
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
worksheet.GetRange("B3").SetValue(comment.IsSolved());
```
