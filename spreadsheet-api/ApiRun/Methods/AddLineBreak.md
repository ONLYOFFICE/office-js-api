# AddLineBreak

Adds a line break to the current run position and starts the next element from a new line.

## Syntax

```javascript
expression.AddLineBreak();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example adds a line break to the run position and starts the next element from a new line.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first line. Nothing special.");
run.AddLineBreak();
run.AddText("This is the text which starts from the beginning of the second line. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
