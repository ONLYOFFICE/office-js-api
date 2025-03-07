# ReplaceByElement

Replaces the current table with a new element.

## Syntax

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The element to replace the current table with. |

## Returns

boolean

## Example

This example replaces the current table with a paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.AddElement(0, table);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
table.SetStyle(tableStyle);
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was replaced with the current paragraph.");
table.ReplaceByElement(paragraph);
```
