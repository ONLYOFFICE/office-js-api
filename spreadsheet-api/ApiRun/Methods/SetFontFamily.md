# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | string |  | The font family or families used for the current text run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets all 4 font slots with the specified font family.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetFontFamily("Comic Sans MS");
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font family set to 'Comic Sans MS' using the text properties.");
paragraph.AddElement(run);
```
