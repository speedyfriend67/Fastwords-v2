document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const wordContainer = document.getElementById('wordContainer');
  const wordElement = document.getElementById('word');
  const definitionElement = document.getElementById('definition');
  const nextButton = document.getElementById('nextButton');

  let currentIndex = 0;
  let words = [];

  startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    wordContainer.classList.remove('hidden');
    loadWords();
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < words.length) {
      showWord(currentIndex);
    } else {
      currentIndex = 0;
      showWord(currentIndex);
    }
  });

  async function loadWords() {
    try {
      const response = await fetch('words.json');
      const data = await response.json();
      words = data.words;
      showWord(currentIndex);
    } catch (error) {
      console.error('Error loading words:', error);
    }
  }

  function showWord(index) {
    const word = words[index];
    wordElement.textContent = word.word;
    definitionElement.textContent = word.definition;
  }
});
