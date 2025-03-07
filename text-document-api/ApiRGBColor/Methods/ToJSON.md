# ToJSON

Converts the ApiRGBColor object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiRGBColor](../ApiRGBColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiRGBColor object into the JSON object.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let json = rgbColor.ToJSON();
let rgbColorFromJSON = Api.FromJSON(json);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(rgbColor, 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
```
