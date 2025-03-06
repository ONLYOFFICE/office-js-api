# ApiDocument

Represents the ApiDocument class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AcceptAllRevisionChanges](./Methods/AcceptAllRevisionChanges.md) | None | Accepts all changes made in review mode. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current document selection, or to the current word if no text is selected. |
| [AddDrawingToPage](./Methods/AddDrawingToPage.md) | boolean | Adds a shape to the specified page.\n💡 This method can be a little bit slow, because it runs the document calculation\nprocess to arrange tables on the specified page. |
| [AddElement](./Methods/AddElement.md) | None | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [AddEndnote](./Methods/AddEndnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Adds an endnote for the selected text (or the current position if the selection doesn't exist). |
| [AddFootnote](./Methods/AddFootnote.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Adds a footnote for the selected text (or the current position if the selection doesn't exist). |
| [AddMathEquation](./Methods/AddMathEquation.md) | None | Adds a math equation to the current document. |
| [AddTableOfContents](./Methods/AddTableOfContents.md) | None | Adds a table of content to the current document.\n💡 Please note that the new table of contents replaces the existing table of contents. |
| [AddTableOfFigures](./Methods/AddTableOfFigures.md) | boolean | Adds a table of figures to the current document. |
| [ClearAllFields](./Methods/ClearAllFields.md) | None | Clears all forms in the document. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiNumbering](../ApiNumbering/ApiNumbering.md) | Creates an abstract multilevel numbering with a specified type. |
| [CreateSection](./Methods/CreateSection.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | Creates a new document section which ends at the specified paragraph. Allows to set local parameters to the current\nsection - page size, footer, header, columns, etc. |
| [CreateStyle](./Methods/CreateStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Creates a new style with the specified type and name. If there is a style with the same name it will be replaced with a new one. |
| [DeleteBookmark](./Methods/DeleteBookmark.md) | boolean | Removes a bookmark from the document, if one exists. |
| [GetAllBookmarksNames](./Methods/GetAllBookmarksNames.md) | string[] | Returns an array with names of all bookmarks in the current document. |
| [GetAllCaptionParagraphs](./Methods/GetAllCaptionParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all caption paragraphs of the specified type from the current document. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects from the document content. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current document. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all the content controls from the document. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects from the document content. |
| [GetAllForms](./Methods/GetAllForms.md) | [ApiForm](../Enumeration/ApiForm.md)[] | Returns all existing forms in the document. |
| [GetAllHeadingParagraphs](./Methods/GetAllHeadingParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all heading paragraphs from the current document. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects from the document content. |
| [GetAllNumberedParagraphs](./Methods/GetAllNumberedParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns all numbered paragraphs from the current document. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects from the document content. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all paragraphs from the current document content. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects from the document content. |
| [GetAllStyles](./Methods/GetAllStyles.md) | [ApiStyle](../ApiStyle/ApiStyle.md)[] | Returns all styles of the current document. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all tables from the current document content. |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns a collection of tables on a given absolute page.\n💡 This method can be a little bit slow, because it runs the document calculation\nprocess to arrange tables on the specified page. |
| [GetBookmark](./Methods/GetBookmark.md) | [ApiBookmark](../ApiBookmark/ApiBookmark.md) | Returns a bookmark by its name from the current document. |
| [GetBookmarkRange](./Methods/GetBookmarkRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a bookmark range. |
| [GetClassType](./Methods/GetClassType.md) | "document" | Returns a type of the ApiDocument class. |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | Returns a type of the ApiDocumentContent class. |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | Returns a comment from the current document by its ID. |
| [GetCommentsReport](./Methods/GetCommentsReport.md) | [CommentReport](../Enumeration/CommentReport.md) | Returns a report about all the comments added to the document. |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | Returns an array of document elements from the current ApiDocumentContent object. |
| [GetContentControlsByTag](./Methods/GetContentControlsByTag.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all content controls in the document with the specified tag name. |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | number | Returns the index of the current page. |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | Returns the current sentence or part of the current sentence. |
| [GetCurrentVisiblePages](./Methods/GetCurrentVisiblePages.md) | number[] | Returns the indexes of the currently visible pages. |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | Returns the current word or part of the current word. |
| [GetDefaultParaPr](./Methods/GetDefaultParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Returns a set of default paragraph properties in the current document. |
| [GetDefaultStyle](./Methods/GetDefaultStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns the default style parameters for the specified document element. |
| [GetDefaultTextPr](./Methods/GetDefaultTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Returns a set of default properties for the text run in the current document. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information:\n-**Application** - the application the document was created with.\n-**CreatedRaw** - the date and time when the file was created.\n-**Created** - the parsed date and time when the file was created.\n-**LastModifiedRaw** - the date and time when the file was last modified.\n-**LastModified** - the parsed date and time when the file was last modified.\n-**LastModifiedBy** - the name of the user who made the latest change to the document.\n-**Authors** - the persons who created the file.\n-**Title** - the document title (this property allows you to simplify your documents classification).\n-**Tags** - the document tags (this property allows you to simplify your documents classification).\n-**Subject** - the document subject (this property allows you to simplify your documents classification).\n-**Comment** - the comment to the document (this property allows you to simplify your documents classification). |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetEndNotesFirstParagraphs](./Methods/GetEndNotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns the first paragraphs from all endnotes in the current document. |
| [GetFinalSection](./Methods/GetFinalSection.md) | [ApiSection](../ApiSection/ApiSection.md) | Returns the document final section. |
| [GetFootnotesFirstParagraphs](./Methods/GetFootnotesFirstParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns the first paragraphs from all footnotes in the current document. |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a list of all forms in the document with the specified tag name. |
| [GetFormsData](./Methods/GetFormsData.md) | [FormData](../Enumeration/FormData.md)[] | Returns the data from all forms present in the current document.\nIf a form was created and not assigned to any part of the document, it won't appear in this list. |
| [GetPageCount](./Methods/GetPageCount.md) | number | Returns a number of pages in the current document.\n💡 This method can be slow for large documents because it runs the document calculation\nprocess before the full recalculation. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified document. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the document content. |
| [GetRangeBySelect](./Methods/GetRangeBySelect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns a range object by the current selection. |
| [GetReviewReport](./Methods/GetReviewReport.md) | [ReviewReport](../Enumeration/ReviewReport.md) | Returns a report about every change which was made to the document in the review mode. |
| [GetSections](./Methods/GetSections.md) | [ApiSection](../ApiSection/ApiSection.md)[] | Returns a collection of section objects in the document. |
| [GetSelectedDrawings](./Methods/GetSelectedDrawings.md) | [ApiShape](../ApiShape/ApiShape.md)[] \| [ApiImage](../ApiImage/ApiImage.md)[] \| [ApiChart](../ApiChart/ApiChart.md)[] \| [ApiDrawing](../ApiDrawing/ApiDrawing.md)[] | Returns all the selected drawings in the current document. |
| [GetStatistics](./Methods/GetStatistics.md) | object | Returns the document statistics represented as an object with the following parameters:\n-**PageCount** - number of pages;\n-**WordsCount** - number of words;\n-**ParagraphCount** - number of paragraphs;\n-**SymbolsCount** - number of symbols;\n-**SymbolsWSCount** - number of symbols with spaces. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) | Returns a style by its name. |
| [GetTagsOfAllContentControls](./Methods/GetTagsOfAllContentControls.md) | String[] | Returns a list of all tags that are used for all content controls in the document. |
| [GetTagsOfAllForms](./Methods/GetTagsOfAllForms.md) | String[] | Returns a list of all tags that are used for all forms in the document. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
| [GetWatermarkSettings](./Methods/GetWatermarkSettings.md) | [ApiWatermarkSettings](../ApiWatermarkSettings/ApiWatermarkSettings.md) | Returns the watermark settings in the current document. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current document. |
| [InsertContent](./Methods/InsertContent.md) | boolean | Inserts an array of elements into the current position of the document. |
| [InsertWatermark](./Methods/InsertWatermark.md) | boolean | Inserts a watermark on each document page. |
| [IsTrackRevisions](./Methods/IsTrackRevisions.md) | boolean | Checks if change tracking mode is enabled or not. |
| [Last](./Methods/Last.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns the last document element. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RejectAllRevisionChanges](./Methods/RejectAllRevisionChanges.md) | None | Rejects all changes made in review mode. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | None | Removes all the elements from the current document or from the current document element.\n💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add\ncontent to this paragraph, use the [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | None | Removes an element using the position specified. |
| [RemoveSelection](./Methods/RemoveSelection.md) | None | Removes the current selection. |
| [RemoveWatermark](./Methods/RemoveWatermark.md) | None | Removes a watermark from the current document. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with an image specified. |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | boolean | Replaces the current sentence or part of the current sentence with the specified text. |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | boolean | Replaces the current word or part of the current word with the specified text. |
| [ReplaceDrawing](./Methods/ReplaceDrawing.md) | boolean | Replaces a drawing with a new drawing. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a document object. The search results are a collection of ApiRange objects. |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | None | Finds and replaces the text. |
| [SelectCurrentWord](./Methods/SelectCurrentWord.md) | object | Selects the current word if it is possible. |
| [SetControlsHighlight](./Methods/SetControlsHighlight.md) | None | Sets the highlight to the content controls from the current document. |
| [SetEvenAndOddHdrFtr](./Methods/SetEvenAndOddHdrFtr.md) | None | Specifies whether sections in this document will have different headers and footers for even and\nodd pages (one header/footer for odd pages and another header/footer for even pages). |
| [SetFormsData](./Methods/SetFormsData.md) | None | Sets the data to the specified forms. |
| [SetFormsHighlight](./Methods/SetFormsHighlight.md) | None | Sets the highlight to the forms in the document. |
| [SetTrackRevisions](./Methods/SetTrackRevisions.md) | None | Sets the change tracking mode. |
| [SetWatermarkSettings](./Methods/SetWatermarkSettings.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Sets the watermark settings in the current document. |
| [ToHtml](./Methods/ToHtml.md) | string | Converts a document to HTML. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocument object into the JSON object. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocumentContent object into the JSON object. |
| [ToMarkdown](./Methods/ToMarkdown.md) | string | Converts a document to Markdown. |
| [UpdateAllFields](./Methods/UpdateAllFields.md) | None | Updates all fields in the document. |
| [UpdateAllTOC](./Methods/UpdateAllTOC.md) | None | Updates all tables of contents in the current document. |
| [UpdateAllTOF](./Methods/UpdateAllTOF.md) | None | Updates all tables of figures in the current document. |
