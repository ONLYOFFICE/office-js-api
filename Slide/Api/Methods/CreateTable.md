# CreateTable

Creates a table.

## Syntax

expression.CreateTable(nCols, nRows);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCols | Required |  |  | Number of columns. |
| nRows | Required |  |  | Number of rows. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

This example creates a 2x4 table and inserts it into the presentation.

```javascript
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
