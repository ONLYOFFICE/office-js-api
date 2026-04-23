// Enable AI-assisted revision tracking with an author name in a document.

// How do I track changes made by an AI assistant in a document?

// Assign a named author to AI-generated edits so reviewers can identify them separately.

const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
paragraph.AddText('Original document text.');

doc.SetAssistantTrackRevisions(true, 'AI Assistant');

const assistantParagraph = Api.CreateParagraph();
assistantParagraph.AddText('Text added by AI assistant.');
doc.Push(assistantParagraph);

doc.SetAssistantTrackRevisions(false);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('AI-assisted tracking has been enabled and then disabled.');
doc.Push(resultParagraph);