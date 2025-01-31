# AddHyperlink

Adds a hyperlink to a paragraph.

## Syntax

```javascript
expression.AddHyperlink(sLink, sScreenTipText);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) | null

## Example

This example adds a hyperlink to a paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");
```
