# SetType

Specifies a type of the current section. The section type defines how the contents of the current 
section are placed relative to the previous section.<br/>
WordprocessingML supports five distinct types of section breaks:
  * **Next page** section breaks (the default if type is not specified), which begin the new section on the
  following page.
  * **Odd** page section breaks, which begin the new section on the next odd-numbered page.
  * **Even** page section breaks, which begin the new section on the next even-numbered page.
  * **Continuous** section breaks, which begin the new section on the following paragraph. This means that
  continuous section breaks might not specify certain page-level section properties, since they shall be
  inherited from the following section. These breaks, however, can specify other section properties, such
  as line numbering and footnote/endnote settings.
  * **Column** section breaks, which begin the new section on the next column on the page.

## Syntax

expression.SetType(sType);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "nextPage" &#124; "oddPage" &#124; "evenPage" &#124; "continuous" &#124; "nextColumn" |  | The section break type. |

## Returns

This method doesn't return any data.

## Example

This example sets section break type "continuous".

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.CreateSection(oParagraph);
oParagraph.AddText("This is section #1 of the document. ");
oSection = oDocument.GetFinalSection();
oSection.SetType("continuous");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is section #2 and we set 'Continuous' type to it. ");
oParagraph.AddText("As you can see, the section is not on a new page. ");
oParagraph.AddText("If this section had some other type (nextPage, oddPage, evenPage), it would start a new page.");
oDocument.Push(oParagraph);
```
