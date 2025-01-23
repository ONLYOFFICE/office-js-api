# AddBreak

Inserts a break at the specified location in the main document.

## Syntax

expression.AddBreak(breakType, position);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| breakType | Required | number |  | The break type: page break (0) or line break (1). |
| position | Required | string |  | The position where the page or line break will be inserted ("before" or "after" the current drawing). |

## Returns

boolean

## Example

This example inserts a break at the specified location in the main document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertParagraph("Added a line break after this paragraph.", "before", false);
drawing.AddBreak(1, "before");
```
