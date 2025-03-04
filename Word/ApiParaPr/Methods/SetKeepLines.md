# SetKeepLines

Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible.

## Syntax

```javascript
expression.SetKeepLines(isKeepLines);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isKeepLines | Required | boolean |  | The true value enables the option to keep lines of the paragraph on a single page. |

## Returns

boolean

## Example

This example specifies that when rendering the document using a page view, all lines of the paragraph are maintained on a single page whenever possible.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepLines(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
paragraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
