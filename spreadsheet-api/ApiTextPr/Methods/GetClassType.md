# GetClassType

Returns a type of the ApiTextPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textPr"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
paragraph.SetJc("left");
let classType = textProps.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
```
