let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cred = urlParams.get("cred");

if(cred) {
    window.localStorage.setItem('cred', cred);
}
if(window.localStorage.getItem('cred') == null) {
    document.getElementById("cookie_info").innerHTML = "No LS Found";
} else {
    document.getElementById("cookie_info").innerHTML = window.localStorage.getItem('cred');
}
console.log("cookie stored");

const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}
sleep(2000).then(() => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("success").style.display = "flex";
});

const onClickHandler = () => {
    window.location = "com.example.chromecustomtabexperiment://merry-arithmetic-d4fb40.netlify.app/openApp";
}
