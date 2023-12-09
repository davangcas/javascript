// network status

export function getNetworkStatus() {
    const isOnline = () => {
        const network_status_div = document.createElement("div");

        if (navigator.onLine) {
            network_status_div.textContent = "Network Connection Restored";
            network_status_div.classList.add("online");
            network_status_div.classList.remove("offline");
        } else {
            network_status_div.textContent = "Network Connection Lost";
            network_status_div.classList.add("offline");
            network_status_div.classList.remove("online");
        }

        document.body.insertAdjacentElement("afterbegin", network_status_div);
        setTimeout(() => {
            document.body.removeChild(network_status_div);
        }, 2000);
    };

    window.addEventListener("offline", (event) => {
        isOnline();
    });

    window.addEventListener("online", (event) => {
        isOnline();
    });
}
