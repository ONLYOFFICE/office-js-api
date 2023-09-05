# GetAllCaptionParagraphs

Returns all caption paragraphs of the specified type from the current document.

## Syntax

expression.GetAllCaptionParagraphs(sCaption);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sCaption | Required | [CaptionLabel](../../../Enumerations/CaptionLabel.md) &#124; string | The caption label ("Equation", "Figure", "Table", or another caption label). |

## Returns

Array<[ApiParagraph](../../ApiParagraph/ApiParagraph.md)>

## Example

This example shows how to get all caption paragraphs of the specified type from the current document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
var aCaptionParagraphs = oDocument.GetAllCaptionParagraphs("Figure");
aCaptionParagraphs[0].SetCaps(true);
builder.SaveFile("docx", "GetAllCaptionParagraphs.docx");
builder.CloseFile();
```