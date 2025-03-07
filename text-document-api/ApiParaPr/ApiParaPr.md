# ApiParaPr

Represents the ApiParaPr class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | Returns a type of the ApiParaPr class. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | Returns the outline level of the specified properties. |
| [GetShd](./Methods/GetShd.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Returns the shading applied to the contents of the paragraph. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the paragraph style method. |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | boolean | Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings. |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | boolean | Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.\ 💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added\ to the whole block rather than to every paragraph in this block. |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | boolean | Specifies that any space before or after this paragraph set using the \ [ApiParaPr#SetSpacingBefore](../ApiParaPr/Methods/SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](../ApiParaPr/Methods/SetSpacingAfter.md) spacing element, should not be applied when the preceding and \ following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | boolean | Sets the paragraph first line indentation. |
| [SetIndLeft](./Methods/SetIndLeft.md) | boolean | Sets the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | boolean | Sets the paragraph right side indentation. |
| [SetJc](./Methods/SetJc.md) | boolean | Sets the paragraph contents justification. |
| [SetKeepLines](./Methods/SetKeepLines.md) | boolean | Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible. |
| [SetKeepNext](./Methods/SetKeepNext.md) | boolean | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least\ partly rendered on the same page as the following paragraph whenever possible. |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | boolean | Specifies the border which will be displayed at the left side of the page around the specified paragraph. |
| [SetNumPr](./Methods/SetNumPr.md) | boolean | Specifies that the current paragraph references a numbering definition instance in the current document. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | boolean | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at\ the beginning of a new page in the document. |
| [SetRightBorder](./Methods/SetRightBorder.md) | boolean | Specifies the border which will be displayed at the right side of the page around the specified paragraph. |
| [SetShd](./Methods/SetShd.md) | boolean | Specifies the shading applied to the contents of the paragraph. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | boolean | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then \ any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it \ will be interpreted as false. |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | boolean | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then \ any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then \ it will be interpreted as false. |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | boolean | Sets the paragraph line spacing. If the value of the sLineRule parameter is either \ "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If \ the value of the sLineRule parameter is "auto", then the value of the \ nLine parameter will be interpreted as 240ths of a line. |
| [SetStyle](./Methods/SetStyle.md) | boolean | The paragraph style base method.\ 💡 This method is not used by itself, as it only forms the basis for the [ApiParagraph#SetStyle](../ApiParagraph/Methods/SetStyle.md) method which sets the selected or created style for the paragraph. |
| [SetTabs](./Methods/SetTabs.md) | boolean | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.\ -**Warning**: The lengths of aPos array and aVal array -**MUST BE** equal to each other. |
| [SetTopBorder](./Methods/SetTopBorder.md) | boolean | Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.\ 💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block. |
| [SetWidowControl](./Methods/SetWidowControl.md) | boolean | Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParaPr object into the JSON object. |
