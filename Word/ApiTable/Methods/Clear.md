# Clear

Clears the content from the table.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the content from the table.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
doc.Push(table);
table.Clear();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content of the table was cleared.");
doc.Push(paragraph);
```
