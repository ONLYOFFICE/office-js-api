# ToJSON

Converts the ApiTableCellPr object into the JSON object.<br>Inherited From: [ApiTableCellPr#ToJSON](../../ApiTableCellPr/Methods/ToJSON.md)

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiTableCellPr object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderRight("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderInsideV("single", 32, 0, 255, 111, 61);
oTable.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
oTable.SetWidth("percent", 100);
var oCell = oTable.GetCell(0,0);
var json = oCell.ToJSON();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The ApiTableCell object in the JSON format: ").SetBold(true);
oParagraph.AddLineBreak();
oParagraph.AddText(json);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```