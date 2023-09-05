# SetFontSize

Sets the font size to the characters of the current cell range.

## Syntax

expression.SetFontSize(nSize);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSize | Required | [pt](../../../Enumerations/pt.md) | The font size value measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the font size to the characters of the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetFontSize(20);
builder.SaveFile("xlsx", "SetFontSize.xlsx");
builder.CloseFile();
```