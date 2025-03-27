# GetComment

Returns the ApiComment object of the current range.

## Syntax

```javascript
expression.GetComment();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md) \| null

## Example

This example shows how to get the ApiComment object of the range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: " + range.GetComment().GetText());
```
