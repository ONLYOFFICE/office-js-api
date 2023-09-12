# SetTableLayout

Specifies the algorithm which will be used to lay out the contents of the current table within the document.<br>Inherited From: [ApiTablePr#SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md)

## Syntax

expression.SetTableLayout(sType);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableLayoutType](../../../Enumerations/TableLayoutType.md) | The type of the table layout in the document. |

## Returns

This method doesn't return any data.

## Example

This example specifies the algorithm which will be used to lay out the contents of the table within the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the table cells to preserve their size:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetTableLayout("fixed");
var oCell = oTable.GetRow(0).GetCell(0);
oCell.GetContent().GetElement(0).AddText("Fixed layout");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableLayout.docx");
builder.CloseFile();
```