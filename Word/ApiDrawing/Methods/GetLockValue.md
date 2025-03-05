# GetLockValue

Returns the lock value for the specified lock type of the current drawing.

## Syntax

```javascript
expression.GetLockValue(sType);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | Lock type in the string format. |

## Returns

boolean

## Example

This example shows how to get the lock value for the specified lock type of the drawing.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
drawing.SetLockValue("noSelect", true);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let lockValue = drawing.GetLockValue("noSelect");
paragraph = Api.CreateParagraph();
paragraph.AddText("This drawing cannot be selected: " + lockValue);
docContent.AddElement(0, paragraph);
```
