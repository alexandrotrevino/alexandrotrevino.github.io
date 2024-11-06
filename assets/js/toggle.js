document.addEventListener('DOMContentLoaded', function () {
  
  $("a.abstract").unbind().click(function () {
    console.log('Button clicked!'); // Debugging statement
    $(this).toggleClass('clicked');
    // Get the data-entry-id of the clicked button
    const entryKey = this.getAttribute('data-entry-key');
    console.log(entryKey);

    // Find the corresponding abstract text block with the same data-entry-id
    const abstractText = document.querySelector(`.abstract.hidden[data-entry-key="${entryKey}"]`);
    console.log(abstractText.classList);

    // Toggle between the 'hidden' and 'open' classes
    if (abstractText.classList.contains('open')) {
      abstractText.classList.remove('open');
      console.log('remove open');
      console.log(abstractText.classList);
    } else {
      abstractText.classList.add('open');
      console.log('open');
      console.log(abstractText.classList);
    }

  });

  $("a.bibtex").unbind().click(function () {
    console.log('Bibtex clicked!'); // Debugging statement
  
    // Get the data-entry-id of the clicked button
    const entryKey = this.getAttribute('data-entry-key');
    console.log(entryKey)

    // Find the corresponding bibtex text block with the same data-entry-id
    const bibtexText = document.querySelector(`.bibtex.hidden[data-entry-key="${entryKey}"]`);
    console.log(bibtexText.classList);

    // Toggle between the 'hidden' and 'open' classes
    if (bibtexText.classList.contains('open')) {
      bibtexText.classList.remove('open');
      $(this).toggleClass('clicked')
      console.log('remove open')
      console.log(bibtexText.classList);
    } else {
      bibtexText.classList.add('open');
      $(this).toggleClass('clicked')
      console.log('open')
      console.log(bibtexText.classList);
    }

  });
});
