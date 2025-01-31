# SetTableCellMarginBottom

Specifies an amount of space which will be left between the bottom extent of the cell contents and the border
of all table cells within the parent table (or table row).

## Syntax

```javascript
expression.SetTableCellMarginBottom(nValue);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The value for the amount of space below the bottom extent of the cell measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which will be left between the bottom extent of the cell contents and the border of all table cells within the parent.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginBottom(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom cell margin is 36 points.");
doc.Push(table);
```
