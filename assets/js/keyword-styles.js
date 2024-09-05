document.addEventListener('DOMContentLoaded', function () {
  // Define a color palette
  const colorPalette = [
    "#4E79A7",
    "#A0CBE8",
    "#F28E2B",
    "#FFBE7D",
    "#59A14F",
    "#8CD17D",
    "#B6992D",
    "#F1CE63",
    "#499894",
    "#86BCB6",
    "#E15759",
    "#FF9D9A",
    "#79706E",
    "#BAB0AC",
    "#D37295",
    "#FABFD2",
    "#B07AA1",
    "#D4A6C8",
    "#9D7660",
    "#D7B5A6"
  ];

  // Define a set of colors for different keywords
  const keywordColors = {};

  // Generate a unique color for a keyword
  function generateColor(keyword) {
    let hash = 0;
    for (let i = 0; i < keyword.length; i++) {
      hash = keyword.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Use the hash value to select a color from the palette
    const colorIndex = Math.abs(hash) % colorPalette.length;
    return colorPalette[colorIndex];
  }

  // Get all keyword elements
  const keywords = document.querySelectorAll('.keyword');

  keywords.forEach(keywordElement => {
    const keyword = keywordElement.getAttribute('data-keyword');

    // If color for this keyword is not defined, generate and store it
    if (!keywordColors[keyword]) {
      keywordColors[keyword] = generateColor(keyword);
    }

    // Apply the color to the keyword element
    keywordElement.style.color = keywordColors[keyword];
    keywordElement.style.borderColor = keywordColors[keyword];
  });
});
