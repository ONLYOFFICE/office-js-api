# GetTableTitle

Returns the table title (caption).

## Syntax

```javascript
expression.GetTableTitle();
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the table title.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableTitle("Table 1");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table title: " + tablePr.GetTableTitle());
doc.Push(table);
```
