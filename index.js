let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cred = urlParams.get("cred");
if(cred) {
    document.cookie = "cred="+cred;
}
if(document.cookie == "") {
    document.getElementById("cookie_info").innerHTML = "No Cookie Found";
} else {
    document.getElementById("cookie_info").innerHTML = document.cookie;
}
console.log("cookie stored");
window.location = "https://merry-arithmetic-d4fb40.netlify.app/openApp";

