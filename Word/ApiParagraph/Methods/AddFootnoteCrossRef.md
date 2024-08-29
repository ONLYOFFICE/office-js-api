# AddFootnoteCrossRef

Adds a footnote cross-reference to the current paragraph.
💡 Please note that this paragraph must be in the document.

## Syntax

expression.AddFootnoteCrossRef(sRefType, oParaTo, bLink, bAboveBelow);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [footnoteRefTo](../../Enumeration/footnoteRefTo.md) |  | The text or numeric value of a footnote reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The first paragraph from a footnote to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "aboveBelow" sRefType). |

## Returns

boolean

## Example

This example adds a footnote cross-reference to the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText("This is just a sample text.");
oDocument.AddFootnote();
var aFootnotesFirstParagraphs = oDocument.GetFootnotesFirstParagraphs();
aFootnotesFirstParagraphs[0].AddText("Footnote 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("For more information on previous sentences see footnote ");
oDocument.Push(oParagraph);
oParagraph.AddFootnoteCrossRef("formFootnoteNum", aFootnotesFirstParagraphs[0]);
```
