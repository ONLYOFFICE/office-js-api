# AddCaptionCrossRef

Adds a caption cross-reference to the current paragraph.
💡 Please note that this paragraph must be in the document.

## Syntax

```javascript
expression.AddCaptionCrossRef(sCaption, sRefType, oParaTo, bLink, bAboveBelow);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCaption | Required | [CaptionLabel](../../Enumeration/CaptionLabel.md) | string |  | The caption label ("Equation", "Figure", "Table", or another caption label). |
| sRefType | Required | [captionRefTo](../../Enumeration/captionRefTo.md) |  | The text or numeric value of a caption reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The caption paragraph to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (used only with the "pageNum" sRefType). |

## Returns

boolean

## Example

This example adds a caption cross-reference to the paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText('Link to ');
let captionParagraphs = doc.GetAllCaptionParagraphs("Figure");
paragraph.AddCaptionCrossRef("Figure", "entireCaption", captionParagraphs[0], true, false);
```
