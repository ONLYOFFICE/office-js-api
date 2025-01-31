# AddDrawingToPage

Adds a shape to the specified page.
💡 This method can be a little bit slow, because it runs the document calculation
process to arrange tables on the specified page.

## Syntax

```javascript
expression.AddDrawingToPage(oDrawing, nPage, x, y);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | A shape to add to the page. |
| nPage | Required | number |  | The page number. |
| x | Required | [EMU](../../Enumeration/EMU.md) |  | The X coordinate in English measure units. |
| y | Required | [EMU](../../Enumeration/EMU.md) |  | The Y coordinate in English measure units. |

## Returns

boolean

## Example

This example shows how to get a collection of tables on a given absolute page.

```javascript
let doc = Api.GetDocument();
let drawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
let paragraph = Api.CreateParagraph();
paragraph.AddPageBreak();
doc.Push(paragraph);
doc.AddDrawingToPage(drawing, 1, 50 * 36000, 50 * 36000);
```
