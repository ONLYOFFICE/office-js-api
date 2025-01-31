# ScaleWidth

Scales the width of the figure using the specified coefficient.

## Syntax

```javascript
expression.ScaleWidth(coefficient);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| coefficient | Required | number |  | The coefficient by which the figure width will be scaled. |

## Returns

boolean

## Example

This example scales the width of the figure using the specified coefficient.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 1; i < 4; i++ ){
	let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	let stroke = Api.CreateStroke(0, Api.CreateNoFill());
	let drawing = Api.CreateShape("cube", 963295, 963295, fill, stroke);
	paragraph.AddDrawing(drawing);
	drawing.ScaleWidth( i );
}
```
