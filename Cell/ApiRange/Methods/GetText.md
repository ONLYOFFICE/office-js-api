# GetText

Returns the text of the specified range.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| string[][]

## Example

This example shows how to get the text of the specified range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("text1");
worksheet.GetRange("B1").SetValue("text2");
worksheet.GetRange("C1").SetValue("text3");
let range = worksheet.GetRange("A1:C1");
let text = range.GetText();
worksheet.GetRange("A3").SetValue("Text from the cell A1: " + text);
```
