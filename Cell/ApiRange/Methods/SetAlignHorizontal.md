# SetAlignHorizontal

Sets the horizontal alignment of the text in the current cell range.

## Syntax

expression.SetAlignHorizontal(sAlignment);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAlignment | Required | [XlHorAlign](../../../Enumerations/XlHorAlign) | The horizontal alignment that will be applied to the cell contents. |

## Returns

Boolean (return false if sAligment doesn't exist)

## Example

This example sets the horizontal alignment of the text in the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");
builder.SaveFile("xlsx", "SetAlignHorizontal.xlsx");
builder.CloseFile();
```