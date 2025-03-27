# GetClassType

Returns a type of the ApiTableStylePr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableStylePr"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableStylePr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
