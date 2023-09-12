# GetParentTable

Returns a parent table that contains the graphic object.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) &#124; null (returns null if parent table doesn't exist)

## Example

This example shows how to get a parent table that contains the graphic object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oCell = oTable.GetCell(1, 1);
oCell.AddElement(0, oParagraph);
oDocument.Push(oTable);
var oParentTable = oDrawing.GetParentTable();
var oTableStyle = oDocument.GetStyle("Bordered");
oParentTable.SetStyle(oTableStyle);
builder.SaveFile("docx", "GetParentTable.docx");
builder.CloseFile();
```