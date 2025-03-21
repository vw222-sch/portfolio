const src = "https://raw.githubusercontent.com/vw222-sch/portfolio/refs/heads/main/portfolio.json";
const munka = document.querySelector(".work");

async function fetchJson(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}
async function main() {
    let data = await fetchJson(src);

    data.forEach(v => {
        let lis = "";
        v.topics.forEach(u => {
            lis += `<li>${u}</li>`;
        })

        munka.innerHTML += `
        <div class="e">
            <img src="${v.photo_url}" alt="">
            <div class="rep">
                <h1>${v.title}</h1>
                <hr>
                <h2>Témakörök</h2>
                <ul>${lis}</ul>
                <div class="b">
                    <a href="${v["repo-link"]}">Github link</a>
                    <a href="${v["site-link"]}">Weboldal link</a>
                </div>
            </div>
        </div>
        `
    })
}
main();