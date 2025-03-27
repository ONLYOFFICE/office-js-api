# GetClassType

Returns the type of the ApiTableCell class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableCell"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
var sClassType = oCell.GetClassType();
oParagraph.AddText("Class type: " + sClassType);
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
