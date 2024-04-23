function countWord() {
    // Get the input text value
    let words = document.getElementById("word").value;

    // Split the words on each space character and filter out empty strings
    let split = words.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });

    // The length of the filtered array gives the word count
    let count = split.length;

    // Display it as output
    document.getElementById("show").innerHTML = count;
}
