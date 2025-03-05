# ApiParagraph

Represents the ApiParagraph class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "paragraph" | Returns a type of the ApiParagraph class. |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds some text to the current paragraph. |
| [AddLineBreak](./Methods/AddLineBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a line break to the current position and starts the next element from a new line. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current paragraph. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns a paragraph element using the position specified. |
| [RemoveElement](./Methods/RemoveElement.md) | None | Removes an element using the position specified. 💡 If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph), a new empty run is automatically created. If you want to add content to this run, use the &#123;@link ApiParagraph#GetElement&#125; method. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | None | Removes all the elements from the current paragraph. 💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add content to this run, use the &#123;@link ApiParagraph#GetElement&#125; method. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current paragraph. |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns the next paragraph. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the previous paragraph. |
| [Copy](./Methods/Copy.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a paragraph copy. Ingnore comments, footnote references, complex fields. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the current paragraph. |
| [AddTabStop](./Methods/AddTabStop.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a tab stop to the current paragraph. |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | Returns a type of the ApiParaPr class. |
| [SetIndLeft](./Methods/SetIndLeft.md) | None | Sets the paragraph left side indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | None | Sets the paragraph right side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | None | Sets the paragraph first line indentation. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [SetJc](./Methods/SetJc.md) | None | Sets the paragraph contents justification. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | None | Sets the paragraph line spacing. If the value of the sLineRule parameter is either  "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If  the value of the sLineRule parameter is "auto", then the value of the  nLine parameter will be interpreted as 240ths of a line. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | None | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then  any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then  it will be interpreted as false. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | None | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then  any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it  will be interpreted as false. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [SetTabs](./Methods/SetTabs.md) | None | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. **Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other. |
| [SetBullet](./Methods/SetBullet.md) | None | Sets the bullet or numbering to the current paragraph. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | Returns the outline level of the specified properties. |
