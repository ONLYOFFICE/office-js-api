# ApiDocument

Represents the ApiDocument class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "document" | Returns a type of the ApiDocument class. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns a style by its name. |
| [CreateStyle](./Methods/CreateStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Creates a new style with the specified type and name. If there is a style with the same name it will be replaced with a new one. |
| [GetDefaultStyle](./Methods/GetDefaultStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the default style parameters for the specified document element. |
| [GetDefaultTextPr](./Methods/GetDefaultTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns a set of default properties for the text run in the current document. |
| [GetDefaultParaPr](./Methods/GetDefaultParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns a set of default paragraph properties in the current document. |
| [GetFinalSection](./Methods/GetFinalSection.md) | [ApiSection](../ApiSection/ApiSection.md) | Returns the document final section. |
| [CreateSection](./Methods/CreateSection.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | Creates a new document section which ends at the specified paragraph. Allows to set local parameters to the current section - page size, footer, header, columns, etc. |
| [SetEvenAndOddHdrFtr](./Methods/SetEvenAndOddHdrFtr.md) | None | Specifies whether sections in this document will have different headers and footers for even and odd pages (one header/footer for odd pages and another header/footer for even pages). |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | Creates an abstract multilevel numbering with a specified type. |
| [InsertContent](./Methods/InsertContent.md) | boolean | Inserts an array of elements into the current position of the document. |
| [GetCommentsReport](./Methods/GetCommentsReport.md) | [CommentReport](../Enumeration/CommentReport.md) | Returns a report about all the comments added to the document. |
| [GetReviewReport](./Methods/GetReviewReport.md) | [ReviewReport](../Enumeration/ReviewReport.md) | Returns a report about every change which was made to the document in the review mode. |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | None | Finds and replaces the text. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all the content controls from the document. |
| [GetTagsOfAllContentControls](./Methods/GetTagsOfAllContentControls.md) | String[] | Returns a list of all tags that are used for all content controls in the document. |
| [GetTagsOfAllForms](./Methods/GetTagsOfAllForms.md) | String[] | Returns a list of all tags that are used for all forms in the document. |
| [GetContentControlsByTag](./Methods/GetContentControlsByTag.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all content controls in the document with the specified tag name. |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all forms in the document with the specified tag name. |
| [GetFormsData](./Methods/GetFormsData.md) | [FormData](../Enumeration/FormData.md)[] | Returns the data from all forms present in the current document. If a form was created and not assigned to any part of the document, it won't appear in this list. |
| [SetFormsData](./Methods/SetFormsData.md) | None | Sets the data to the specified forms. |
| [SetTrackRevisions](./Methods/SetTrackRevisions.md) | None | Sets the change tracking mode. |
| [IsTrackRevisions](./Methods/IsTrackRevisions.md) | boolean | Checks if change tracking mode is enabled or not. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified document. |
| [GetRangeBySelect](./Methods/GetRangeBySelect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a range object by the current selection. |
| [Last](./Methods/Last.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns the last document element. |
| [DeleteBookmark](./Methods/DeleteBookmark.md) | boolean | Removes a bookmark from the document, if one exists. |
| [GetBookmarkRange](./Methods/GetBookmarkRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a bookmark range. |
| [GetSections](./Methods/GetSections.md) | [ApiSection](../ApiSection/ApiSection.md)[] | Returns a collection of section objects in the document. |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns a collection of tables on a given absolute page. 💡 This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page. |
| [AddDrawingToPage](./Methods/AddDrawingToPage.md) | boolean | Adds a shape to the specified page. 💡 This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page. |
| [RemoveSelection](./Methods/RemoveSelection.md) | None | Removes the current selection. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a document object. The search results are a collection of ApiRange objects. |
| [ToMarkdown](./Methods/ToMarkdown.md) | string | Converts a document to Markdown. |
| [ToHtml](./Methods/ToHtml.md) | string | Converts a document to HTML. |
| [InsertWatermark](./Methods/InsertWatermark.md) | boolean | Inserts a watermark on each document page. |
| [GetWatermarkSettings](./Methods/GetWatermarkSettings.md) | [ApiWatermarkSettings](../ApiWatermarkSettings/ApiWatermarkSettings.md) | Returns the watermark settings in the current document. |
| [SetWatermarkSettings](./Methods/SetWatermarkSettings.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Sets the watermark settings in the current document. |
| [RemoveWatermark](./Methods/RemoveWatermark.md) | None | Removes a watermark from the current document. |
| [UpdateAllTOC](./Methods/UpdateAllTOC.md) | None | Updates all tables of contents in the current document. |
| [UpdateAllTOF](./Methods/UpdateAllTOF.md) | None | Updates all tables of figures in the current document. |
| [UpdateAllFields](./Methods/UpdateAllFields.md) | None | Updates all fields in the document. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocument object into the JSON object. |
| [GetAllForms](./Methods/GetAllForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns all existing forms in the document. |
| [ClearAllFields](./Methods/ClearAllFields.md) | None | Clears all forms in the document. |
| [SetFormsHighlight](./Methods/SetFormsHighlight.md) | None | Sets the highlight to the forms in the document. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current document. |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | Returns a comment from the current document by its ID. |
| [GetAllNumberedParagraphs](./Methods/GetAllNumberedParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all numbered paragraphs from the current document. |
| [GetAllHeadingParagraphs](./Methods/GetAllHeadingParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all heading paragraphs from the current document. |
| [GetFootnotesFirstParagraphs](./Methods/GetFootnotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns the first paragraphs from all footnotes in the current document. |
| [GetEndNotesFirstParagraphs](./Methods/GetEndNotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns the first paragraphs from all endnotes in the current document. |
| [GetAllCaptionParagraphs](./Methods/GetAllCaptionParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all caption paragraphs of the specified type from the current document. |
| [AcceptAllRevisionChanges](./Methods/AcceptAllRevisionChanges.md) | None | Accepts all changes made in review mode. |
| [RejectAllRevisionChanges](./Methods/RejectAllRevisionChanges.md) | None | Rejects all changes made in review mode. |
| [GetAllBookmarksNames](./Methods/GetAllBookmarksNames.md) | string[] | Returns an array with names of all bookmarks in the current document. |
| [GetBookmark](./Methods/GetBookmark.md) | [ApiBookmark](../ApiBookmark/ApiBookmark.md) | Returns a bookmark by its name from the current document. |
| [GetSelectedDrawings](./Methods/GetSelectedDrawings.md) | [ApiShape](../ApiShape/ApiShape.md)[] \| [ApiImage](../ApiImage/ApiImage.md)[] \| [ApiChart](../ApiChart/ApiChart.md)[] \| [ApiDrawing](../ApiDrawing/ApiDrawing.md)[] | Returns all the selected drawings in the current document. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with an image specified. |
| [ReplaceDrawing](./Methods/ReplaceDrawing.md) | boolean | Replaces a drawing with a new drawing. |
| [AddFootnote](./Methods/AddFootnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Adds a footnote for the selected text (or the current position if the selection doesn't exist). |
| [AddEndnote](./Methods/AddEndnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Adds an endnote for the selected text (or the current position if the selection doesn't exist). |
| [SetControlsHighlight](./Methods/SetControlsHighlight.md) | None | Sets the highlight to the content controls from the current document. |
| [AddTableOfContents](./Methods/AddTableOfContents.md) | None | Adds a table of content to the current document. 💡 Please note that the new table of contents replaces the existing table of contents. |
| [AddTableOfFigures](./Methods/AddTableOfFigures.md) | boolean | Adds a table of figures to the current document. |
| [GetStatistics](./Methods/GetStatistics.md) | object | Returns the document statistics represented as an object with the following parameters: **PageCount** - number of pages; **WordsCount** - number of words; **ParagraphCount** - number of paragraphs; **SymbolsCount** - number of symbols; **SymbolsWSCount** - number of symbols with spaces. |
| [GetPageCount](./Methods/GetPageCount.md) | number | Returns a number of pages in the current document. 💡 This method can be slow for large documents because it runs the document calculation process before the full recalculation. |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | number | Returns the index of the current page. |
| [GetCurrentVisiblePages](./Methods/GetCurrentVisiblePages.md) | number[] | Returns the indexes of the currently visible pages. |
| [GetAllStyles](./Methods/GetAllStyles.md) | [ApiStyle](../ApiStyle/ApiStyle.md)[] | Returns all styles of the current document. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: **Application** - the application the document was created with. **CreatedRaw** - the date and time when the file was created. **Created** - the parsed date and time when the file was created. **LastModifiedRaw** - the date and time when the file was last modified. **LastModified** - the parsed date and time when the file was last modified. **LastModifiedBy** - the name of the user who made the latest change to the document. **Authors** - the persons who created the file. **Title** - the document title (this property allows you to simplify your documents classification). **Tags** - the document tags (this property allows you to simplify your documents classification). **Subject** - the document subject (this property allows you to simplify your documents classification). **Comment** - the comment to the document (this property allows you to simplify your documents classification). |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | Returns the current word or part of the current word. |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | boolean | Replaces the current word or part of the current word with the specified text. |
| [SelectCurrentWord](./Methods/SelectCurrentWord.md) | object | Selects the current word if it is possible. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current document selection, or to the current word if no text is selected. |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | Returns the current sentence or part of the current sentence. |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | boolean | Replaces the current sentence or part of the current sentence with the specified text. |
| [AddMathEquation](./Methods/AddMathEquation.md) | None | Adds a math equation to the current document. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current document. |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | Returns a type of the ApiDocumentContent class. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [AddElement](./Methods/AddElement.md) | None | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | None | Removes all the elements from the current document or from the current document element. 💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add content to this paragraph, use the &#123;@link ApiDocumentContent#GetElement&#125; method. |
| [RemoveElement](./Methods/RemoveElement.md) | None | Removes an element using the position specified. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the document content. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocumentContent object into the JSON object. |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | Returns an array of document elements from the current ApiDocumentContent object. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects from the document content. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects from the document content. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects from the document content. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects from the document content. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects from the document content. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all paragraphs from the current document content. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all tables from the current document content. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
