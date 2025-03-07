# GetRow

Returns a row by its index.

## Syntax

```javascript
expression.GetRow(nIndex);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The row index (position) in the table. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

This example shows how to get a row by its index.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.AddRow(1, true);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text in the first row.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
