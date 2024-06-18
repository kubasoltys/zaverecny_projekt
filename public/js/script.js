// získání elemntů a uložení do proměnných
const puvodniMenaElement = document.getElementById('puvodniMena');
const prevedenaMenaElement = document.getElementById('prevedenaMena');
const zMenyElement = document.getElementById('zMeny');
const doMenyElement = document.getElementById('doMeny');
const vysledekElement = document.getElementById('vysledek');

// vytvoření pole s objekty o každé měně
const staty = [ 
    {zkratka: "AED", nazev: "United Arab Emirates Dirham"},
    {zkratka: "ARS", nazev: "Argentina Peso"},
    {zkratka: "AUD", nazev: "Australian Dollar"},
    {zkratka: "BRL", nazev: "Brazilian Real"},
    {zkratka: "CAD", nazev: "Canadian Dollar"},
    {zkratka: "CHF", nazev: "Swiss Franc"},
    {zkratka: "CLP", nazev: "Chilean Peso"},
    {zkratka: "CNY", nazev: "Chinese Yuan"},
    {zkratka: "COP", nazev: "Colombia Peso"},
    {zkratka: "CZK", nazev: "Czech Koruna"},
    {zkratka: "DKK", nazev: "Danish Krone"},
    {zkratka: "EGP", nazev: "Egyptian Pound"},
    {zkratka: "EUR", nazev: "Euro"},
    {zkratka: "GBP", nazev: "British Pound Sterling"},
    {zkratka: "HKD", nazev: "Hong Kong Dollar"},
    {zkratka: "HRK", nazev: "Croatian Kuna"},
    {zkratka: "HUF", nazev: "Hungarian Forint"},
    {zkratka: "IDR", nazev: "Indonesian Rupiah"},
    {zkratka: "ILS", nazev: "Israeli New Shekel"},
    {zkratka: "INR", nazev: "Indian Rupee"},
    {zkratka: "ISK", nazev: "Icelandic Króna"},
    {zkratka: "JPY", nazev: "Japanese Yen"},
    {zkratka: "KRW", nazev: "South Korean Won"},
    {zkratka: "MXN", nazev: "Mexican Peso"},
    {zkratka: "MYR", nazev: "Malaysian Ringgit"},
    {zkratka: "NOK", nazev: "Norwegian Krone"},
    {zkratka: "NZD", nazev: "New Zealand Dollar"},
    {zkratka: "PEN", nazev: "Peruvian Sol"},
    {zkratka: "PHP", nazev: "Philippine Peso"},
    {zkratka: "PLN", nazev: "Polish Złoty"},
    {zkratka: "RON", nazev: "Romanian Leu"},
    {zkratka: "RUB", nazev: "Russian Ruble"},
    {zkratka: "SEK", nazev: "Swedish Krona"},
    {zkratka: "SGD", nazev: "Singapore Dollar"},
    {zkratka: "THB", nazev: "Thai Baht"},
    {zkratka: "TRY", nazev: "Turkish Lira"},
    {zkratka: "TWD", nazev: "Taiwan New Dollar"},
    {zkratka: "UAH", nazev: "Ukrainian Hryvnia"},
    {zkratka: "USD", nazev: "United States Dollar"},
    {zkratka: "UYU", nazev: "Uruguayan Peso"},
    {zkratka: "VND", nazev: "Vietnamese đồng"},
    {zkratka: "ZAR", nazev: "South African Rand"},
];

// pro každý stát v poli se vytvoří dvě možnosti pro výběr měn
staty.forEach(stat => {
    // vytvoření elementů a uložení do proměnných
    const moznost1 = document.createElement('option');
    const moznost2 = document.createElement('option');

    // Nastavíme hodnotu a text obou možností na zkratku a název měny
    moznost1.value = moznost2.value = stat.zkratka;
    moznost1.textContent = moznost2.textContent = `${stat.zkratka} (${stat.nazev})`;

    // proměnné se přidají do elemntů
    zMenyElement.appendChild(moznost1);
    doMenyElement.appendChild(moznost2);

    // přednastavení výchozích hodnot
    zMenyElement.value = "USD";
    doMenyElement.value = "CZK";
});

// funkce pro převod měny, je asynchroní
const prevod = async () => {
    
    const hodnotaMeny = parseFloat(puvodniMenaElement.value); //  získání hodnoty z inputu a převedení na číslo
    // jednotlivé hodnoty měn se nastaví do proměnných
    const zMeny = zMenyElement.value;
    const doMeny = doMenyElement.value;
    
   
    vysledekElement.textContent = "NAČÍTÁNÍ..."; //  jakmile se načítají data z API nastaví se text v proměnné na načítaní...

    
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${zMeny}`); //  import dat z API stránky
    const data = await response.json(); //  převod odpovědi na JSON formát.

    
    const kurz = data.rates[doMeny]; //  získání kurzu pro vybranou měnu
    const prevedenaHodnotaMeny = (hodnotaMeny * kurz); //  převod pomocí kurzu

    
    prevedenaMenaElement.value = prevedenaHodnotaMeny; //  nastavení hodnoty na převedenou hodnotu
    vysledekElement.textContent = `${hodnotaMeny} ${zMeny} = ${prevedenaHodnotaMeny} ${doMeny}`; //  nastavení textu na výsledek převodu
}

// funkce se provede při těchto změnách
puvodniMenaElement.addEventListener('input', prevod);
zMenyElement.addEventListener('change', prevod);
doMenyElement.addEventListener('change', prevod);
window.addEventListener('load', prevod);
