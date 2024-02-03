var leftSide = document.querySelector('.left-side');
var rightSide = document.querySelector('.right-side');
var postBtn = document.getElementById('post-btn');
var textCont = document.querySelector('.text-area');
var rightSideCont = document.querySelector('.right-side-container');

textCont.addEventListener('click', function(){
    let text = textCont.innerText;
    if(text==="Type your thoughts here...."){
        textCont.innerText = " ";
    }
})

postBtn.addEventListener('click', function(){
    let text = textCont.innerText;
    if(text==="Type your thoughts here...." || text == ''){
        alert("type in");
    }else{
        createTweet();
    }
    textCont.innerText = "Type your thoughts here....";
})
function createTweet(){
    let text = textCont.innerText;
    var tweet = document.createElement('div');
    var navbar = document.createElement('div');
    var profilepic = document.createElement('img');
    var tweetText = document.createElement('text');
    tweetText.classList.add('tweet-text');
    tweetText.innerText = text;

    navbar.classList.add('navbar2');
    var name = document.createElement('div');

    var icon = document.createElement('div');
    var icon1 = document.createElement('img');
    icon1.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714";
    var icon2 = document.createElement('img');
    icon2.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661";

    tweet.classList.add('tweet-cont');

    tweet.appendChild(tweetText);
    rightSideCont.appendChild(tweet);

}