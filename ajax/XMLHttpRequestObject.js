(() => {
    const xhr = new XMLHttpRequest();
    const $xhr_list = document.getElementById("xhr-list");
    const $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (event) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);

            response.forEach((element) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $xhr_list.appendChild($fragment);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            $xhr_list.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        console.log("This code is executed always - XMLHttpRequest");
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
})();
