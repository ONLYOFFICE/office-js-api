# SetTableLayout

Specifies the algorithm which will be used to lay out the contents of the current table within the document.

## Syntax

expression.SetTableLayout(sType);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "autofit" &#124; "fixed" |  | The type of the table layout in the document. |

## Returns

This method doesn't return any data.

## Example

This example specifies the algorithm which will be used to lay out the contents of the table within the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the table cells to preserve their size:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTablePr.SetTableLayout("fixed");
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.GetContent().GetElement(0).AddText("Fixed layout");
oDocument.Push(oTable);
```
