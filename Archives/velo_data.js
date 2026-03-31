// =========================================================================
// DONNÉES DE BASE (VELO DATA) - SAVOIR ROULER A VELO
// =========================================================================
const veloData = [
    // --- BLOC 1 : SAVOIR PEDALER ---
    { 
       id: "b1_casque", agre: "BLOC 1", action: "S EQUIPER", nom: "METTRE SON CASQUE", difficulte: "⭐", mode_enfant: "tortue",
       media: { face: "VELO - BLOC1 - CASQUE.webp" }, 
       criteres_realisation: ["Le casque est positionné horizontalement", "La sangle passe sous le menton sans l'étrangler (espace d'un doigt)", "La molette arrière est ajustée"], 
       criteres_reussite: ["Le casque ne bouge pas quand on secoue la tête"] },
    { 
       id: "b1_verif", agre: "BLOC 1", action: "S EQUIPER", nom: "VERIFIER SON VELO", difficulte: "⭐⭐", mode_enfant: "hibou",
       media: { face: "VELO - BLOC1 - VERIF.webp" }, 
       criteres_realisation: ["Vérifier la pression des pneus avec le pouce", "S'assurer que les freins bloquent bien les roues", "Vérifier la hauteur de la selle"], 
       criteres_reussite: ["Savoir identifier les freins, pédales, chaîne, selle et guidon"] },
    {
        id: "b1_demarrer", agre: "BLOC 1", action: "S EQUILIBRER", nom: "DEMARRER UN PIED AU SOL", difficulte: "⭐", mode_enfant: "lievre",
        media: { face: "VELO - BLOC1 - DEMARRER.webp" },
        criteres_realisation: ["Un pied à plat sur le sol, l'autre sur la pédale en position haute", "Pousser fort sur la pédale haute et regarder loin devant", "Poser le 2ème pied sur la pédale"],
        criteres_reussite: ["Démarrer en ligne droite sans zigzaguer"],
        erreurs: [{ titre: "Regard fuyant", indicateur: "Regarde ses pieds", correction: "Regarder un point fixe loin devant" }]
    },
    {
        id: "b1_freiner", agre: "BLOC 1", action: "PILOTER", nom: "RALENTIR ET S ARRETER", difficulte: "⭐⭐", mode_enfant: "tortue",
        media: { face: "VELO - BLOC1 - FREINER.webp" },
        criteres_realisation: ["Utiliser les deux freins en même temps", "Doser le freinage doucement", "Poser un pied à terre juste avant l'arrêt complet"],
        criteres_reussite: ["S'arrêter dans une zone délimitée précise sans déraper"]
    },
    {
        id: "b1_slalom", agre: "BLOC 1", action: "PILOTER", nom: "SLALOM SIMPLE", difficulte: "⭐⭐", mode_enfant: "lievre",
        media: { face: "VELO - BLOC1 - SLALOM.webp" },
        criteres_realisation: ["Le regard anticipe la porte suivante", "Ne pas pédaler pendant le virage", "Garder les pédales à l'horizontale"],
        criteres_reussite: ["Passer toutes les portes sans poser le pied au sol"]
    },
    {
        id: "b1_couloir", agre: "BLOC 1", action: "S EQUILIBRER", nom: "ROULER DANS UN COULOIR ETROIT", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "VELO - BLOC1 - COULOIR.webp" },
        criteres_realisation: ["Rouler lentement dans un espace de 30cm de large sur 10m", "Se mettre en position cavalier (debout sur les pédales)"],
        criteres_reussite: ["Ne pas mordre les lignes ni poser le pied"]
    },
    {
        id: "b1_lacher", agre: "BLOC 1", action: "S EQUILIBRER", nom: "LACHER UNE MAIN", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "VELO - BLOC1 - LACHER.webp" },
        criteres_realisation: ["Garder une bonne vitesse pour l'équilibre", "Serrer le guidon avec l'autre main", "Lever le bras à l'horizontale"],
        criteres_reussite: ["Tenir la position 3 secondes en ligne droite"]
    },

    // --- BLOC 2 : SAVOIR CIRCULER ---
    { 
       id: "b2_panneaux", agre: "BLOC 2", action: "CODE ROUTE", nom: "RECONNAITRE LES PANNEAUX", difficulte: "⭐", mode_enfant: "hibou",
       media: { face: "VELO - BLOC2 - PANNEAUX.webp" }, 
       criteres_realisation: ["Différencier danger (triangle), obligation (rond bleu), interdiction (rond rouge)"], 
       criteres_reussite: ["S'arrêter au Stop", "Céder le passage si nécessaire"] },
    { 
       id: "b2_communiquer", agre: "BLOC 2", action: "COMMUNIQUER", nom: "INDIQUER SA DIRECTION", difficulte: "⭐⭐", mode_enfant: "singe",
       media: { face: "VELO - BLOC2 - BRAS.webp" }, 
       criteres_realisation: ["Prendre l'information derrière soi (regard)", "Tendre le bras du côté où l'on veut tourner", "Garder sa trajectoire"], 
       criteres_reussite: ["Le geste est clair et anticipé avant le virage"] },

    // --- BLOC 3 : SAVOIR ROULER A VELO ---
    { 
       id: "b3_droite", agre: "BLOC 3", action: "CIRCULER EN VILLE", nom: "ROULER A DROITE", difficulte: "⭐⭐", mode_enfant: "lievre",
       media: { face: "VELO - BLOC3 - DROITE.webp" }, 
       criteres_realisation: ["Maintenir sa trajectoire sur le côté droit de la chaussée", "Ne pas raser les trottoirs ou voitures en stationnement"], 
       criteres_reussite: ["Trajectoire fluide et sécurisée"] },
    { 
       id: "b3_giratoire", agre: "BLOC 3", action: "CIRCULER EN VILLE", nom: "PRENDRE UN GIRATOIRE", difficulte: "⭐⭐⭐⭐", mode_enfant: "hibou",
       media: { face: "VELO - BLOC3 - GIRATOIRE.webp" }, 
       criteres_realisation: ["Céder le passage à gauche avant d'entrer", "S'insérer et prendre sa place (ne pas rester écrasé à droite)", "Indiquer sa sortie avec le bras droit"], 
       criteres_reussite: ["Franchissement en sécurité sans mettre le pied à terre"] },
    { 
       id: "b3_groupe", agre: "BLOC 3", action: "ROULER EN GROUPE", nom: "CIRCULER EN FILE INDIENNE", difficulte: "⭐⭐", mode_enfant: "tortue",
       media: { face: "VELO - BLOC3 - GROUPE.webp" }, 
       criteres_realisation: ["Garder ses distances avec le cycliste de devant (1 vélo d'écart)", "Transmettre les informations (voix ou gestes)", "Freiner en douceur"], 
       criteres_reussite: ["Le groupe ne se disloque pas, pas d'accrochage"] }
];

const actionsData = {
    "BLOC 1": [ { nom: "S EQUIPER", img: "B1 - EQUIPEMENT.webp" }, { nom: "S EQUILIBRER", img: "B1 - EQUILIBRE.webp" }, { nom: "PILOTER", img: "B1 - PILOTER.webp" } ],
    "BLOC 2": [ { nom: "CODE ROUTE", img: "B2 - CODE.webp" }, { nom: "COMMUNIQUER", img: "B2 - COMMUNIQUER.webp" } ],
    "BLOC 3": [ { nom: "CIRCULER EN VILLE", img: "B3 - VILLE.webp" }, { nom: "ROULER EN GROUPE", img: "B3 - GROUPE.webp" } ]
};

const warmupsData = [
    {
        id: "warmup_facteur", nom: "LA TOURNÉE DU FACTEUR", img: "ECHAUFFEMENT - FACTEUR.jpg", video: "", pdf: "",
        histoire: `1. Enfourcher le vélo (Hanches) : Lever la jambe très haut.
2. Vérifier les pneus (Chevilles) : Petits sauts sur la pointe des pieds.
3. Distribution (Bras) : Lancer le journal à gauche puis à droite.
4. Chien méchant ! (Cardio) : Courir vite sur place.
5. Pente raide (Cuisses) : Flexions profondes (pédaler en force).`
    }
];

const unitsList = [
    { id: "SRAV_BLOC1", titre: "SITUATIONS BLOC 1 (MILIEU FERMÉ)", img: "UNIT - B1.jpg" },
    { id: "SRAV_BLOC2", titre: "SITUATIONS BLOC 2 (MILIEU FERMÉ)", img: "UNIT - B2.jpg" },
    { id: "SRAV_BLOC3", titre: "SITUATIONS BLOC 3 (VOIE PUBLIQUE)", img: "UNIT - B3.jpg" }
];

const situationsDB = [
    { ua: "SRAV_BLOC1", ref: "SIT 1", nom: "LE COULOIR D'ÉQUILIBRE", img_dispo: "SIT-COULOIR.jpg", imgs_elements: [], but: "Rouler droit", criteres: "Ne pas mordre les lignes", modalites: "1 par 1", orga: "Lignes de 10m", evo1: "Plus étroit", evo2: "D'une seule main" }
];

const sessionsMap = [
    { ua: "SRAV_BLOC1", id: 1, parts: ["SIT 1", "SIT 1 - EVOLUTION 1"] }
];

const brevetData = veloData; // Pour l'attestation SRAV finale