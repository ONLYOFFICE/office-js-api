# AddDrawingToPage

Adds a shape to the specified page.💡 This method can be a little bit slow, because it runs the document calculationprocess to arrange tables on the specified page.

## Syntax

expression.AddDrawingToPage(oDrawing, nPage, x, y);

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
var oDocument = Api.GetDocument();
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
var oParagraph = Api.CreateParagraph();
oParagraph.AddPageBreak();
oDocument.Push(oParagraph);
oDocument.AddDrawingToPage(oDrawing, 1, 50 * 36000, 50 * 36000);
```
