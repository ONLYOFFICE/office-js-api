# SetJc

Specifies the alignment of the current table with respect to the text margins in the current section.

## Syntax

expression.SetJc(sJcType);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJcType | Required | "left" &#124; "right" &#124; "center" |  | The alignment type used for the current table placement. |

## Returns

This method doesn't return any data.

## Example

This example specifies the alignment of the table with respect to the text margins in the current section.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The table is aligned at the center of the page horizontally:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
oTablePr.SetJc("center");
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 50);
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
