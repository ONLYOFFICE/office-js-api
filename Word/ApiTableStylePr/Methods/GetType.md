# GetType

Returns a type of the current table conditional style.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TableStyleOverrideType](../../Enumeration/TableStyleOverrideType.md)

## Example

This example shows how to get a type of the current table conditional style.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetStyle(tableStyle);
doc.Push(table);
let tableStylePrType = tableStylePr.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStylePrType);
```
