var anagram_input = document.body;

var anagram_txt = document.createElement("INPUT");
anagram_txt.id="ana_id";
anagram_txt.setAttribute("type", "text");
anagram_input.appendChild(anagram_txt);

var anagram_btn = document.createElement("Button");

anagram_btn.innerHTML = "Find Anagrams";
anagram_input.appendChild(anagram_btn);

var anagram_result = document.createElement("p");
anagram_result.id="ana_result_id";
anagram_input.appendChild(anagram_result);

anagram_btn.addEventListener("click", function() {
  	var ana_txt = document.getElementById('ana_id').value;
  // alert(ana_txt);
  	var result = "";
	for(var i = 0; i < words.length; i++){
		// result = result + anagrams(ana_txt, words[i]) + ", ";
		if (anagrams(ana_txt, words[i])) {
			result = result + words[i] + ", ";
		}
	}
	document.getElementById("ana_result_id").innerHTML = result;
});

function anagrams(stringA, stringB) {

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}

function sortString(string) {
    return string.split('').sort().join('');
}