# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.The null value will be returned for the inline forms.

## Syntax

expression.GetWrapperShape();

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(10 * 240, 2 * 240);
var oShape = oTextForm.GetWrapperShape();
var oStroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oShape.SetOutLine(oStroke);
```
