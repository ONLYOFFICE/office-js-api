# AddHeadingCrossRef

Adds a heading cross-reference to the current paragraph.💡 Please note that this paragraph must be in the document.

## Syntax

expression.AddHeadingCrossRef(sRefType, oParaTo, bLink, bAboveBelow);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | headingRefTo |  | The text or numeric value of a heading reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The heading paragraph to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). |

## Returns

boolean

## Example

This example adds a heading cross-reference to the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Cross-reference method");
var aHeadingParagraphs = oDocument.GetAllHeadingParagraphs();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Heading 1 style is applied to the heading ");
oDocument.Push(oParagraph);
oParagraph.AddHeadingCrossRef("text", aHeadingParagraphs[0]);
```
