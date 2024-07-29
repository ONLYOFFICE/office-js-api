# SetCellSpacing

Specifies the default table cell spacing (the spacing between adjacent cells and the edges of the table).

## Syntax

expression.SetCellSpacing(nValue);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | Spacing value measured in twentieths of a point (1/1440 of an inch). <code>"Null"</code> means that no spacing will be applied. |

## Returns

This method doesn't return any data.

## Example

This example specifies the default table cell spacing.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the cell spacing to half an inch:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oTablePr.SetCellSpacing(720);
oDocument.Push(oTable);
```
