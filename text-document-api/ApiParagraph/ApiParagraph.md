# ApiParagraph

Represents the ApiParagraph class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBookmarkCrossRef](./Methods/AddBookmarkCrossRef.md) | boolean | Adds a bookmark cross-reference to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddCaption](./Methods/AddCaption.md) | boolean | Adds a caption paragraph after (or before) the current paragraph.\ 💡 Please note that the current paragraph must be in the document (not in the footer/header).\ And if the current paragraph is placed in a shape, then a caption is added after (or before) the parent shape. |
| [AddCaptionCrossRef](./Methods/AddCaptionCrossRef.md) | boolean | Adds a caption cross-reference to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddColumnBreak](./Methods/AddColumnBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a column break to the current position and starts the next element from a new column. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddDrawing](./Methods/AddDrawing.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a drawing object (image, shape or chart) to the current paragraph. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the current paragraph. |
| [AddEndnoteCrossRef](./Methods/AddEndnoteCrossRef.md) | boolean | Adds an endnote cross-reference to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddFootnoteCrossRef](./Methods/AddFootnoteCrossRef.md) | boolean | Adds a footnote cross-reference to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddHeadingCrossRef](./Methods/AddHeadingCrossRef.md) | boolean | Adds a heading cross-reference to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddHyperlink](./Methods/AddHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Adds a hyperlink to a paragraph. |
| [AddInlineLvlSdt](./Methods/AddInlineLvlSdt.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Adds an inline container. |
| [AddLineBreak](./Methods/AddLineBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a line break to the current position and starts the next element from a new line. |
| [AddNumberedCrossRef](./Methods/AddNumberedCrossRef.md) | boolean | Adds a numbered cross-reference to the current paragraph.\ 💡 Please note that this paragraph must be in the document. |
| [AddPageBreak](./Methods/AddPageBreak.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a page break and starts the next element from the next page. |
| [AddPageNumber](./Methods/AddPageNumber.md) | [ApiRun](../ApiRun/ApiRun.md) | Inserts a number of the current document page into the paragraph. |
| [AddPagesCount](./Methods/AddPagesCount.md) | [ApiRun](../ApiRun/ApiRun.md) | Inserts a number of pages in the current document into the paragraph. |
| [AddTabStop](./Methods/AddTabStop.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds a tab stop to the current paragraph. |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | Adds some text to the current paragraph. |
| [Copy](./Methods/Copy.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a paragraph copy. Ingnore comments, footnote references, complex fields. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current paragraph. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects in the paragraph. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a collection of content control objects in the paragraph. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects in the paragraph. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects in the paragraph. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects in the paragraph. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects in the paragraph. |
| [GetClassType](./Methods/GetClassType.md) | "paragraph" | Returns a type of the ApiParagraph class. |
| [GetClassType](./Methods/GetClassType.md) | "paraPr" | Returns a type of the ApiParaPr class. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns a paragraph element using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current paragraph. |
| [GetFontNames](./Methods/GetFontNames.md) | string[] | Returns all font names from all elements inside the current paragraph. |
| [GetIndFirstLine](./Methods/GetIndFirstLine.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph first line indentation. |
| [GetIndLeft](./Methods/GetIndLeft.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph left side indentation. |
| [GetIndRight](./Methods/GetIndRight.md) | [twips](../Enumeration/twips.md) \| undefined | Returns the paragraph right side indentation. |
| [GetJc](./Methods/GetJc.md) | "left" \| "right" \| "both" \| "center" \| undefined | Returns the paragraph contents justification. |
| [GetLastRunWithText](./Methods/GetLastRunWithText.md) | [ApiRun](../ApiRun/ApiRun.md) | Returns the last Run with text in the current paragraph. |
| [GetNext](./Methods/GetNext.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns the next paragraph. |
| [GetNumbering](./Methods/GetNumbering.md) | [ApiNumberingLevel](../ApiNumberingLevel/ApiNumberingLevel.md) | Returns the numbering definition and numbering level for the numbered list. |
| [GetOutlineLvl](./Methods/GetOutlineLvl.md) | Number | Returns the outline level of the specified properties. |
| [GetParaPr](./Methods/GetParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns the paragraph properties. |
| [GetParagraphMarkTextPr](./Methods/GetParagraphMarkTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the text properties of the paragraph mark which is used to mark the paragraph end. The mark can also acquire\ common text properties like bold, italic, underline, etc. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a content control that contains the current paragraph. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current paragraph. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current paragraph. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the paragraph position within its parent element. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the previous paragraph. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified paragraph. |
| [GetSection](./Methods/GetSection.md) | [ApiSection](../ApiSection/ApiSection.md) | Returns the paragraph section. |
| [GetShd](./Methods/GetShd.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Returns the shading applied to the contents of the paragraph. |
| [GetSpacingAfter](./Methods/GetSpacingAfter.md) | [twips](../Enumeration/twips.md) | Returns the spacing after value of the current paragraph. |
| [GetSpacingBefore](./Methods/GetSpacingBefore.md) | [twips](../Enumeration/twips.md) | Returns the spacing before value of the current paragraph. |
| [GetSpacingLineRule](./Methods/GetSpacingLineRule.md) | "auto" \| "atLeast" \| "exact" \| undefined | Returns the paragraph line spacing rule. |
| [GetSpacingLineValue](./Methods/GetSpacingLineValue.md) | [twips](../Enumeration/twips.md) \| [line240](../Enumeration/line240.md) \| undefined | Returns the paragraph line spacing value. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the paragraph style method. |
| [GetText](./Methods/GetText.md) | string | Returns the paragraph text. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns the paragraph text properties. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the paragraph object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Inserts a paragraph at the specified position. |
| [Last](./Methods/Last.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns the last element of the paragraph which is not empty. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the current paragraph. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | None | Removes all the elements from the current paragraph.\ 💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add\ content to this run, use the [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | None | Removes an element using the position specified.\ 💡 If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph),\ a new empty run is automatically created. If you want to add\ content to this run, use the [ApiParagraph#GetElement](../ApiParagraph/Methods/GetElement.md) method. |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | Replaces the current paragraph with a new element. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a paragraph object. The search results are a collection of ApiRange objects. |
| [Select](./Methods/Select.md) | boolean | Selects the current paragraph. |
| [SetBetweenBorder](./Methods/SetBetweenBorder.md) | None | Specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings. |
| [SetBold](./Methods/SetBold.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the bold property to the text character. |
| [SetBottomBorder](./Methods/SetBottomBorder.md) | None | Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.\ 💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added\ to the whole block rather than to every paragraph in this block. |
| [SetCaps](./Methods/SetCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents. |
| [SetColor](./Methods/SetColor.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the text color to the current paragraph in the RGB format. |
| [SetContextualSpacing](./Methods/SetContextualSpacing.md) | None | Specifies that any space before or after this paragraph set using the \ [ApiParaPr#SetSpacingBefore](../ApiParaPr/Methods/SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](../ApiParaPr/Methods/SetSpacingAfter.md) spacing element, should not be applied when the preceding and \ following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively. |
| [SetDoubleStrikeout](./Methods/SetDoubleStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line. |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets all 4 font slots with the specified font family. |
| [SetFontSize](./Methods/SetFontSize.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the font size to the characters of the current paragraph. |
| [SetHighlight](./Methods/SetHighlight.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies a highlighting color which is applied as a background to the contents of the current paragraph. |
| [SetIndFirstLine](./Methods/SetIndFirstLine.md) | None | Sets the paragraph first line indentation. |
| [SetIndLeft](./Methods/SetIndLeft.md) | None | Sets the paragraph left side indentation. |
| [SetIndRight](./Methods/SetIndRight.md) | None | Sets the paragraph right side indentation. |
| [SetItalic](./Methods/SetItalic.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the italic property to the text character. |
| [SetJc](./Methods/SetJc.md) | None | Sets the paragraph contents justification. |
| [SetKeepLines](./Methods/SetKeepLines.md) | None | Specifies that when rendering the document using a page view, all lines of the current paragraph are maintained on a single page whenever possible. |
| [SetKeepNext](./Methods/SetKeepNext.md) | None | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are at least\ partly rendered on the same page as the following paragraph whenever possible. |
| [SetLeftBorder](./Methods/SetLeftBorder.md) | None | Specifies the border which will be displayed at the left side of the page around the specified paragraph. |
| [SetNumPr](./Methods/SetNumPr.md) | None | Specifies that the current paragraph references a numbering definition instance in the current document. |
| [SetNumbering](./Methods/SetNumbering.md) | None | Specifies that the current paragraph references the numbering definition instance in the current document. |
| [SetOutlineLvl](./Methods/SetOutlineLvl.md) | boolean | Sets the outline level for the specified properties. |
| [SetPageBreakBefore](./Methods/SetPageBreakBefore.md) | None | Specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at\ the beginning of a new page in the document. |
| [SetPosition](./Methods/SetPosition.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies an amount by which text is raised or lowered for this paragraph in relation to the default\ baseline of the surrounding non-positioned text. |
| [SetRightBorder](./Methods/SetRightBorder.md) | None | Specifies the border which will be displayed at the right side of the page around the specified paragraph. |
| [SetSection](./Methods/SetSection.md) | boolean | Sets the specified section to the current paragraph. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading applied to the contents of the paragraph. |
| [SetSmallCaps](./Methods/SetSmallCaps.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that all the small letter characters in this paragraph are formatted for display only as their capital\ letter character equivalents which are two points smaller than the actual font size specified for this text. |
| [SetSpacing](./Methods/SetSpacing.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Sets the text spacing measured in twentieths of a point. |
| [SetSpacingAfter](./Methods/SetSpacingAfter.md) | None | Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then \ any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it \ will be interpreted as false. |
| [SetSpacingBefore](./Methods/SetSpacingBefore.md) | None | Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then \ any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then \ it will be interpreted as false. |
| [SetSpacingLine](./Methods/SetSpacingLine.md) | None | Sets the paragraph line spacing. If the value of the sLineRule parameter is either \ "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If \ the value of the sLineRule parameter is "auto", then the value of the \ nLine parameter will be interpreted as 240ths of a line. |
| [SetStrikeout](./Methods/SetStrikeout.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line. |
| [SetStyle](./Methods/SetStyle.md) | None | The paragraph style base method.\ 💡 This method is not used by itself, as it only forms the basis for the [ApiParagraph#SetStyle](../ApiParagraph/Methods/SetStyle.md) method which sets the selected or created style for the paragraph. |
| [SetTabs](./Methods/SetTabs.md) | None | Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.\ -**Warning**: The lengths of aPos array and aVal array -**MUST BE** equal to each other. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the paragraph text properties. |
| [SetTopBorder](./Methods/SetTopBorder.md) | None | Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.\ 💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block. |
| [SetUnderline](./Methods/SetUnderline.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character\ (less than all the spacing above and below the characters on the line). |
| [SetVertAlign](./Methods/SetVertAlign.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Specifies the alignment which will be applied to the contents of this paragraph in relation to the default appearance of the paragraph text:\ -**"baseline"** - the characters in the current paragraph will be aligned by the default text baseline.\ -**"subscript"** - the characters in the current paragraph will be aligned below the default text baseline.\ -**"superscript"** - the characters in the current paragraph will be aligned above the default text baseline. |
| [SetWidowControl](./Methods/SetWidowControl.md) | None | Specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParagraph object into the JSON object. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiParaPr object into the JSON object. |
| [WrapInMailMergeField](./Methods/WrapInMailMergeField.md) | None | Wraps the paragraph content in a mail merge field. |
