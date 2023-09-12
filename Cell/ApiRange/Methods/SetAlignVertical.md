# SetAlignVertical

Sets the vertical alignment of the text in the current cell range.

## Syntax

expression.SetAlignVertical(sAligment);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAligment | Required | [XlVertAlign](../../../Enumerations/XlVertAlign.md) | The vertical alignment that will be applied to the cell contents. |

## Returns

Boolean (return false if sAligment doesn't exist)

## Example

This example sets the vertical alignment of the text in the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:D5");
oWorksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
oRange.SetAlignVertical("distributed");
builder.SaveFile("xlsx", "SetAlignVertical.xlsx");
builder.CloseFile();
```