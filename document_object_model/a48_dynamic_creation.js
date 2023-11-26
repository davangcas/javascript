// creating elements dynamically documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $cards = document.querySelector(".cards");

$img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1558980664-4f0b3f1f6c2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
);
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
    <img src="https://images.unsplash.com/photo-1558980664-4f0b3f1f6c2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Animals">
    <figcaption>Animals</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const seasons = ["Spring", "Summer", "Autumn", "Winter"],
    $ul = document.createElement("ul");

document.write("<h3>Seasons</h3>");
document.body.appendChild($ul);

seasons.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continents = ["Africa", "America", "Asia", "Europe", "Australia"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continents</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continents.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

months.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Months of the year</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

const $cards2 = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment2 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Technology",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animals",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Architecture",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "People",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Nature",
            img: "https://placeimg.com/200/200/nature",
        },
    ];

cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    $template.querySelector(".card-title").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment2.appendChild($clone);
});

$cards2.appendChild($fragment2);
