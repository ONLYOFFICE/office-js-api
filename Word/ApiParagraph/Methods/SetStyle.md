# SetStyle

The paragraph style base method.
💡 This method is not used by itself, as it only forms the basis for the &#123;@link ApiParagraph#SetStyle&#125; method which sets the selected or created style for the paragraph.

## Syntax

```javascript
expression.SetStyle(oStyle);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The style of the paragraph to be set. |

## Returns

boolean

## Example

This example sets a style for the paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paraPr = heading6Style.GetParaPr();
paraPr.SetJc("center");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
