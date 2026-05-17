// Register Service Worker

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
    .then(() => {
        console.log("Service Worker Registered");
    });
}

// Save offline data

const button = document.getElementById("saveBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {

    localStorage.setItem(
        "message",
        "This message was saved offline!"
    );

    output.innerText =
        localStorage.getItem("message");
});
