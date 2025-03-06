# SetPosition

Specifies an amount by which text is raised or lowered for this run in relation to the default\nbaseline of the surrounding non-positioned text.

## Syntax

```javascript
expression.SetPosition(nPosition);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text)\nmeasurement in half-points (1/144 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
run.SetPosition(10);
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
run.SetPosition(-16);
paragraph.AddElement(run);
```
