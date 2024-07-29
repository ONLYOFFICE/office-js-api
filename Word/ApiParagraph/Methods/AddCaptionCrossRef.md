# AddCaptionCrossRef

Adds a caption cross-reference to the current paragraph.💡 Please note that this paragraph must be in the document.

## Syntax

expression.AddCaptionCrossRef(sCaption, sRefType, oParaTo, bLink, bAboveBelow);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCaption | Required | [CaptionLabel](../../Enumeration/CaptionLabel.md) &#124;string |  | The caption label ("Equation", "Figure", "Table", or another caption label). |
| sRefType | Required | [captionRefTo](../../Enumeration/captionRefTo.md) |  | The text or numeric value of a caption reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The caption paragraph to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (used only with the "pageNum" sRefType). |

## Returns

boolean

## Example

This example adds a caption cross-reference to the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
oParagraph = Api.CreateParagraph();
oDocument.Push(oParagraph);
oParagraph.AddText('Link to ');
var aCaptionParagraphs = oDocument.GetAllCaptionParagraphs("Figure");
oParagraph.AddCaptionCrossRef("Figure", "entireCaption", aCaptionParagraphs[0], true, false);
```
