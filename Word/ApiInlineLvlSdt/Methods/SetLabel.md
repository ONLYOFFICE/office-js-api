# SetLabel

Adds a string label to the current inline text content control.

## Syntax

expression.SetLabel(sLabel);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLabel | Required | String | The label which will be added to the current inline text content control. Can be a positive or negative integer from -2147483647 to 2147483647. |

## Returns

This method doesn't return any data.

## Example

This example sets a string label to the inline text content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a label set to it.");
oInlineLvlSdt.SetLabel("2147483647");
oInlineLvlSdt.AddElement(oRun, 0);
var sLabel = oInlineLvlSdt.GetLabel();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Label: " + sLabel);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetLabel.docx");
builder.CloseFile();
```