# SetPosition

Specifies an amount by which text is raised or lowered for this run in relation to the default
baseline of the surrounding non-positioned text.

## Syntax

```javascript
expression.SetPosition(nPosition);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text) measurement in half-points (1/144 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text.

```javascript editor-docx
let doc = Api.GetDocument();
let myNewRunStyle1 = doc.CreateStyle("My New Run Style 1", "run");
let textPr1 = myNewRunStyle1.GetTextPr();
textPr1.SetPosition(10);
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle1);
run.AddText("This is a text run with the text raised 5 points (10 half-points). ");
paragraph.AddElement(run);
let myNewRunStyle2 = doc.CreateStyle("My New Run Style 2", "run");
let textPr2 = myNewRunStyle2.GetTextPr();
textPr2.SetPosition(-16);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle2);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);
```
