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

string | string[][]

## Example

This example shows how to get the text of the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("text1");
oWorksheet.GetRange("B1").SetValue("text2");
oWorksheet.GetRange("C1").SetValue("text3");
var oRange = oWorksheet.GetRange("A1:C1");
var sText = oRange.GetText();
oWorksheet.GetRange("A3").SetValue("Text from the cell A1: " + sText);
```
