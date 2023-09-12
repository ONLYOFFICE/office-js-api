# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame. The null value will be returned for the inline forms.<br>Inherited From: [ApiFormBase#GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)

## Syntax

expression.GetWrapperShape();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md) &#124; null

## Example

This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oCheckBoxForm.ToFixed(1 * 240, 1 * 240);
var oShape = oCheckBoxForm.GetWrapperShape();
var oStroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oShape.SetOutLine(oStroke);
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.ToFixed(1 * 240, 1 * 240);
oShape = oCheckBoxForm.GetWrapperShape();
oStroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oShape.SetOutLine(oStroke);
builder.SaveFile("docx", "GetWrapperShape.docx");
builder.CloseFile();
```