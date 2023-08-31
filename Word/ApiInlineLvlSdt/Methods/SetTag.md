# SetTag

Adds a string tag to the current inline text content control.

## Syntax

expression.SetTag(sTag);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTag | Required | String | The tag which will be added to the current inline text content control. |

## Returns

This method doesn't return any data.

## Example

This example sets a string tag to the inline text content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a tag set to it.");
oInlineLvlSdt.SetTag("This is a tag");
oInlineLvlSdt.AddElement(oRun, 0);
var sTag = oInlineLvlSdt.GetTag();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tag: " + sTag);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTag.docx");
builder.CloseFile();
```