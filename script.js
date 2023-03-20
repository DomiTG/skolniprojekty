const users = [
    {
        email: "dominik@student.spsezatec.cz",
        password: "heslo123"
    },
    {
        email: "andrej@babis.cz",
        password: "andrej478"
    },
    {
        email: "daniel@centrum.cz",
        password: "qwdbuqiwqdwnio"
    }
]

let currentUser = null;

document.getElementById("form").onsubmit = login;

function login(e) {

    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if(!emailInput.value || !passwordInput.value) return alert("Musíš vyplnit email i heslo!");

    const user = users.filter((mapUser) => mapUser.email === emailInput.value)[0];
    if(!user || user.password !== passwordInput.value) return alert("Byla zadána neplatná emailova adresa nebo heslo.");

    alert("Byl jsi úspěšně přihlášen.");
    currentUser = user;

    const loggedAs = document.getElementById("logged_as");
    const user_panel_password = document.getElementById("user_panel_password");

    loggedAs.innerText = "Přihlášen jako: " + currentUser.email;
    user_panel_password.innerText = "Heslo: " + currentUser.password;
}