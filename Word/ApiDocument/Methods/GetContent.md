# GetContent

Returns an array of document elements from the current ApiDocumentContent object.

## Syntax

```javascript
expression.GetContent(bGetCopies);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bGetCopies | Required | boolean |  | Specifies if the copies of the document elements will be returned or not. |

## Returns

Array

## Example

This example shows how to get an array of document elements from the document content.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("This paragraph is the first document element.");
docContent.AddElement(0, paragraph);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
docContent.AddElement(1, table);
paragraph = Api.CreateParagraph();
paragraph.AddText("This table is the second document element.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This block text content control is the third document element.");
docContent.AddElement(2, blockLvlSdt);
let docElements = docContent.GetContent(false);
docElements[0].SetBold(true);
docElements[1].SetBackgroundColor(235, 235, 235, false);
docElements[2].Search("block text content control")[0].SetBold(true);
```
