# SetStyle

The text style base method.
This method is not used by itself, as it only forms the basis for the [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) method which sets the selected or created style to the text.

## Syntax

expression.SetStyle(oStyle);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../../Word/ApiStyle/ApiStyle.md) | The style which must be applied to the text run. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets a style to run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyNewRunStyle = oDocument.CreateStyle("My New Run Style", "run");
var oTextPr = oMyNewRunStyle.GetTextPr();
oTextPr.SetCaps(true);
oTextPr.SetFontFamily("Calibri Light");
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetStyle(oMyNewRunStyle);
oRun.AddText("This is a text run with its own style.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();
```