async function extractKeywords() {
  var text = document.getElementById("jobDescription").value;

  // Send the text to the server for processing
  const response = await fetch("http://localhost:3000/extract-keywords", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  });

  if (!response.ok) {
    // Handle network errors
    console.error("Network response was not ok");
    return;
  }

  // Get the keywords from the server response
  const data = await response.json();
  document.getElementById("results").innerText =
    "Keywords: " + data.keywords.join(", ");
}
