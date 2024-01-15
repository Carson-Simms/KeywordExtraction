function extractKeywords() {
  var text = document.getElementById("jobDescription").value;
  var nlpResult = nlp(text);
  var keywords = nlpResult.terms().out("array");

  document.getElementById("results").innerText =
    "Keywords: " + keywords.join(", ");
}
