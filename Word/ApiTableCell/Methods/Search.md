# Search

Searches for a scope of a table cell object. The search results are a collection of ApiRange objects.

## Syntax

expression.Search(sText, isMatchCase);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

Array.<[ApiRange](../../ApiRange/ApiRange.md)>

## Example

This example shows how to make search in table cell.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1. This cell is in the first row.");
oDocument.Push(oTable);
var aSearch = oTable.GetCell(0, 0).Search("Cell");
aSearch[1].SetBold(true);
```
