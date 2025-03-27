# ToJSON

Converts the ApiSchemeColor object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiSchemeColor](../ApiSchemeColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiSchemeColor object into the JSON object.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let json = schemeColor.ToJSON();
let schemeColorFromJSON = Api.FromJSON(json);
let fill = Api.CreateSolidFill(schemeColorFromJSON);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);
```
