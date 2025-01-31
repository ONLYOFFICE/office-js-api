# GetTableDescription

Returns the table description.

## Syntax

```javascript
expression.GetTableDescription();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the table description.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + tablePr.GetTableDescription());
doc.Push(table);
```
