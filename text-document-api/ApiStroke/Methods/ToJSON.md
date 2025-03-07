# ToJSON

Converts the ApiStroke object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiStroke object into the JSON object.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
let json = stroke.ToJSON();
let strokeFromJSON = Api.FromJSON(json);
let drawing = Api.CreateShape("roundRect", 5930900, 395605, fill, strokeFromJSON);
paragraph.AddDrawing(drawing);
```
