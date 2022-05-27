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
const sleep = async (time) => {return new Promise(resolve => setTimeout(resolve, time))}
sleep(2000).then(() => {
    console.log("closing tab");
    open(location, '_self').close();
})
