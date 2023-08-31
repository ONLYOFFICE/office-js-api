# GetConditionalTableStyle

Returns a set of formatting properties which will be conditionally applied to the parts of a table that match the requirement specified in the sType parameter.

## Syntax

expression.GetConditionalTableStyle(sType?);

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [TableStyleOverrideType](../../../Enumerations//TableStyleOverrideType.md) | The table part which the formatting properties must be applied to. Default value is "wholeTable". |

## Returns

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## Example

This example shows how to get a set of formatting properties which will be conditionally applied to the parts of a table that match the requirement specified in the sType parameter.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oDocument.Push(oTable);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTableStyle.GetTablePr().SetTableBorderTop("single", 4, 0, 51, 51, 51);
oTableStyle.GetTablePr().SetTableBorderBottom("single", 4, 0, 51, 51, 51);
oTableStyle.GetTablePr().SetTableBorderLeft("single", 4, 0, 51, 51, 51);
oTableStyle.GetTablePr().SetTableBorderRight("single", 4, 0, 51, 51, 51);
oTableStyle.GetTablePr().SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
oTableStyle.GetTablePr().SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
oTableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetItalic(true);
var oCellContent = oTable.GetRow(0).GetCell(0).GetContent();
var oParagraph = oCellContent.GetElement(0);
oParagraph.AddText("This cell font is set to italic");
oCellContent = oTable.GetRow(1).GetCell(0).GetContent();
oParagraph = oCellContent.GetElement(0);
oParagraph.AddText("This cell font is also set to italic");
oCellContent = oTable.GetRow(0).GetCell(1).GetContent();
oParagraph = oCellContent.GetElement(0);
oParagraph.AddText("This cell font remains default");
oCellContent = oTable.GetRow(1).GetCell(1).GetContent();
oParagraph = oCellContent.GetElement(0);
oParagraph.AddText("This cell font also remains default");
builder.SaveFile("docx", "GetConditionalTableStyle.docx");
builder.CloseFile();
```