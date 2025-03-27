# SetWrappingStyle

Sets the table wrapping style.

## Syntax

```javascript
expression.SetWrappingStyle(isFlow);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isFlow | Required | boolean |  | Specifies if the table is inline or not. |

## Returns

boolean

## Example

This example sets the table wrapping style.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
doc.Push(table1);
table1.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 1");
let table2 = Api.CreateTable(3, 3);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
doc.Push(table2);
table2.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 2");
paragraph.AddLineBreak();
paragraph.AddText("The tables were added to the paragraph. Table 1 is inline and Table 2 is not.");
table1.SetWrappingStyle(true);
table2.SetWrappingStyle(false);
```
