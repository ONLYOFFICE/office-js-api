# ToJSON

Converts the ApiFill object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiFill object into the JSON object.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let json = fill.ToJSON();
let fillFromJSON = Api.FromJSON(json);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fillFromJSON, stroke);
paragraph.AddDrawing(drawing);
```
