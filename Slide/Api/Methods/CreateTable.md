# CreateTable

Creates a new table with a specified number of rows and columns.

## Syntax

expression.CreateTable(nCols, nCols);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCols | Required | Number | Number of columns. |
| nCols | Required | Number | Number of rows. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) &#124; null

## Example

This example creates a 2x4 table and inserts it into the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "CreateTable.pptx");
builder.CloseFile();
```