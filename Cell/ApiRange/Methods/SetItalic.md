# SetItalic

Sets the italic property to the text characters in the current cell or cell range.

## Syntax

expression.SetItalic(isItalic);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | Boolean | Specifies that the contents of the current cell / cell range are displayed italicized. |

## Returns

This method doesn't return any data.

## Example

This example sets the italic property to the text characters in the cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Italicized text");
oWorksheet.GetRange("A2").SetItalic(true);
oWorksheet.GetRange("A3").SetValue("Normal text");
builder.SaveFile("xlsx", "SetItalic.xlsx");
builder.CloseFile();
```