# GetFontNames

Returns all font names from all elements inside the current run.

## Syntax

```javascript
expression.GetFontNames();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

This example shows how to get all font names from all elements inside the run.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
paragraph.AddLineBreak();
let fontNames = run.GetFontNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("Run font names: ");
paragraph.AddLineBreak();
for (let i = 0; i < fontNames.length; i++) {
    paragraph.AddText(fontNames[i]);
    paragraph.AddLineBreak();
}
content.Push(paragraph);
```
