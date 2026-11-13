// --- 1. BASE DE DATOS DE EMPRESAS Y CAMPEONATOS ---
const infoEmpresas = {
    wwe: { nombre: "World Wrestling Entertainment", logo: "assets/img/logo/wwe.png", campeonatos: { "Masculino Individual": ["Undisputed WWE Championship", "World Heavyweight Championship", "Intercontinental Championship", "United States Championship"], "Femenino Individual": ["WWE Women's Championship", "Women's World Championship"], "Parejas": ["World Tag Team Championship", "WWE Tag Team Championship", "WWE Women's Tag Team Championship"] } },
    aew: { nombre: "All Elite Wrestling", logo: "assets/img/logo/aew.png", campeonatos: { "Masculino Individual": ["AEW World Championship", "TNT Championship", "International Championship", "Continental Championship"], "Femenino Individual": ["AEW Women's World Championship", "TBS Championship"], "Parejas y Tercias": ["AEW World Tag Team Championship", "AEW World Trios Championship"] } },
    cmll: { nombre: "Consejo Mundial de Lucha Libre", logo: "assets/img/logo/CMLL.png", campeonatos: { "Masculino Individual": ["Campeonato Mundial Histórico NWA Peso Medio", "Campeonato Mundial Completo del CMLL"], "Femenino Individual": ["Campeonato Mundial Femenil del CMLL", "Campeonato Internacional Femenil del CMLL"], "Parejas y Tercias": ["Campeonato Mundial de Parejas", "Campeonato Mundial de Tríos del CMLL"] } },
    aaa: { nombre: "Lucha Libre AAA Worldwide", logo: "assets/img/logo/AAA.png", campeonatos: { "Masculino Individual": ["Megacampeonato de AAA", "Campeonato Latinoamericano AAA", "Campeonato Mundial de Peso Crucero AAA"], "Femenino Individual": ["Campeonato Reina de Reinas de AAA"], "Parejas y Tercias": ["Campeonato Mundial en Parejas de AAA", "Campeonato Mundial de Tríos de AAA", "Campeonato Mundial en Parejas Mixto"] } },
    njpw: { nombre: "New Japan Pro-Wrestling", logo: "assets/img/logo/NJPW.png", campeonatos: { "Masculino Individual": ["IWGP World Heavyweight Championship","IWGP Global Heavyweight Championship", "NEVER Openweight Championship", "IWGP Junior Heavyweight Championship"], "Femenino Individual": ["IWGP Women's Championship"], "Parejas": ["IWGP Tag Team Championship", "IWGP Junior Heavyweight Tag Team Championship"] } },
    noah: { nombre: "Pro Wrestling NOAH", logo: "assets/img/logo/NOAH.png", campeonatos: { "Masculino Individual": ["GHC Heavyweight Championship", "GHC National Championship", "GHC Junior Heavyweight Championship"], "Femenino Individual": ["GHC Women's Championship"], "Parejas": ["GHC Tag Team Championship", "GHC Junior Heavyweight Tag Team Championship"] } }
};

// --- 2. BASE DE DATOS DE LUCHADORES SIMULADA ---
const baseDatosLuchadores = [
    { nombre: "Alexa Bliss", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "46 kg", altura: "1.55 m", estilo: "Striker / Character", img: "assets/img/roster_wwe/Alexa.png" },
    { nombre: "Asuka", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "62 kg", altura: "1.60 m", estilo: "Striker / Submission", img: "assets/img/roster_wwe/Asuka.png" },
    { nombre: "Axiom", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Española", peso: "77 kg", altura: "1.73 m", estilo: "High Flyer / Técnico", img: "assets/img/roster_wwe/Axiom.png" },
    { nombre: "Bayley", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "54 kg", altura: "1.68 m", estilo: "Brawler / Técnica", img: "assets/img/roster_wwe/Bayley.png" },
    { nombre: "Becky Lynch", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Irlandesa", peso: "61 kg", altura: "1.68 m", estilo: "Brawler / Submission", img: "assets/img/roster_wwe/BeckyLynch.png" },
    { nombre: "Michin & B-Fab", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Brawler / Tag Team", img: "assets/img/roster_wwe/BfabMichin.png" },
    { nombre: "Blake Monroe", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "58 kg", altura: "1.65 m", estilo: "Técnica", img: "assets/img/roster_wwe/Blake.png" },
    { nombre: "Char Alexa", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Facción Dominante", img: "assets/img/roster_wwe/CharAlexa.jpg" },
    { nombre: "Chelsea Green", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Canadiense", peso: "59 kg", altura: "1.70 m", estilo: "Brawler / Character", img: "assets/img/roster_wwe/Chelsea.png" },
    { nombre: "CM Punk", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "99 kg", altura: "1.88 m", estilo: "Striker / Submission", img: "assets/img/roster_wwe/CMPunk.png" },
    { nombre: "Cody Rhodes", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "100 kg", altura: "1.88 m", estilo: "Brawler / Técnico", img: "assets/img/roster_wwe/CODY.png" },
    { nombre: "Dominik Mysterio", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "91 kg", altura: "1.85 m", estilo: "High Flyer / Rudo", img: "assets/img/roster_wwe/dommysterio.png" },
    { nombre: "Dragon Lee", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "75 kg", altura: "1.70 m", estilo: "High Flyer / Lucha Libre", img: "assets/img/roster_wwe/DragonLee.png" },
    { nombre: "Drew McIntyre", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Escocesa", peso: "120 kg", altura: "1.96 m", estilo: "Powerhouse / Brawler", img: "assets/img/roster_wwe/Drew.png" },
    { nombre: "Ethan Page", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Canadiense", peso: "105 kg", altura: "1.88 m", estilo: "Brawler / Powerhouse", img: "assets/img/roster_wwe/EthanPage.png" },
    { nombre: "Fallon Henley", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "59 kg", altura: "1.70 m", estilo: "Brawler", img: "assets/img/roster_wwe/FallonHenley.png" },
    { nombre: "Legado del Fantasma", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "tercias", nacionalidad: "Mexicana", peso: "N/A", altura: "N/A", estilo: "Strong Style", img: "assets/img/roster_wwe/fantasmalegasy.jpg" },
    { nombre: "Finn Bálor", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Irlandesa", peso: "86 kg", altura: "1.80 m", estilo: "Striker / High Flyer", img: "assets/img/roster_wwe/Finn.png" },
    { nombre: "Giulia", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "60 kg", altura: "1.62 m", estilo: "Strong Style / Striker", img: "assets/img/roster_wwe/Giulia.png" },
    { nombre: "Gunther", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Austriaca", peso: "113 kg", altura: "1.93 m", estilo: "Powerhouse / Mat Wrestling", img: "assets/img/roster_wwe/GUNTHER.png" },
    { nombre: "Iyo Sky", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "54 kg", altura: "1.56 m", estilo: "High Flyer / Striker", img: "assets/img/roster_wwe/iyo_sky.png" },
    { nombre: "Jacy Jayne", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "54 kg", altura: "1.68 m", estilo: "Brawler", img: "assets/img/roster_wwe/JACY.png" },
    { nombre: "Jade Cargill", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "73 kg", altura: "1.78 m", estilo: "Powerhouse", img: "assets/img/roster_wwe/jadecargill.png" },
    { nombre: "Jordynne Grace", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "68 kg", altura: "1.60 m", estilo: "Powerhouse", img: "assets/img/roster_wwe/Jordynn.png" },
    { nombre: "Kevin Owens", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Canadiense", peso: "121 kg", altura: "1.83 m", estilo: "Brawler", img: "assets/img/roster_wwe/KevinOwens.png" },
    { nombre: "Kianna James", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "55 kg", altura: "1.70 m", estilo: "Brawler", img: "assets/img/roster_wwe/KiannaJames.png" },
    { nombre: "Kit Wilson", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Inglesa", peso: "85 kg", altura: "1.80 m", estilo: "Brawler", img: "assets/img/roster_wwe/KitWilson.png" },
    { nombre: "Liv Morgan", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "53 kg", altura: "1.60 m", estilo: "Brawler / Character", img: "assets/img/roster_wwe/Liv.png" },
    { nombre: "Lola Vice", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "54 kg", altura: "1.63 m", estilo: "Striker / MMA", img: "assets/img/roster_wwe/Lola.png" },
    { nombre: "Mat Cardona", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "102 kg", altura: "1.88 m", estilo: "Brawler / Charismático", img: "assets/img/roster_wwe/Zack_Ryder.png" },
    { nombre: "MFTs", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "parejas", nacionalidad: "Tongan", peso: "N/A", altura: "N/A", estilo: "Brawler", img: "assets/img/roster_wwe/MFTs.png" },
    { nombre: "Nathan Frazer", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Británica", peso: "83 kg", altura: "1.78 m", estilo: "High Flyer", img: "assets/img/roster_wwe/nathan.png" },
    { nombre: "Nattie", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Canadiense", peso: "61 kg", altura: "1.65 m", estilo: "Submission / Técnica", img: "assets/img/roster_wwe/Nattie.png" },
    { nombre: "Oba Femi", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Nigeriana", peso: "125 kg", altura: "1.98 m", estilo: "Powerhouse", img: "assets/img/roster_wwe/Oba.png" },
    { nombre: "Paige", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Inglesa", peso: "54 kg", altura: "1.73 m", estilo: "Brawler / Submission", img: "assets/img/roster_wwe/paige.png" },
    { nombre: "Penta", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "97 kg", altura: "1.80 m", estilo: "Striker / Lucha Libre", img: "assets/img/roster_wwe/penta.png" },
    { nombre: "PentaJevon", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "parejas", nacionalidad: "Mexicana", peso: "N/A", altura: "N/A", estilo: "High Flyer / Striker", img: "assets/img/roster_wwe/PentaJevon.png" },
    { nombre: "Randy Orton", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "113 kg", altura: "1.96 m", estilo: "Powerhouse / Técnico", img: "assets/img/roster_wwe/Randy.png" },
    { nombre: "Raquel Rodriguez", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "80 kg", altura: "1.83 m", estilo: "Powerhouse", img: "assets/img/roster_wwe/RAQUEL.png" },
    { nombre: "Rey Fenix", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "84 kg", altura: "1.78 m", estilo: "High Flyer", img: "assets/img/roster_wwe/RayFenix.png" },
    { nombre: "Rhea Ripley", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Australiana", peso: "77 kg", altura: "1.70 m", estilo: "Powerhouse", img: "assets/img/roster_wwe/RheaRipley.png" },
    { nombre: "Roman Reigns", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "120 kg", altura: "1.91 m", estilo: "Powerhouse / Brawler", img: "assets/img/roster_wwe/RomanReigns2.png" },
    { nombre: "Seth Rollins", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "102 kg", altura: "1.85 m", estilo: "Técnico / High Flyer", img: "assets/img/roster_wwe/SETH.png" },
    { nombre: "Sol Ruca", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "65 kg", altura: "1.73 m", estilo: "High Flyer / Athletic", img: "assets/img/roster_wwe/Sol.png" },
    { nombre: "Solo Sikoa", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "113 kg", altura: "1.88 m", estilo: "Brawler", img: "assets/img/roster_wwe/SOLO.png" },
    { nombre: "Stephanie Vaquer", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Chilena", peso: "65 kg", altura: "1.65 m", estilo: "Strong Style", img: "assets/img/roster_wwe/StephanieVaquer.png" },
    { nombre: "Tatum Paxley", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "55 kg", altura: "1.65 m", estilo: "Brawler", img: "assets/img/roster_wwe/Tatum.png" },
    { nombre: "The Bloodline", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "faccion", nacionalidad: "Samoana", peso: "N/A", altura: "N/A", estilo: "Facción Dominante", img: "assets/img/roster_wwe/TheBloodline.png" },
    { nombre: "The Miz", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "100 kg", altura: "1.88 m", estilo: "Brawler / Character", img: "assets/img/roster_wwe/TheMiz.png" },
    { nombre: "Tiffany Stratton", pais: "usa", empresa: "wwe", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "65 kg", altura: "1.70 m", estilo: "Powerhouse / Athletic", img: "assets/img/roster_wwe/Tiffany.png" },
    { nombre: "R-Truth", pais: "usa", empresa: "wwe", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "100 kg", altura: "1.88 m", estilo: "Brawler / Comedy", img: "assets/img/roster_wwe/Truth.png" },
    { nombre: "Adam Page & Brodido", pais: "usa", empresa: "aew", genero: "masculino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Brawler / Powerhouse", img: "assets/img/roster_aew/AdamPage&Brodido.avif" },
    { nombre: "Andrade El Idolo", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "95 kg", altura: "1.75 m", estilo: "Técnico / Lucha Libre", img: "assets/img/roster_aew/Andrade.png" },
    { nombre: "Anna Jay", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "60 kg", altura: "1.73 m", estilo: "Brawler / Submission", img: "assets/img/roster_aew/ANNA.png" },
    { nombre: "Brawling Birds", pais: "usa", empresa: "aew", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Tag Team", img: "assets/img/roster_aew/BrawlingBirds.avif" },
    { nombre: "Brodido", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "130 kg", altura: "1.96 m", estilo: "Powerhouse / Striker", img: "assets/img/roster_aew/brodido.avif" },
    { nombre: "Cage & Cope", pais: "usa", empresa: "aew", genero: "masculino", categoria: "parejas", nacionalidad: "Canadiense", peso: "N/A", altura: "N/A", estilo: "Técnico / Tag Team", img: "assets/img/roster_aew/Cage&Cope.png" },
    { nombre: "Darby Allin", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "79 kg", altura: "1.73 m", estilo: "High Flyer / Extreme", img: "assets/img/roster_aew/Darby.png" },
    { nombre: "Divine Dominion", pais: "usa", empresa: "aew", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Powerhouse", img: "assets/img/roster_aew/DivineDominion.png" },
    { nombre: "Don Calis Family", pais: "usa", empresa: "aew", genero: "masculino", categoria: "faccion", nacionalidad: "Mexicana/Canadiense", peso: "N/A", altura: "N/A", estilo: "Facción Dominante", img: "assets/img/roster_aew/DonCalis.png" },
    { nombre: "Harley Cameron", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Australiana", peso: "55 kg", altura: "1.65 m", estilo: "Brawler", img: "assets/img/roster_aew/HARLEY.png" },
    { nombre: "Julia Hart", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "55 kg", altura: "1.70 m", estilo: "Brawler / Striker", img: "assets/img/roster_aew/HART.png" },
    { nombre: "Kazuchika Okada", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "107 kg", altura: "1.91 m", estilo: "Strong Style / Técnico", img: "assets/img/roster_aew/Okada.png" },
    { nombre: "Kenny Omega", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Canadiense", peso: "102 kg", altura: "1.83 m", estilo: "Strong Style / High Flyer", img: "assets/img/roster_aew/KennyOmega.jpg" },
    { nombre: "Kris Statlander", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "75 kg", altura: "1.75 m", estilo: "Powerhouse", img: "assets/img/roster_aew/KRISS.png" },
    { nombre: "Megan Bayne", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "80 kg", altura: "1.80 m", estilo: "Powerhouse", img: "assets/img/roster_aew/MEGAN.png" },
    { nombre: "Mercedes Moné", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "52 kg", altura: "1.65 m", estilo: "Técnica / Striker", img: "assets/img/roster_aew/MERCEDES.png" },
    { nombre: "Mina Shirakawa", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "55 kg", altura: "1.60 m", estilo: "Striker / Submission", img: "assets/img/roster_aew/MINA.png" },
    { nombre: "Sisters of Sin", pais: "usa", empresa: "aew", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Brawler", img: "assets/img/roster_aew/sistersofsin.png" },
    { nombre: "Sky Blue", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "55 kg", altura: "1.63 m", estilo: "High Flyer", img: "assets/img/roster_aew/SKYE.avif" },
    { nombre: "Swerve Strickland & The New Level", pais: "usa", empresa: "aew", genero: "masculino", categoria: "faccion", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Striker / Brawler", img: "assets/img/roster_aew/SwerveStricklandandTheNewLevel.png" },
    { nombre: "The Babes of Wrath", pais: "usa", empresa: "aew", genero: "femenino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Powerhouse", img: "assets/img/roster_aew/TheBabesofWrath.png" },
    { nombre: "The Conglomeration", pais: "usa", empresa: "aew", genero: "masculino", categoria: "tercias", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Strong Style", img: "assets/img/roster_aew/TheConglomeration.png" },
    { nombre: "The Demand", pais: "usa", empresa: "aew", genero: "femenino", categoria: "faccion", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "Brawler", img: "assets/img/roster_aew/STORM.avif" },
    { nombre: "Thunder Rosa", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "54 kg", altura: "1.60 m", estilo: "Striker / Lucha Libre", img: "assets/img/roster_aew/ROSA.png" },
    { nombre: "Tommaso Ciampa", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "91 kg", altura: "1.80 m", estilo: "Striker / Brawler", img: "assets/img/roster_aew/Ciamppa.png" },
    { nombre: "Toni Storm", pais: "usa", empresa: "aew", genero: "femenino", categoria: "individual", nacionalidad: "Neozelandesa", peso: "65 kg", altura: "1.65 m", estilo: "Técnica / Brawler", img: "assets/img/roster_aew/STORM.avif" },
    { nombre: "Will Ospreay", pais: "usa", empresa: "aew", genero: "masculino", categoria: "individual", nacionalidad: "Británica", peso: "95 kg", altura: "1.85 m", estilo: "High Flyer / Strong Style", img: "assets/img/roster_aew/Ospreay.png" },
    { nombre: "Young Bucks", pais: "usa", empresa: "aew", genero: "masculino", categoria: "parejas", nacionalidad: "Estadounidense", peso: "N/A", altura: "N/A", estilo: "High Flyer / Tag Team", img: "assets/img/roster_aew/bugs.avif" },
    { nombre: "Atlantis Jr.", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "85 kg", altura: "1.78 m", estilo: "Técnico / Lucha Libre", img: "assets/img/roster_cmll/AtlantisJr.png" },
    { nombre: "Hechicero", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "98 kg", altura: "1.77 m", estilo: "Rudo / Llaveo", img: "assets/img/roster_cmll/Hechicero.png" },
    { nombre: "Keyra", pais: "mexico", empresa: "cmll", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "56 kg", altura: "1.58 m", estilo: "Lucha Libre / High Flyer", img: "assets/img/roster_cmll/keyra.png" },
    { nombre: "Los Hermanos Chavez", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "parejas", nacionalidad: "Mexicana", peso: "N/A", altura: "N/A", estilo: "Rudo / Clásico", img: "assets/img/roster_cmll/HermanosChavez.jpg" },
    { nombre: "Mascara Dorada", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "78 kg", altura: "1.75 m", estilo: "High Flyer", img: "assets/img/roster_cmll/Mascarador.png" },
    { nombre: "Mistico", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "79 kg", altura: "1.70 m", estilo: "Aéreo / Técnico", img: "assets/img/roster_cmll/mistico3.png" },
    { nombre: "Persephone", pais: "mexico", empresa: "cmll", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "68 kg", altura: "1.70 m", estilo: "Strong Style", img: "assets/img/roster_cmll/Perse.png" },
    { nombre: "Sky Team", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "tercias", nacionalidad: "Mexicana", peso: "N/A", altura: "N/A", estilo: "High Flyer / Aéreo", img: "assets/img/roster_cmll/skyteam.png" },
    { nombre: "Soberano Jr.", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "82 kg", altura: "1.80 m", estilo: "High Flyer / Aéreo", img: "assets/img/roster_cmll/SoberanoJr.png" },
    { nombre: "Templario", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "85 kg", altura: "1.75 m", estilo: "Rudo / Powerhouse", img: "assets/img/roster_cmll/Templario.png" },
    { nombre: "Tessa Blanchart", pais: "mexico", empresa: "cmll", genero: "femenino", categoria: "individual", nacionalidad: "Estadounidense", peso: "57 kg", altura: "1.65 m", estilo: "Striker / Brawler", img: "assets/img/roster_cmll/tessa.png" },
    { nombre: "Titán", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "80 kg", altura: "1.70 m", estilo: "High Flyer / Aéreo", img: "assets/img/roster_cmll/Titán.png" },
    { nombre: "Ultimo Guerrero", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "97 kg", altura: "1.73 m", estilo: "Rudo / Powerhouse", img: "assets/img/roster_cmll/UltimoGuerrero.png" },
    { nombre: "Villano III Jr.", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "84 kg", altura: "1.74 m", estilo: "Rudo / Brawler", img: "assets/img/roster_cmll/villano3.png" },
    { nombre: "Volador Jr.", pais: "mexico", empresa: "cmll", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "82 kg", altura: "1.75 m", estilo: "High Flyer / Aéreo", img: "assets/img/roster_cmll/volador.png" },
    { nombre: "La Catalina", pais: "mexico", empresa: "aaa", genero: "femenino", categoria: "individual", nacionalidad: "Chilena", peso: "65 kg", altura: "1.70 m", estilo: "Powerhouse", img: "assets/img/roster_aaa/catalina.png" },
    { nombre: "La Parka", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "98 kg", altura: "1.83 m", estilo: "Brawler / Carismático", img: "assets/img/roster_aaa/Parka.png" },
    { nombre: "El Grande Americano", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "110 kg", altura: "1.90 m", estilo: "Powerhouse / Rudo", img: "assets/img/roster_aaa/elgrande.png" },
    { nombre: "El Hijo de Dr. Wagner Jr.", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "105 kg", altura: "1.82 m", estilo: "Rudo / Striker", img: "assets/img/roster_aaa/wagner3.png" },
    { nombre: "El Hijo del Vikingo", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "72 kg", altura: "1.69 m", estilo: "High Flyer Extremo", img: "assets/img/roster_aaa/HijodelVikingo.png" },
    { nombre: "Flammer", pais: "mexico", empresa: "aaa", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "60 kg", altura: "1.65 m", estilo: "Ruda / Brawler", img: "assets/img/roster_aaa/Flammer.png" },
    { nombre: "Galeno", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "115 kg", altura: "1.85 m", estilo: "Powerhouse / Brawler", img: "assets/img/roster_aaa/galeno.png" },
    { nombre: "Hiedra", pais: "mexico", empresa: "aaa", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "62 kg", altura: "1.65 m", estilo: "Ruda / Powerhouse", img: "assets/img/roster_aaa/Hiedra.png" },
    { nombre: "Lady Shani", pais: "mexico", empresa: "aaa", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "58 kg", altura: "1.63 m", estilo: "Técnica / Lucha Libre", img: "assets/img/roster_aaa/Shani.png" },
    { nombre: "Laredo Kid", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "77 kg", altura: "1.72 m", estilo: "High Flyer / Aéreo", img: "assets/img/roster_aaa/Laredo.png" },
    { nombre: "Maravilla", pais: "mexico", empresa: "aaa", genero: "femenino", categoria: "individual", nacionalidad: "Mexicana", peso: "60 kg", altura: "1.60 m", estilo: "Ruda / Brawler", img: "assets/img/roster_aaa/Maravilla.png" },
    { nombre: "Pimpinella Scarlata", pais: "mexico", empresa: "aaa", genero: "masculino", categoria: "individual", nacionalidad: "Mexicana", peso: "85 kg", altura: "1.75 m", estilo: "Brawler / Exótico", img: "assets/img/roster_aaa/pimpinella.png" },
    { nombre: "Alex Windsor", pais: "japon", empresa: "njpw", genero: "femenino", categoria: "individual", nacionalidad: "Británica", peso: "60 kg", altura: "1.65 m", estilo: "Striker", img: "assets/img/roster_njpw/alex-windsor.avif" },
    { nombre: "Alex Zayne", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Estadounidense", peso: "88 kg", altura: "1.85 m", estilo: "High Flyer", img: "assets/img/roster_njpw/AlexZayne.png" },
    { nombre: "Aron", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Neozelandesa", peso: "105 kg", altura: "1.80 m", estilo: "Striker / Powerhouse", img: "assets/img/roster_njpw/Aron.png" },
    { nombre: "Douki", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "85 kg", altura: "1.70 m", estilo: "Lucha Libre / Brawler", img: "assets/img/roster_njpw/Douki.png" },
    { nombre: "El Phantasmo", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Canadiense", peso: "85 kg", altura: "1.81 m", estilo: "High Flyer / Striker", img: "assets/img/roster_njpw/El_phantasmo.png" },
    { nombre: "Francesco Akira", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Italiana", peso: "75 kg", altura: "1.75 m", estilo: "High Flyer", img: "assets/img/roster_njpw/Francesco_Akira.png" },
    { nombre: "Gabe Kidd", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Británica", peso: "95 kg", altura: "1.83 m", estilo: "Brawler / Strong Style", img: "assets/img/roster_njpw/GabeKidd.png" },
    { nombre: "Great O khan", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "110 kg", altura: "1.88 m", estilo: "Striker / Mat Wrestling", img: "assets/img/roster_njpw/Great_O_khan.png" },
    { nombre: "Mima Shimoda", pais: "japon", empresa: "njpw", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "65 kg", altura: "1.67 m", estilo: "Brawler", img: "assets/img/roster_njpw/Mima_Shimoda.avif" },
    { nombre: "Sanada", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "100 kg", altura: "1.82 m", estilo: "Técnico / Lucha Libre", img: "assets/img/roster_njpw/Sanada.png" },
    { nombre: "Saya Kamitani", pais: "japon", empresa: "njpw", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "58 kg", altura: "1.68 m", estilo: "High Flyer", img: "assets/img/roster_njpw/Saya_Kamitani.avif" },
    { nombre: "Shun Skywalker", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "90 kg", altura: "1.90 m", estilo: "High Flyer", img: "assets/img/roster_njpw/Shun_Skywalker.png" },
    { nombre: "Syuri", pais: "japon", empresa: "njpw", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "60 kg", altura: "1.64 m", estilo: "Striker / MMA", img: "assets/img/roster_njpw/syuri.avif" },
    { nombre: "Tetsuya Naito", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "102 kg", altura: "1.80 m", estilo: "Técnico / Strong Style", img: "assets/img/roster_njpw/TetsuyaNaito.jpg" },
    { nombre: "Toru Yano", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "115 kg", altura: "1.85 m", estilo: "Comedy / Brawler", img: "assets/img/roster_njpw/Toru_yano.png" },
    { nombre: "Yota Tsuji", pais: "japon", empresa: "njpw", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "105 kg", altura: "1.83 m", estilo: "Powerhouse / Aéreo", img: "assets/img/roster_njpw/YotaTsuji.png" },
    { nombre: "Bushi", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "83 kg", altura: "1.70 m", estilo: "High Flyer", img: "assets/img/roster_noah/bushi.avif" },
    { nombre: "Kazuyuki Fujita", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "90 kg", altura: "1.75 m", estilo: "Striker", img: "assets/img/roster_noah/kazuyuki_fujita.avif" },
    { nombre: "Kenoh", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "95 kg", altura: "1.74 m", estilo: "Striker / Strong Style", img: "assets/img/roster_noah/kenoh.avif" },
    { nombre: "Mirai", pais: "japon", empresa: "noah", genero: "femenino", categoria: "individual", nacionalidad: "Japonesa", peso: "60 kg", altura: "1.63 m", estilo: "Powerhouse / Striker", img: "assets/img/roster_noah/MIRAI.avif" },
    { nombre: "Muhammad Yone", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "110 kg", altura: "1.85 m", estilo: "Striker / Brawler", img: "assets/img/roster_noah/muhammad_yone.avif" },
    { nombre: "Naomichi Marufuji", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "90 kg", altura: "1.76 m", estilo: "Striker / Aéreo", img: "assets/img/roster_noah/NaomichiMarufuji.png" },
    { nombre: "Ozawa", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "95 kg", altura: "1.81 m", estilo: "Brawler", img: "assets/img/roster_noah/ozawa.avif" },
    { nombre: "Reggie Soleil", pais: "japon", empresa: "noah", genero: "femenino", categoria: "individual", nacionalidad: "Francesa", peso: "58 kg", altura: "1.65 m", estilo: "High Flyer", img: "assets/img/roster_noah/reggie_soleil.png" },
    { nombre: "Yoshiki Inamura", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "115 kg", altura: "1.82 m", estilo: "Powerhouse", img: "assets/img/roster_noah/yoshiki_inamura.avif" },
    { nombre: "Yoshitatsu", pais: "japon", empresa: "noah", genero: "masculino", categoria: "individual", nacionalidad: "Japonesa", peso: "102 kg", altura: "1.85 m", estilo: "Striker" , img: "assets/img/roster_noah/yoshitatsu.avif" }
];
   
// --- 3. VARIABLES DEL DOM ---
let empresaActual = 'todas';
let paisActual = '';

const gridRoster = document.getElementById('roster-grid');
const perfilLuchador = document.getElementById('perfil-luchador');
const navEmpresas = document.getElementById('empresas-nav');
const headerEmpresa = document.getElementById('header-empresa');
const panelCampeonatos = document.getElementById('panel-campeonatos');
const galeriaInicio = document.getElementById('galeria-inicio');

// --- 4. INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // 4.1. Tema Claro / Oscuro
    const btnThemeToggle = document.getElementById('btn-theme-toggle');

    // Iconos (Font Awesome) para el botón de tema
    const ICONO_CLARO  = '<i class="fa-solid fa-sun fa-bounce"></i> Modo Claro';
    const ICONO_OSCURO = '<i class="fa-solid fa-moon fa-beat-fade"></i> Modo Oscuro';
    
    // Comprobar si había tema guardado en LocalStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        if(btnThemeToggle) btnThemeToggle.innerHTML = ICONO_OSCURO;
    }

    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') !== 'light';
            if (isDark) {
                document.body.setAttribute('data-theme', 'light');
                btnThemeToggle.innerHTML = ICONO_OSCURO;
                localStorage.setItem('theme', 'light');
            } else {
                document.body.removeAttribute('data-theme');
                btnThemeToggle.innerHTML = ICONO_CLARO;
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // 4.2. Detectar Contexto de País
    const bodyPais = document.body.getAttribute('data-pais');
    if (bodyPais) {
        paisActual = bodyPais;
        generarBotonesEmpresas(paisActual);
        aplicarFiltros();
        
        document.getElementById('filtro-genero').addEventListener('change', aplicarFiltros);
        document.getElementById('filtro-categoria').addEventListener('change', aplicarFiltros);
    }

    // 4.3. Buscador Global
    const formBusqueda = document.getElementById('form-busqueda');
    if (formBusqueda) {
        formBusqueda.addEventListener('submit', (e) => {
            e.preventDefault();
            buscarPorNombre();
        });
    }
});

// --- 5. LOGICA DE EMPRESAS Y FILTROS ---
function generarBotonesEmpresas(pais) {
    if (!navEmpresas) return;
    
    let htmlEmpresas = '<ul>';
    if (pais === 'usa') {
        htmlEmpresas += `<li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('wwe')">WWE</button></li>
                         <li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('aew')">AEW</button></li>`;
    } else if (pais === 'mexico') {
        htmlEmpresas += `<li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('cmll')">CMLL</button></li>
                         <li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('aaa')">AAA</button></li>`;
    } else if (pais === 'japon') {
        htmlEmpresas += `<li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('njpw')">NJPW</button></li>
                         <li><button type="button" class="btn-pais" onclick="seleccionarEmpresa('noah')">NOAH</button></li>`;
    }
    htmlEmpresas += '</ul>';
    navEmpresas.innerHTML = htmlEmpresas;
}

function seleccionarEmpresa(empresaKey) {
    empresaActual = empresaKey;
    const info = infoEmpresas[empresaKey];

    // Cambiar cabecera
    document.getElementById('logo-empresa').src = info.logo;
    document.getElementById('nombre-empresa').textContent = info.nombre;
    headerEmpresa.classList.remove('oculto');
    panelCampeonatos.classList.remove('oculto');
    
    // Poblar Campeonatos con Imágenes Desplegables
    const contenedorCamps = document.getElementById('lista-campeonatos');
    contenedorCamps.innerHTML = '';
    
    for (const [categoria, lista] of Object.entries(info.campeonatos)) {
        let htmlCat = `<div class="cat-campeonato">${categoria}</div><ul class="lista-camp-ul">`;
        
        lista.forEach(camp => { 
            const nombreFormateado = camp.replace(/ /g, '_').toLowerCase() + '.png';
            const imgPlaceholder = `https://via.placeholder.com/300x150/1e293b/fbbf24?text=${encodeURIComponent(camp)}`;
            
            htmlCat += `
                <li class="camp-item" onclick="toggleCampImg(this)">
                    🏆 ${camp} <span>▼</span>
                    <img class="camp-img" src="assets/img/campeonatos/${nombreFormateado}" onerror="this.src='assets/img/campeonatos/${imgPlaceholder}'" alt="${camp}">
                </li>`; 
        });
        
        htmlCat += `</ul>`;
        contenedorCamps.innerHTML += htmlCat;
    }

    aplicarFiltros();
}

window.toggleCampImg = function(elementoLista) {
    const imagen = elementoLista.querySelector('.camp-img');
    const icono = elementoLista.querySelector('span');
    
    if (imagen.classList.contains('mostrar')) {
        imagen.classList.remove('mostrar');
        icono.textContent = '▼';
    } else {
        imagen.classList.add('mostrar');
        icono.textContent = '▲';
    }
}

function aplicarFiltros() {
    if (!gridRoster) return;

    const generoFiltro = document.getElementById('filtro-genero').value;
    const categoriaFiltro = document.getElementById('filtro-categoria').value;

    const resultados = baseDatosLuchadores.filter(luchador => {
        const coincidePais = luchador.pais === paisActual;
        const coincideEmpresa = (empresaActual === 'todas') || (luchador.empresa === empresaActual);
        const coincideGenero = (generoFiltro === 'todos') || (luchador.genero === generoFiltro);
        const coincideCategoria = (categoriaFiltro === 'todos') || (luchador.categoria === categoriaFiltro);
        return coincidePais && coincideEmpresa && coincideGenero && coincideCategoria;
    });

    renderizarRoster(resultados);
}

function renderizarRoster(arregloLuchadores) {
    perfilLuchador.classList.add('oculto');
    if (headerEmpresa && empresaActual !== 'todas') headerEmpresa.classList.remove('oculto');
    if (navEmpresas) navEmpresas.classList.remove('oculto');
    gridRoster.classList.remove('oculto');
    gridRoster.innerHTML = '';

    if (arregloLuchadores.length === 0) {
        gridRoster.innerHTML = '<p>No hay luchadores registrados con estos filtros.</p>';
        return;
    }

    arregloLuchadores.forEach(luchador => {
        const card = document.createElement('div');
        // Dinamiza la clase CSS para que agarre el var(--brand-color) de la empresa
        card.className = `card-luchador card-${luchador.empresa.toLowerCase()}`;
        card.innerHTML = `
            <img src="${luchador.img}" alt="${luchador.nombre}" onerror="this.src='https://via.placeholder.com/300x400/222/fff?text=Sin+Foto'">
            <h3>${luchador.nombre}</h3>
            <p class="tag-empresa">${luchador.empresa.toUpperCase()}</p><br>
            <button type="button" onclick='animarYMostrarPerfil(this, ${JSON.stringify(luchador)})'>Ver Ficha</button>
        `;
        gridRoster.appendChild(card);
    });
}

// --- 6. ANIMACIÓN DE GIRO Y MOSTRAR PERFIL ---
window.animarYMostrarPerfil = function(btnElement, luchador) {
    const card = btnElement.closest('.card-luchador');
    card.classList.add('spin-flip');
    
    // Espera que termine la animación (800ms)
    setTimeout(() => {
        mostrarPerfil(luchador);
        card.classList.remove('spin-flip');
    }, 800);
}

window.mostrarPerfil = function(luchador) {
    if (galeriaInicio) galeriaInicio.classList.add('oculto');
    if (gridRoster) gridRoster.classList.add('oculto');
    if (panelCampeonatos) panelCampeonatos.classList.add('oculto');
    if (headerEmpresa) headerEmpresa.classList.add('oculto');
    if (navEmpresas) navEmpresas.classList.add('oculto');
    if (document.getElementById('filtros-nav')) document.getElementById('filtros-nav').classList.add('oculto');
    
    perfilLuchador.classList.remove('oculto');

    perfilLuchador.innerHTML = `
        <img class="perfil-img" src="${luchador.img}" alt="${luchador.nombre}" onerror="this.src='https://via.placeholder.com/300x400/222/fff?text=Sin+Foto'">
        <div class="perfil-info">
            <h2>${luchador.nombre}</h2>
            <span class="tag-empresa">${luchador.empresa.toUpperCase()} - ${luchador.pais.toUpperCase()}</span>
            <p><strong>Categoría:</strong> <span style="text-transform: capitalize;">${luchador.categoria}</span> (${luchador.genero})</p>
            <p><strong>Nacionalidad:</strong> ${luchador.nacionalidad}</p>
            <p><strong>Estilo de Lucha:</strong> ${luchador.estilo}</p>
            <p><strong>Altura:</strong> ${luchador.altura}</p>
            <p><strong>Peso:</strong> ${luchador.peso}</p>
            <br><br>
            <button class="btn-pais" onclick="location.reload()">Regresar al Roster</button>
        </div>
    `;
};

// --- 7. BUSCADOR ---
function buscarPorNombre() {
    const query = document.getElementById('busqueda').value.toLowerCase().trim();
    const mensajeError = document.getElementById('mensaje-error');
    if (!query) return;

    const resultado = baseDatosLuchadores.find(l => l.nombre.toLowerCase().includes(query));

    if (resultado) {
        mensajeError.classList.add('oculto');
        mostrarPerfil(resultado);
    } else {
        mensajeError.classList.remove('oculto');
        perfilLuchador.classList.add('oculto');
    }
}
