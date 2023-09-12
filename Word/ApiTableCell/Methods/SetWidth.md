# SetWidth

Sets the preferred width to the current table cell.<br>Inherited From: [ApiTableCellPr#SetWidth](../../ApiTableCellPr/Methods/SetWidth.md)

## Syntax

expression.SetWidth(sType, nValue?);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../../Enumerations/TableWidth.md) | Type of the width value from one of the available width values types. |
| nValue | Optional | Number | The table cell width value measured in positive integers. Default value is "null". |

## Returns

This method doesn't return any data.

## Example

This example sets the preferred width to the current table cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.SetWidth("twips", 2880);
var oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("2 inches");
oCell = oTable.GetRow(0).GetCell(1);
oCell.SetWidth("twips", 1440);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("1 inch");
oCell = oTable.GetRow(0).GetCell(2);
oCell.SetWidth("twips", 4320);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("3 inches");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetWidth.docx");
builder.CloseFile();
```