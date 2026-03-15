function main(n) {
    if (n) {
        loadNav();
        loadCont();
    } else if (!n) {
        constructionTimeBaby();
    }
    
}
function loadNav(){
    const nav = document.createElement("nav");
    // const moon_ic = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>';
    // const sun_ic = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    // light_mode = false;
    nav.innerHTML = `
    <div class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="assets/favicon-light.png" alt="Logo" width="auto" height="36" class="d-inline-block align-text-top p-0">
            </a>
            <div class="position-absolute top-50 start-50 translate-middle">
                <div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-3">
                    <a id="navItem" href="https://github.com/tamadoo" target="_blank" class="p-2 rubik-500">
                        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        <span id="nav_text">Github</span>
                    </a>
                    <a id="navItem" href="https://mail.tamado.org" target="_blank" class="p-2 rubik-500">
                        <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                        <span id="nav_text">Mail</span>
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(nav);
}
function loadCont(){
    const header = document.createElement("div");
    header.className = "header";
    header.innerHTML = `
    <a class="header_cont">asd</a>
    `
    document.body.appendChild(header);
}
function constructionTimeBaby() {
    const oldal = document.createElement("div");
    oldal.className = "container d-flex justify-content-center align-items-center min-vh-100 min-vw-100 text-center";
    oldal.id = "const_b";
    oldal.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="assets/wip.gif" class="card-img-top p-4">
        <hr>
        <div class="card-body">
            <h5 class="card-title rubik-700">!!Under construction!!</h5>
            <p class="card-text rubik-500">This site is under development!</p>
            <p class="card-text rubik-500">Planned release date: <b>2026.04.12</b></p>
        </div>
    </div>
    `
    document.body.appendChild(oldal);
}