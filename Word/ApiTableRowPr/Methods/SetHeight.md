# SetHeight

Sets the height to the current table row within the current table.

## Syntax

expression.SetHeight(sHRule, nValue);

`expression` - A variable that represents a [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | Required | "auto" &#124;"atLeast" |  | The rule to apply the height value to the current table row or ignore it. Use the <code>"atLeast"</code> value to enable the <code>SetHeight</code> method use. |
| nValue | Optional | twips |  | The height for the current table row measured in twentieths of a point (1/1440 of an inch). This value will be ignored if <code>sHRule="auto"<code>. |

## Returns

This method doesn't return any data.

## Example

This example sets the height to the current table row within the table.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableLook(true, true, true, true, false, false);
var oTableRowPr = oTableStyle.GetTableRowPr();
oTableRowPr.SetHeight("atLeast", 720);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
