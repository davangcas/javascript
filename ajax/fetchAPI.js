(() => {
    const $fetch_list = document.getElementById("fetch-list");
    const $fragment = document.createDocumentFragment();
    const fetchOptions = {};

    fetch("https://jsonplaceholder.typicode.com/users", fetchOptions)
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response);
        })
        .then((response) => {
            response.forEach((element) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $fetch_list.appendChild($fragment);
        })
        .catch((error) => {
            let message = error.statusText || "Ocurrió un error";
            $fetch_list.innerHTML = `Error ${error.status}: ${message}`;
        })
        .finally(() => {
            console.log("This code is executed always - Fetch API");
        });
})();
