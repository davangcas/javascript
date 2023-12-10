(() => {
    const $axios_list = document.getElementById("axios-list");
    const $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            response.data.forEach((element) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $axios_list.appendChild($fragment);
        })
        .catch((error) => {
            let message = error.response.statusText || "Ocurrió un error";
            $axios_list.innerHTML = `Error ${error.response.status}: ${message}`;
        })
        .finally(() => {
            console.log("This code is executed always - Axios");
        });
})();
