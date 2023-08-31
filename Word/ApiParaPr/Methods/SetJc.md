# SetJc

Sets the paragraph contents justification.

## Syntax

expression.SetJc(sJc);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sJc | Required | [ContentJustification](../../../Enumerations/ContentJustification.md) | The justification type that will be applied to the paragraph contents. |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph contents justification.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyleLeft = oDocument.CreateStyle("My style with left text alignment");
var oParaPr = oMyStyleLeft.GetParaPr();
oParaPr.SetJc("left");
var oMyStyleRight = oDocument.CreateStyle("My style with right text alignment");
oParaPr = oMyStyleRight.GetParaPr();
oParaPr.SetJc("right");
var oMyStyleCenter = oDocument.CreateStyle("My style with center text alignment");
oParaPr = oMyStyleCenter.GetParaPr();
oParaPr.SetJc("center");
var oMyStyleBoth = oDocument.CreateStyle("My style with justify text alignment");
oParaPr = oMyStyleBoth.GetParaPr();
oParaPr.SetJc("both");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the text in it aligned by the left side. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetStyle(oMyStyleLeft);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with the text in it aligned by the right side. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetStyle(oMyStyleRight);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetStyle(oMyStyleCenter);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with the text in it aligned by both sides (justified). ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetStyle(oMyStyleBoth);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetJc.docx");
builder.CloseFile();
```