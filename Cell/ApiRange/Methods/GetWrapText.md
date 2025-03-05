# GetWrapText

Returns the information about the wrapping cell style.

## Syntax

```javascript
expression.GetWrapText();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to get the information about the wrapping cell style.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());
```
