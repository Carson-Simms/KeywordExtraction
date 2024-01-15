/*
The extractKeywords function takes the job description and removes puncuation and uppercase.
Then it counts the frequency of each word and returns a list sorted in most abundunt to least.
*/

function extractKeywords(text) {
  var words = text
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .split(" ");

  var fillerWords = [
    "and",
    "the",
    "of",
    "to",
    "a",
    "in",
    "for",
    "is",
    "on",
    "that",
    "by",
    "with",
    "as",
    "are",
    "it",
    "with",
    "be",
    "at",
    "this",
    "from",
    "or",
    "have",
    "an",
    "will",
    "my",
    "one",
    "all",
    "there",
    "their",
    "what",
    "which",
    "if",
    "about",
    "can",
    "us",
    "what",
    "why",
    "when",
    "where",
    "our",
  ];

  var keywords = words.filter(function (word) {
    return fillerWords.indexOf(word) === -1;
  });

  var frequency = {};
  keywords.forEach(function (word) {
    if (!frequency[word]) {
      frequency[word] = 0;
    }
    frequency[word] += 1;
  });

  return Object.keys(frequency).sort(function (a, b) {
    return frequency[b] - frequency[a];
  });
}

function showKeywords() {
  var text = document.getElementById("jobDescription").value;
  var keywords = extractKeywords(text);
  document.getElementById("results").innerText =
    "Keywords: \n" + keywords.join("\n");
}
