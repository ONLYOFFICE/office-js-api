# Search

Searches for a scope of a table row object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange[]](../../ApiRange/ApiRange.md)

## Example

This example shows how to make search in table cell.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("text");
row.GetCell(1).GetContent().GetElement(0).AddText("text");
row.GetCell(2).GetContent().GetElement(0).AddText("text");
doc.Push(table);
let rowSearch = row.Search("tex", true);
rowSearch[1].SetBold("true");
```
