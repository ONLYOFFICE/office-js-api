# SetContextualSpacing

Specifies that any space before or after this paragraph set using the [ApiParaPr#SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md) spacing element, should not be applied when the preceding and following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.<br>Inherited From: [ApiParaPr#SetContextualSpacing](../../ApiParaPr/Methods/SetContextualSpacing.md)

## Syntax

expression.SetContextualSpacing(isContextualSpacing);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isContextualSpacing | Required | Boolean | The true value will enable the paragraph contextual spacing. |

## Returns

This method doesn't return any data.

## Example

This example specifies that any space before or after the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
oParagraph.SetContextualSpacing(false);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
oParagraph.SetContextualSpacing(false);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
oParagraph.SetContextualSpacing(false);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetContextualSpacing.docx");
builder.CloseFile();
```