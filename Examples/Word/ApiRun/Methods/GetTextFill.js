This example sets the text fill to the current text run.

var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);

// Add a text run with a specific fill color
var oRun1 = Api.CreateRun();
oRun1.AddText("Colored Text");
oRun1.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0))); // Red fill
oParagraph.AddElement(oRun1);

// Get the text fill from the first run
var oTextFill = oRun1.GetTextFill();

// Create a new run and apply the retrieved text fill
var oRun2 = Api.CreateRun();
oRun2.AddText("This text has the same fill color.");
oRun2.SetTextFill(oTextFill);
oParagraph.AddElement(oRun2);

// Push the paragraph to the document
oDocument.Push(oParagraph);
