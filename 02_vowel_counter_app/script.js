const button = document.querySelector("#vowelBtn");

button.addEventListener("click", checkVowels);

function checkVowels() {
    let text = document.querySelector("#inputText").value;
    text = text.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (isVowel(char)) {
            vowelCount++;
        }
    }
    const result = document.querySelector("#result");
    result.textContent = `Total Vowels: ${vowelCount}`;
}


function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}