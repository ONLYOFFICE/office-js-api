# GetElement

Returns the hyperlink element using the position specified.

## Syntax

```javascript
expression.GetElement(nPos);
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the element which content we want to get must be located. |

## Returns

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## Example

This example shows how to get the hyperlink element using the position specified.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let element = hyperlink.GetElement(1);
paragraph = Api.CreateParagraph();
paragraph.AddElement(element);
doc.Push(paragraph);
```
