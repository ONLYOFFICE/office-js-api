# SetCellBorderLeft

Sets the border which shall be displayed at the left of the current table cell.

## Syntax

expression.SetCellBorderLeft(fSize, oApiFill);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| fSize | Required | [mm](../../../Enumerations/mm.md) | The width of the current border. |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the current border. |

## Returns

This method doesn't return any data.

## Example

This example sets the border which shall be displayed at the left of the table cell.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oCell.SetCellBorderLeft(2, oFill);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "SetCellBorderLeft.pptx");
builder.CloseFile();
```