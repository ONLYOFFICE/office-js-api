# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it will be interpreted as false.

## Syntax

expression.SetSpacingAfter(nAfter, isAfterAuto?);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nAfter | Required | [twips](../../../Enumerations/twips.md) | The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isAfterAuto | Optional | Boolean | The true value disables the spacing after the current paragraph. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example sets the spacing after the current paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetSpacingAfter(1440);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a space after a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
oParagraph.SetStyle(oMyStyle);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSpacingAfter.docx");
builder.CloseFile();
```