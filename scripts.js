var btnTranslate = document.querySelector("#translateBtn");
var txtInput = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output-text");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/groot.json"
// var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}



function clickHandler() {
    var inputText = txtInput.value; // taking input


    if(!inputText){
        alert("Please Enter some text in English");
    }else{
        var elem = document.getElementById("small-image");
        elem.style.transform = "transform: rotate(360deg)";
        // calling server for processing
        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
    }


};

btnTranslate.addEventListener("click", clickHandler)
// btnTranslate.addEventListener("click",)