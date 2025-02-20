# SetShd

Specifies the shading which shall be applied to the extents of the current table cell.

## Syntax

```javascript
expression.SetShd(sType, r, g, b);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) \| [ApiFill](../../ApiFill/ApiFill.md) |  | The shading type applied to the contents of the current table. Can be ShdType or ApiFill. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the shading which shall be applied to the extents of the current table cell.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oCell.SetShd(oFill);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
