# SetTableCellMarginBottom

Specifies an amount of space which will be left between the bottom extent of the cell contents and the border of all table cells within the parent table (or table row).<br>Inherited From: [ApiTablePr#SetTableCellMarginBottom](../../ApiTablePr/Methods/SetTableCellMarginBottom.md)

## Syntax

expression.SetTableCellMarginBottom(nValue);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../../Enumerations/twips.md)  | The value for the amount of space below the bottom extent of the cell measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example sSpecifies an amount of space which will be left between the bottom extent of the cell contents and the border of all table cells within the parent.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom cell margin is 36 points.");
oTable.SetTableCellMarginBottom(720);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableCellMarginBottom.docx");
builder.CloseFile();
```