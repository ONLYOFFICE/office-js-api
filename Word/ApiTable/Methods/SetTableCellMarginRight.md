# SetTableCellMarginRight

Specifies an amount of space which will be left between the right extent of the cell contents and the right border of all table cells within the parent table (or table row).<br>Inherited From: [ApiTablePr#SetTableCellMarginRight](../../ApiTablePr/Methods/SetTableCellMarginRight.md)

## Syntax

expression.SetTableCellMarginRight(nValue);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../../Enumerations/twips.md)  | The value for the amount of space to the right extent of the cell measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which will be left between the right extent of the cell contents and the right border of all table cells within the parent table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the right cell margin is 36 points.");
oTable.SetTableCellMarginRight(720);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableCellMarginRight.docx");
builder.CloseFile();
```