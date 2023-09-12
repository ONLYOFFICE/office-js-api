# SetHeight

Sets the height to the current table row.

## Syntax

expression.SetHeight(nValue);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [EMU](../../../Enumerations/Emu.md) | The row height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the height to the table row.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
oRow.SetHeight(30 * 36000);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "SetHeight.pptx");
builder.CloseFile();
```