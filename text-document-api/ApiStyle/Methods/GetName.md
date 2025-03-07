# GetName

Returns a name of the current style.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a name of the current style.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tableStyleName = tableStyle.GetName();
let paragraph = doc.GetElement(0);
paragraph.AddText("Table style name = " + tableStyleName);
```
