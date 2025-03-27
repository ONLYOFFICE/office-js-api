# SetVerticalAlign

Specifies the vertical alignment for text within the current table cell.

## Syntax

```javascript
expression.SetVerticalAlign(sType);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "top" \| "center" \| "bottom" |  | The type of the vertical alignment. |

## Returns

This method doesn't return any data.

## Example

This example specifies the vertical alignment for text within the current table cell.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(1);
oRow.SetHeight(30 * 36000);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetVerticalAlign("bottom");
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
