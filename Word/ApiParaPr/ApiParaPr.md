# ApiParaPr

Represents the ApiParaPr class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | Returns a type of the ApiParaPr class. |
| [SetStyle](./Methods/SetStyle.md) | None | The paragraph style base method. 💡 This method is not used by itself, as it only forms the basis for the &#123;@link ApiParagraph#SetStyle&#125; method which sets the selected or created style for the paragraph. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the paragraph style method. |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | None | Specifies that any space before or after this paragraph set using the  &#123;@link ApiParaPr#SetSpacingBefore&#125; or &#123;@link ApiParaPr#SetSpacingAfter&#125; spacing element, should not be applied when the preceding and  following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively. |
| [SetIndLeft](./Methods/SetIndLeft.md) | None | Sets the paragraph left side indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | None | Sets the paragraph right side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | None | Sets the paragraph first line indentation. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [SetJc](./Methods/SetJc.md) | None | Sets the paragraph contents justification. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [SetKeepLines](./Methods/SetKeepLines.md) | None | Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible. |
| [SetKeepNext](./Methods/SetKeepNext.md) | None | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least partly rendered on the same page as the following paragraph whenever possible. |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | None | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document. |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | None | Sets the paragraph line spacing. If the value of the sLineRule parameter is either  "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If  the value of the sLineRule parameter is "auto", then the value of the  nLine parameter will be interpreted as 240ths of a line. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | None | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then  any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then  it will be interpreted as false. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | None | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then  any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it  will be interpreted as false. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading applied to the contents of the paragraph. |
| [GetShd](./Methods/GetShd.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Returns the shading applied to the contents of the paragraph. |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | None | Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings. 💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block. |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | None | Specifies the border which will be displayed at the left side of the page around the specified paragraph. |
| [SetRightBorder](./Methods/SetRightBorder.md) | None | Specifies the border which will be displayed at the right side of the page around the specified paragraph. |
| [SetTopBorder](./Methods/SetTopBorder.md) | None | Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings. 💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block. |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | None | Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings. |
| [SetWidowControl](./Methods/SetWidowControl.md) | None | Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page. |
| [SetTabs](./Methods/SetTabs.md) | None | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. **Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other. |
| [SetNumPr](./Methods/SetNumPr.md) | None | Specifies that the current paragraph references a numbering definition instance in the current document. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | Returns the outline level of the specified properties. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParaPr object into the JSON object. |
