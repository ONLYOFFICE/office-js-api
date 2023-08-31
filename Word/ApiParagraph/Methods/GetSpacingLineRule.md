# GetSpacingLineRule

Returns the paragraph line spacing rule.<br>Inherited From: [ApiParaPr#GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)

## Syntax

expression.GetSpacingLineRule();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[LineRule](../../../Enumerations/LineRule.md)

## Example

This example shows how to get the paragraph line spacing rule.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var sSpacingLineRule = oParagraph.GetSpacingLineRule();
oParagraph.AddText("Spacing line rule: " + sSpacingLineRule);
builder.SaveFile("docx", "GetSpacingLineRule.docx");
builder.CloseFile();
```