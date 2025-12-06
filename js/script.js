//---World Page Interaction Script 

// The Champion Data "Database"
const championData = {
    mipha: {
        name: "MIPHA - ZORA CHAMPION",
        desc: "Pilot of Divine Beast Vah Ruta. The princess of the Zora race, possessing unique healing abilities. She held a deep affection for Link, crafting the Zora armor for him."
    },
    daruk: {
        name: "DARUK - GORON CHAMPION",
        desc: "Pilot of Divine Beast Vah Rudania. A powerful warrior with a heart of gold. His defensive power, Daruk's Protection, is impenetrable against any attack."
    },
    revali: {
        name: "REVALI - RITO CHAMPION",
        desc: "Pilot of Divine Beast Vah Medoh. An expert archer with an arrogant streak. His ability, Revali's Gale, creates powerful updrafts to soar into the sky."
    },
    urbosa: {
        name: "URBOSA - GERUDO CHAMPION",
        desc: "Pilot of Divine Beast Vah Naboris. A fierce warrior and chief of the Gerudo. She could summon lightning with a snap of her fingers to strike down foes."
    }
};

// Function to Show Data (Triggered by onclick in HTML)
function showChampData(champKey) {
    const panel = document.getElementById("champ-info-panel");
    const nameText = document.getElementById("panel-name");
    const descText = document.getElementById("panel-desc");

    const data = championData[champKey];

    nameText.innerText = data.name;
    descText.innerText = data.desc;

    panel.classList.add("active");
    
    const allChars = document.querySelectorAll('.char-cutout');
    allChars.forEach(char => {
        char.classList.remove('selected');
    });

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

//---Login Page Interaction Script
function handleLogin(event) {
    event.preventDefault(); // Stops the page from refreshing

    // 1. Get the values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 2. Check if empty
    if (username === "" || password === "") {
        alert("⚠️ ACCESS DENIED: Please enter both username and password.");
        return;
    }

    // 3. Success Message
    alert("✅ ACCESS GRANTED. Welcome back, " + username + ".");
    
    // 4. Redirect to Hub (Simulated)
    window.location.href = "hub.html";
}