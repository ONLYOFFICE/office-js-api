# Copy

Creates a copy of the current table.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

This example creates a copy of the table.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.AddRow(1, true);
var oRow = oTable.GetRow(1);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("New row was added here.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
var oCopyTable = oTable.Copy();
var newSlide = Api.CreateSlide();
oPresentation.AddSlide(newSlide);
newSlide.AddObject(oCopyTable);
```
