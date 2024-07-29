# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

expression.InsertParagraph(paragraph, sPosition, beRNewPara);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | string &#124;[ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | Text or paragraph. |
| sPosition | Required | string |  | The position where the text or paragraph will be inserted ("before" or "after" the drawing specified). |
| beRNewPara | Required | boolean |  | Defines if this method returns a new paragraph (true) or the current ApiDrawing (false). |

## Returns

ApiParagraph, ApiDrawing

## Example

This example inserts a paragraph at the specified position.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This graphic object with paragraph.");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph.");
oDrawing.InsertParagraph(oParagraph);
```
