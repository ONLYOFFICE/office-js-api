# GetClassType

Returns a type of the ApiUniColor class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiUniColor](../ApiUniColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"uniColor"

## Example

This example gets a class type and pastes it into the presentation.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let presetColor = Api.CreatePresetColor("peachPuff");
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = presetColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
