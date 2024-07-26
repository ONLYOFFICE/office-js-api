# SetShd

Specifies the shading which shall be applied to the extents of the current table.

## Syntax

expression.SetShd(sType, r, g, b);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | ShdType &#124;[ApiFill](../../ApiFill/ApiFill.md) |  | The shading type applied to the contents of the current table. Can be ShdType or ApiFill. |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the shading which shall be applied to the extents of the table.

```javascript
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetShd("clear", 255, 111, 61);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
