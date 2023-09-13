# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

expression.InsertParagraph(paragraph, sPosition, beRNewPara);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | String | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) | Text or paragraph. |
| sPosition | Required | String | The position where the text or paragraph will be inserted ("before" or "after" the drawing specified). |
| beRNewPara | Required | Boolean | Defines if this method returns a new paragraph (true) or the current ApiDrawing (false). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) &#124; [ApiDrawing](../ApiDrawing.md) &#124; null (returns null if parent paragraph doesn't exist)

## Example

This example inserts a paragraph at the specified position.

```javascript
builder.CreateFile("docx");
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
builder.SaveFile("docx", "InsertParagraph.docx");
builder.CloseFile();
```