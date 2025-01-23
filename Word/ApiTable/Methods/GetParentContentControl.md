# GetParentContentControl

Returns a content control that contains the current table.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | null

## Example

This example shows how to get a content control that contains the table.

```javascript
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 0);
doc.AddElement(0, blockLvlSdt);
let parentContentControl = table.GetParentContentControl();
parentContentControl.SetAlias("№1");
```
