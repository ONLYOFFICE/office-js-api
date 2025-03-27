# GetText

Returns the comment text.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the comment text.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetText());
```
