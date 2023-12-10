(() => {
    const $fetch_list = document.getElementById("fetch-async-await-list");
    const $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const response_json = await response.json();

            if (!response.ok)
                throw {
                    status: response.status,
                    statusText: response.statusText,
                };

            response_json.forEach((element) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $fetch_list.appendChild($fragment);
        } catch (error) {
            let message = error.statusText || "Ocurrió un error";
            $fetch_list.innerHTML = `Error ${error.status}: ${message}`;
        } finally {
            console.log(
                "This code is executed always - Fetch API - Async/Await"
            );
        }
    }

    getData();
})();
