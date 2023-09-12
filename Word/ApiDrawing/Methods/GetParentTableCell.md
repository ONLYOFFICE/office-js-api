# GetParentTableCell

Returns a parent table cell that contains the graphic object.

## Syntax

expression.GetParentTableCell();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) &#124; null (returns null if parent cell doesn't exist)

## Example

This example showh how to get a parent table cell that contains the graphic object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oTable = Api.CreateTable(3, 3);
var oTableStyle = oDocument.GetStyle("Bordered");
oTable.SetStyle(oTableStyle);
oTable.SetWidth("percent", 100);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
var oCell = oTable.GetCell(1, 1);
oCell.GetContent().GetElement(0).AddDrawing(oDrawing);
oDocument.Push(oTable);
var oParentCell = oDrawing.GetParentTableCell();
var oCellContent = oParentCell.GetContent().GetElement(0);
oCellContent.AddLineBreak();
oCellContent.AddText("This is a parent cell");
builder.SaveFile("docx", "GetParentTableCell.docx");
builder.CloseFile();
```