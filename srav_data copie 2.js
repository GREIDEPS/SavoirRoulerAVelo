// =========================================================================
// DONNÉES SAVOIR ROULER À VÉLO (SRAV)
// =========================================================================
// Les défis Maillots (Blanc, Vert, Jaune)
const maillotsData = [
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 1", nom_exercice: "Le facteur", competences: "Piloter - Lâcher une main",
        but: "Etre capable de lâcher une main pour attraper un objet, pour le poser, le lancer.",
        contenus: "Organiser un circuit avec une zone centrale dans laquelle on place des balles de tennis de couleur différente. Chaque couleur correspond à une caisse/boite aux lettres située aux extrémités du plateau. Le facteur doit distribuer les bonnes lettres dans les bonnes boites.",
        evolutions: "Plusieurs facteurs en même temps pour travailler les croisements et les trajectoires.\nRétrécir la boite ou l'éloigner.\nLe facteur donne sa lettre à un autre facteur qui la distribue."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 1", nom_exercice: "Les déménageurs", competences: "Piloter - Lâcher une main",
        but: "Etre capable de lâcher une main pour attraper un objet, le transporter et le poser.",
        contenus: "Réaliser un parcours avec un objet dans une main. Cet objet ne doit pas pouvoir se bloquer dans les rayons ou être un danger en cas de chute.",
        evolutions: "Augmenter la distance.\nDéfinir des portes de passage."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 1", nom_exercice: "Le relais", competences: "Vitesse - Equilibre",
        but: "Aller le plus vite possible.",
        contenus: "Parcours en relais par équipes de 2 ou 3 sur le principe d'un biathlon. Slalom à l'aller / Ligne droite au retour.",
        evolutions: "Rétrécir les zones de transmission de relais."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 1", nom_exercice: "Le miroir", competences: "Trajectoire - Vitesse",
        but: "Etre capable de reproduire les trajectoires et l'allure d'un autre cycliste.",
        contenus: "Par 2. Un enfant dicte le parcours (trajectoire, allure, zone d'arrêt), l'autre doit faire la même chose.",
        evolutions: "On peut créer des portes par lesquelles le binôme doit passer."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 1", nom_exercice: "Les animaux", competences: "Equilibre - Vitesse",
        but: "Adapter son allure aux consignes demandées.",
        contenus: "Tourner en rond ou sur un parcours précis. Un signal sonore annonce l'animal à imiter.\nLe guépard : on pédale le plus vite possible.\nLa tortue : on pédale le plus lentement possible.\nLe singe : on slalome.\nLa chouette : on se déplace en regardant derrière soi.\nLa girafe : on se déplace debout sur les pédales sans s'asseoir sur la selle.",
        evolutions: "On peut associer un animal à une couleur de plot que l'enseignant lève. Les élèves doivent donc pédaler en levant la tête."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 2", nom_exercice: "Le loup", competences: "Vitesse - Equilibre - Trajectoire",
        but: "Etre capable de maitriser sa vitesse pour attraper ou fuir.",
        contenus: "Jeu du loup avec un loup et des petits cochons (les autres cyclistes). Tous les enfants évoluent dans une zone délimitée. Le loup doit toucher les autres enfants pour qu'ils deviennent le loup.\nIl est interdit de lâcher son vélo.",
        evolutions: "La maison du loup : on intègre une maison (matérialisée par des cerceaux / plots) pour les petits cochons dans laquelle le loup n'a pas le droit d'entrer. Les petits cochons n'ont le droit de rester que 10 secondes dans la maison."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 2", nom_exercice: "1 2 3 Soleil", competences: "Freinage - Equilibre",
        but: "Etre capable de s'arrêter au bon moment sans perdre l'équilibre.",
        contenus: "Le maitre du jeu annonce 1 2 3 Soleil. Les autres cyclistes doivent s'arrêter à Soleil et poser un pied par terre en gardant le contrôle du vélo. Si un enfant ne s'arrête pas ou s'il perd le contrôle il repart au départ. Le premier arrivé devient le maitre du jeu.",
        evolutions: "Donner un signal visuel pour faire travailler la prise d'information de l'enfant."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 2", nom_exercice: "Les 3 petits cochons", competences: "Démarrage rapide - Freinage",
        but: "Etre capable de s'arrêter dans une zone définie.",
        contenus: "Placer de nombreux cerceaux dans l'espace de jeu. Ce sont les maisons des petits cochons. Au signal du loup (l'enseignant), les petits cochons ont 5 secondes pour trouver une maison, se garer à l'intérieur et poser les 2 pieds par terre pour être en sécurité. Si le loup touche un petit cochon avant d'être dans une maison, il perd une vie.",
        evolutions: "Retirer des maisons à chaque tour."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 2", nom_exercice: "Le parcours", competences: "Maitrise de l'ensemble des fondamentaux",
        but: "Etre capable de réaliser le parcours du bloc 1.",
        contenus: "Créer le parcours du bloc 1 pour valider l'acquisition de toutes les compétences travaillées.",
        evolutions: "Le parcours peut se faire sous la forme d'un relais."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 3", nom_exercice: "Le couloir", competences: "Trajectoire",
        but: "Etre capable de maitriser sa trajectoire dans un espace réduit.",
        contenus: "Passer dans un couloir étroit matérialisé par des plots ou un marquage au sol.",
        evolutions: "Le couloir est de plus en plus étroit."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 3", nom_exercice: "L'escargot", competences: "Equilibre - Lenteur",
        but: "Etre capable de rouler le plus lentement possible, sans poser le pied par terre.",
        contenus: "Parcours rectiligne dans un couloir plus ou moins large de 10 à 15 m. Chaque enfant part à tour de rôle. Celui qui met le plus de temps à parcourir la distance a gagné.",
        evolutions: "Diminuer la taille du couloir. S'arrêter pendant 3 secondes lors d'un signal visuel ou sonore de l'enseignant avant de repartir."
    },
    {
        maillot: "MAILLOT BLANC", etape: "ÉTAPE 3", nom_exercice: "L'objet", competences: "Lâcher une main",
        but: "Etre capable de lâcher une main pour toucher un objet.",
        contenus: "Sur un parcours linéaire ou avec des virages légers l'enfant doit venir toucher un objet avec sa main. L'objet peut être tenu par l'enseignant ou posé sur une table/chaise.",
        evolutions: "On peut matérialiser une porte symbolisant l'obligation de mettre les 2 mains sur le guidon. L'enfant doit donc toucher l'objet, puis remettre sa main avant de passer la porte."
    },

    // --- AUTRES MAILLOTS (Conservés pour éviter les erreurs si vous cliquez dessus) ---
    { maillot: "MAILLOT VERT", etape: "ÉTAPE 1", nom_exercice: "Balle au camp", competences: "Partager l'espace / Piloter / Lâcher une main", but: "Ramener le plus d'objets possible dans son camp.", contenus: "Deux équipes. Des balles ou petits objets sont placés dans une zone neutre au centre. Aller chercher un objet à la fois.", evolutions: "Intégrer des objets rapportant des points différents." },
    { maillot: "MAILLOT JAUNE", etape: "ÉTAPE 1", nom_exercice: "Les pinces à linge", competences: "Pilotage / Lâcher une main", but: "Attraper les pinces à linge des autres enfants tout en gardant les siennes.", contenus: "Chaque enfant a des pinces à linge accrochées dans le dos ou sur les manches. Interdiction formelle de tirer sur les vêtements ou de lâcher les deux mains.", evolutions: "Jouer par équipes de couleurs différentes." }
];
const sravData = [
    // --- BLOC 1 : SAVOIR PÉDALER ---
    { 
       id: "b1_casque", agre: "BLOC 1", action: "S'ÉQUIPER", nom: "METTRE SON CASQUE", difficulte: "⭐", mode_enfant: "chouette",
       media: { face: "SRAV - BLOC 1 - CASQUE.webp" }, 
       criteres_realisation: ["Choisir un casque à sa taille", "Ajuster les sangles sous le menton"], 
       criteres_reussite: ["Le casque ne bouge pas quand je secoue la tête", "Règle des 2 doigts sous le menton"] },
    {
        id: "b1_nommer", agre: "BLOC 1", action: "CONNAÎTRE SON VÉLO", nom: "LES PIÈCES DU VÉLO", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - PIECES.webp" },
        criteres_realisation: ["Observer son vélo de près"],
        criteres_reussite: ["Nommer : cadre, potence, guidon, roues, fourche, dérailleurs, freins, pédales, selle."] },
    {
        id: "b1_securite", agre: "BLOC 1", action: "CONNAÎTRE SON VÉLO", nom: "ÉLÉMENTS DE SÉCURITÉ", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - SECURITE.webp" },
        criteres_realisation: ["Faire le tour du vélo"],
        criteres_reussite: ["Identifier : éclairage, freins, catadioptres, sonnette."] },
    {
        id: "b1_verifier", agre: "BLOC 1", action: "CONNAÎTRE SON VÉLO", nom: "VÉRIFIER LE VÉLO", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - VERIFICATION.webp" },
        criteres_realisation: ["Tester les freins en poussant le vélo", "Appuyer sur les pneus"],
        criteres_reussite: ["Vérifier : freins, serrage potence/selle/roues, pression pneus."] },
    {
        id: "b1_monter", agre: "BLOC 1", action: "PILOTER", nom: "MONTER ET DESCENDRE", difficulte: "⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 1 - MONTER.webp" },
        criteres_realisation: ["Tenir les deux freins", "Passer la jambe par-dessus la selle"],
        criteres_reussite: ["Monter et descendre à l'arrêt sans tomber ni perdre l'équilibre."] },
    {
        id: "b1_demarrer", agre: "BLOC 1", action: "PILOTER", nom: "DÉMARRER", difficulte: "⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 1 - DEMARRER.webp" },
        criteres_realisation: ["Pédale motrice en haut et en avant", "Pousser fort d'un coup"],
        criteres_reussite: ["Démarrer un pied au sol sans zigzaguer au démarrage."] },
    {
        id: "b1_lignedroite", agre: "BLOC 1", action: "PILOTER", nom: "LIGNE DROITE", difficulte: "⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 1 - LIGNE DROITE.webp" },
        criteres_realisation: ["Regarder loin devant", "Pédaler régulièrement"],
        criteres_reussite: ["Conduire son vélo en ligne droite sans sortir de la zone."] },
    {
        id: "b1_slalom", agre: "BLOC 1", action: "PILOTER", nom: "SLALOM SIMPLE", difficulte: "⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - SLALOM.webp" },
        criteres_realisation: ["Regarder le prochain plot", "Anticiper la trajectoire sans freiner brusquement"],
        criteres_reussite: ["Conduire son vélo sur le parcours sans toucher les plots."] },
    {
        id: "b1_freiner", agre: "BLOC 1", action: "PILOTER", nom: "FREINER ET S'ARRÊTER", difficulte: "⭐⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 1 - FREINER.webp" },
        criteres_realisation: ["Utiliser les deux freins simultanément", "Doser le freinage (ne pas bloquer la roue)"],
        criteres_reussite: ["Ralentir, freiner et s'arrêter précisément dans la zone délimitée."] },
    {
        id: "b1_appui", agre: "BLOC 1", action: "PILOTER", nom: "ENLEVER UN APPUI", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - LACHER APPUI.webp" },
        criteres_realisation: ["Garder une trajectoire droite", "Lâcher brièvement une main ou un pied"],
        criteres_reussite: ["Rouler en maintenant l'équilibre avec un appui en moins."] },
    {
        id: "b1_couloir", agre: "BLOC 1", action: "PILOTER", nom: "COULOIR ÉTROIT", difficulte: "⭐⭐⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 1 - COULOIR.webp" },
        criteres_realisation: ["Regarder loin", "Garder les pédales à l'horizontale (position cavalier)"],
        criteres_reussite: ["Rouler dans un couloir étroit de 30 cm sur 10 m sans sortir."] },
    {
        id: "b1_infos", agre: "BLOC 1", action: "PILOTER", nom: "PRENDRE L'INFO", difficulte: "⭐⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - INFOS.webp" },
        criteres_realisation: ["Tourner la tête brièvement", "Maintenir le guidon droit"],
        criteres_reussite: ["Prendre une information en roulant (ex: dire la couleur montrée derrière)."] },
    {
        id: "b1_virage", agre: "BLOC 1", action: "PILOTER", nom: "VIRAGE 90°", difficulte: "⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - VIRAGE.webp" },
        criteres_realisation: ["Anticiper le virage du regard", "Mettre la pédale intérieure en haut"],
        criteres_reussite: ["Effectuer un virage à 90° sans dévier de sa voie."] },
    {
        id: "b1_obstacle", agre: "BLOC 1", action: "PILOTER", nom: "FRANCHIR UN OBSTACLE", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - OBSTACLE.webp" },
        criteres_realisation: ["Se lever de la selle (danseuse)", "Garder bras et jambes souples (amortisseurs)"],
        criteres_reussite: ["Franchir un petit obstacle sans s'arrêter et sans tomber."] },
    {
        id: "b1_vitesses", agre: "BLOC 1", action: "PILOTER", nom: "CHANGER DE VITESSE", difficulte: "⭐⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 1 - VITESSES.webp" },
        criteres_realisation: ["Continuer à pédaler sans forcer pendant le changement"],
        criteres_reussite: ["Changer ses vitesses pour s'adapter au terrain avant l'obstacle."] },

    // --- BLOC 2 : SAVOIR CIRCULER ---
    {
        id: "b2_espaces", agre: "BLOC 2", action: "ESPACES ET PANNEAUX", nom: "IDENTIFIER LES ESPACES", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - ESPACES.webp" },
        criteres_realisation: ["Observer son environnement"],
        criteres_reussite: ["Identifier les espaces de circulation adaptés aux vélos (pistes, bandes, voies vertes)."] },
    {
        id: "b2_panneaux", agre: "BLOC 2", action: "ESPACES ET PANNEAUX", nom: "LIRE LES PANNEAUX", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - PANNEAUX.webp" },
        criteres_realisation: ["Faire attention à la forme (triangle, rond) et la couleur"],
        criteres_reussite: ["Reconnaître et comprendre les panneaux de signalisation (stop, céder le passage...)."] },
    {
        id: "b2_respect", agre: "BLOC 2", action: "CODE DE LA ROUTE", nom: "RESPECT DU CODE", difficulte: "⭐⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 2 - RESPECT.webp" },
        criteres_realisation: ["Marquer un arrêt total avec un pied au sol au STOP", "Ralentir au Cédez-le-passage"],
        criteres_reussite: ["Circuler en respectant le code de la route mis en place sur le parcours."] },
    {
        id: "b2_autres", agre: "BLOC 2", action: "PARTAGER L'ESPACE", nom: "TENIR COMPTE DES AUTRES", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - AUTRES USAGERS.webp" },
        criteres_realisation: ["Regarder autour de soi", "Garder une distance de sécurité"],
        criteres_reussite: ["Adapter son déplacement en fonction des piétons et autres cyclistes."] },
    {
        id: "b2_direction", agre: "BLOC 2", action: "COMMUNIQUER", nom: "INDIQUER SA DIRECTION", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 2 - DIRECTION.webp" },
        criteres_realisation: ["Tendre le bras du côté où l'on souhaite tourner", "Garder sa trajectoire d'une main"],
        criteres_reussite: ["Communiquer pour faire connaître sa direction aux autres."] },
    {
        id: "b2_identifier", agre: "BLOC 2", action: "COMMUNIQUER", nom: "COMPRENDRE LES AUTRES", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - IDENTIFIER DIRECTION.webp" },
        criteres_realisation: ["Regarder les gestes des cyclistes devant soi"],
        criteres_reussite: ["Identifier les changements de direction des autres cyclistes et anticiper."] },

    // --- BLOC 3 : SAVOIR ROULER ---
    {
        id: "b3_pistes", agre: "BLOC 3", action: "CIRCULER EN VILLE", nom: "EMPRUNTER LES PISTES", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 3 - PISTES.webp" },
        criteres_realisation: ["Chercher la signalisation au sol ou les panneaux"],
        criteres_reussite: ["Emprunter la piste ou bande cyclable et ne jamais rouler sur les trottoirs."] },
    {
        id: "b3_droite", agre: "BLOC 3", action: "CIRCULER EN VILLE", nom: "ROULER À DROITE", difficulte: "⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 3 - DROITE.webp" },
        criteres_realisation: ["Se positionner sur le tiers droit de la chaussée", "Faire attention aux portières"],
        criteres_reussite: ["Rouler à droite sur la voie publique en toute sécurité."] },
    {
        id: "b3_groupe", agre: "BLOC 3", action: "ROULER ENSEMBLE", nom: "ROULER EN GROUPE", difficulte: "⭐⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 3 - GROUPE.webp" },
        criteres_realisation: ["Garder l'espace d'au moins un vélo avec celui de devant", "Ne pas dépasser sans prévenir"],
        criteres_reussite: ["Rouler en groupe de manière fluide et adaptée à la circulation."] },
    {
        id: "b3_intersections", agre: "BLOC 3", action: "GÉRER LES INTERSECTIONS", nom: "PRENDRE SA PLACE", difficulte: "⭐⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 3 - INTERSECTIONS.webp" },
        criteres_realisation: ["Prendre l'info derrière soi", "Tendre le bras", "Se déporter légèrement si besoin"],
        criteres_reussite: ["Prendre sa place sur la chaussée, notamment dans les giratoires et intersections."] }
];

// =========================================================================
// DONNÉES NAVIGATION VIGNETTES (ACCUEIL)
// =========================================================================
const actionsData = {
    "BLOC 1": [
        { nom: "S'ÉQUIPER", img: "SRAV - MENU - EQUIPER.webp" },
        { nom: "CONNAÎTRE SON VÉLO", img: "SRAV - MENU - CONNAITRE.webp" },
        { nom: "PILOTER", img: "SRAV - MENU - PILOTER.webp" }
    ],
    "BLOC 2": [
        { nom: "ESPACES ET PANNEAUX", img: "SRAV - MENU - PANNEAUX.webp" },
        { nom: "CODE DE LA ROUTE", img: "SRAV - MENU - CODE.webp" },
        { nom: "PARTAGER L'ESPACE", img: "SRAV - MENU - PARTAGER.webp" },
        { nom: "COMMUNIQUER", img: "SRAV - MENU - COMMUNIQUER.webp" }
    ],
    "BLOC 3": [
        { nom: "CIRCULER EN VILLE", img: "SRAV - MENU - VILLE.webp" },
        { nom: "ROULER ENSEMBLE", img: "SRAV - MENU - GROUPE.webp" },
        { nom: "GÉRER LES INTERSECTIONS", img: "SRAV - MENU - INTERSECTIONS.webp" }
    ]
};

// =========================================================================
// DONNÉES JEUX / ATELIERS VÉLO (Remplace les échauffements)
// =========================================================================
const warmupsData = [
    {
        id: "jeu_soleil",
        nom: "1, 2, 3... SOLEIL VÉLO !",
        img: "SRAV - JEU - SOLEIL.jpg",
        pdf: "SRAV - JEU - SOLEIL.pdf",
        video: "",
        histoire: `Le classique 1, 2, 3 Soleil adapté au vélo !\n\n1. Départ sur une ligne. L'enseignant tourne le dos.\n2. L'enseignant dit "1, 2, 3..." les élèves pédalent vers lui.\n3. Au "Soleil !", l'enseignant se retourne. Les cyclistes doivent freiner et s'arrêter sans poser le pied immédiatement (travail de l'équilibre à basse vitesse).\n4. Si un cycliste bouge ou pose le pied trop vite, il recule de 3 pas.`
    },
    {
        id: "jeu_facteur",
        nom: "LE FACTEUR (LÂCHER DE MAIN)",
        img: "SRAV - JEU - FACTEUR.jpg",
        pdf: "SRAV - JEU - FACTEUR.pdf",
        video: "",
        histoire: `Un jeu pour apprendre à lâcher une main.\n\n1. Placer des cerceaux sur des tables ou cônes le long du parcours (les boîtes aux lettres).\n2. Les élèves ont des petites balles en mousse (le courrier) dans leur main droite.\n3. En roulant, ils doivent lancer la balle dans le cerceau sans s'arrêter de pédaler.\n4. Refaire l'exercice avec la main gauche.`
    },
    {
        id: "jeu_limace",
        nom: "LA COURSE DE LIMACES",
        img: "SRAV - JEU - LIMACES.jpg",
        pdf: "SRAV - JEU - LIMACES.pdf",
        video: "",
        histoire: `Une course où la lenteur est la clé du succès !\n\n1. Les élèves se placent sur une ligne de départ avec un couloir de 5 à 10 mètres devant eux.\n2. Au signal, tout le monde démarre. Le but est de franchir la ligne d'arrivée en dernier.\n3. Il est interdit de faire demi-tour ou de sortir de son couloir.\n4. Si un élève pose le pied au sol, il est éliminé ou reçoit une pénalité de temps (doit avancer de 2 mètres).`
    },
    {
        id: "jeu_miroir",
        nom: "LE MIROIR MAGIQUE",
        img: "SRAV - JEU - MIROIR.jpg",
        pdf: "SRAV - JEU - MIROIR.pdf",
        video: "",
        histoire: `Apprendre à observer tout en restant maître de sa trajectoire.\n\n1. Les élèves se mettent par binômes : un "Guide" devant et un "Miroir" derrière.\n2. Le Guide roule à allure modérée et effectue des gestes simples (lever le bras gauche, toucher son casque, se mettre debout sur les pédales).\n3. Le Miroir doit imiter les gestes du Guide le plus fidèlement possible sans perdre l'équilibre.\n4. On inverse les rôles au bout de 2 minutes de parcours.`
    },
    {
        id: "jeu_slalom_duo",
        nom: "LE SLALOM SYNCHRO",
        img: "SRAV - JEU - SLALOM SYNCHRO.jpg",
        pdf: "SRAV - JEU - SLALOM SYNCHRO.pdf",
        video: "",
        histoire: `Coordination et gestion de l'espace à deux.\n\n1. Installer deux parcours de slalom identiques et parallèles (environ 1,5m d'écart).\n2. Deux élèves partent en même temps et doivent franchir chaque porte de slalom exactement au même moment.\n3. Ils doivent adapter leur vitesse l'un à l'autre : si l'un ralentit, l'autre doit freiner pour rester à sa hauteur.\n4. Le défi est réussi s'ils franchissent la ligne d'arrivée "roue dans roue" sans avoir touché de plots.`
    }
];

const unitsList = [];
const situationsDB = [];
const brevetData = [];