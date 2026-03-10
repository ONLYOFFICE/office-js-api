// This example shows how to enable AI-assisted change tracking in a document.

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
