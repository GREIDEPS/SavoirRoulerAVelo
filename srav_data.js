// =========================================================================
// DONNÉES SAVOIR ROULER À VÉLO (SRAV)
// =========================================================================
// Les défis Maillots (Blanc, Vert, Jaune)
const maillotsData = [
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 1", 
        nom_exercice: "Arrêt sur image",
        video: "MAILLOT BLANC - ETAPE 1 - ARRET IMAGE.mp4",
        competences: [
            "Démarrer un pied au sol", 
            "Conduire un vélo en ligne droite", 
            "Ralentir, freiner et s'arrêter dans une zone délimitée"
        ],
        but: [
            "Effectuer l'aller-retour en respectant les arrêts sans poser le pied au 1/2 tour"
        ],
        contenus: [
            "Réguler sa vitesse", 
            "Freiner avec les 2 mains en même temps", 
            "Ralentir pour faire le 1/2 tour en regardant loin devant", 
            "Rouler en ligne droite devant soi"
        ],
        evolutions: [
            "S'arrêter avant de faire le 1/2 tour", 
            "Alterner les pieds d'appuis au départ", 
            "Utiliser 2 doigts maximum sur les freins", 
            "Utiliser le frein arrière au 1er plot et le frein avant au 2e"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 1", 
        nom_exercice: "Entonnoir",
        video: "MAILLOT BLANC - ETAPE 1 - ENTONNOIR.mp4",
        competences: [
            "Démarrer un pied au sol", 
            "Conduire un vélo en ligne droite", 
            "Ralentir, freiner et s'arrêter dans une zone délimitée"
        ],
        but: [
            "Sortir de l'entonnoir sans faire tomber les plots"
        ],
        contenus: [
            "Réguler sa vitesse", 
            "Conserver son équilibre lors du pédalage", 
            "Regarder loin devant"
        ],
        evolutions: [
            "Jouer sur la largeur de l'entonnoir", 
            "Réaliser l'exercice en lâchant une main"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 1", 
        nom_exercice: "Slalom",
        video: "MAILLOT BLANC - ETAPE 1 - SLALOM.mp4",
        competences: [
            "Conduire un vélo sur un parcours de slalom simple", 
            "Prendre des informations en roulant"
        ],
        but: [
            "Effectuer le slalom sans renverser les plots et sans poser le pied à terre"
        ],
        contenus: [
            "Orienter son regard vers le prochain plot", 
            "Réguler sa vitesse", 
            "Lever la pédale du côté du virage", 
            "Arrêter de pédaler au moment du virage"
        ],
        evolutions: [
            "Réaliser 5 parcours de longueur différente", 
            "Remplacer les plots par des piquets plus hauts"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 1", 
        nom_exercice: "Défi d'équipe",
        video: "MAILLOT BLANC - ETAPE 1 - DEFI EQUIPE.mp4",
        competences: [
            "Démarrer un pied au sol", 
            "Conduire un vélo sur un parcours de slalom", 
            "Prendre des informations en roulant"
        ],
        but: [
            "Effectuer le slalom sans renverser les plots pour faire gagner des points à son équipe"
        ],
        contenus: [
            "Orienter son regard vers le prochain plot", 
            "Réguler sa vitesse", 
            "Arrêter de pédaler au moment du virage"
        ],
        evolutions: [
            "Changer les équipes", 
            "Intégrer un temps limite pour réaliser le slalom"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 2", 
        nom_exercice: "Virage",
        video: "MAILLOT BLANC - ETAPE 2 - VIRAGE.mp4",
        competences: [
            "Effectuer un virage à 90°", 
            "Changer ses vitesses", 
            "Prise d'information en roulant (sonore et/ou visuelle)"
        ],
        but: [
            "Laisser de la distance avec celui qui est devant", 
            "Changer de vitesse à chaque plot"
        ],
        contenus: [
            "Maitriser sa vitesse en regardant son partenaire", 
            "Tourner en s'équilibrant", 
            "Visualiser le trajet de la roue"
        ],
        evolutions: [
            "Alterner avec un signal visuel (prise d'information)", 
            "Faire passer le parcours sur un sol différent (herbe / sable)", 
            "Modifier la distance du parcours", 
            "Intégrer un chronomètre"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 2", 
        nom_exercice: "\"Jacques a dit\"",
        video: "MAILLOT BLANC - ETAPE 2 - JACQUES A DIT.mp4",
        competences: [
            "Rouler en enlevant un appui", 
            "Prendre des informations", 
            "Etre attentif en roulant"
        ],
        but: [
            "Réaliser la bonne action en fonction de Jacques a dit"
        ],
        contenus: [
            "Se concentrer pour effectuer la bonne action", 
            "Créer de la vitesse pour rester en équilibre", 
            "Gérer son espace"
        ],
        evolutions: [
            "Consignes demandées", 
            "Mettre en place un système d'élimination"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 2", 
        nom_exercice: "L'escargot",
        video: "MAILLOT BLANC - ETAPE 2 - ESCARGOT.mp4",
        competences: [
            "Conduire son vélo en ligne droite", 
            "S'équilibrer", 
            "Ralentir"
        ],
        but: [
            "Rouler le plus doucement possible sans poser le pied au sol"
        ],
        contenus: [
            "Se mettre droit sur son vélo", 
            "Donner de légers coups de pédales pour génerer un peu de vitesse", 
            "Positionner ses 2 doigts sur les freins pour pouvoir les utiliser rapidement"
        ],
        evolutions: [
            "Enlever un appui", 
            "Réaliser l'exercice assis sur le vélo"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 2", 
        nom_exercice: "Chaise musicale",
        video: "MAILLOT BLANC - ETAPE 2 - CHAISE MUSICALE.mp4",
        competences: [
            "S'équilibrer", 
            "Ralentir", 
            "Etre à l'écoute"
        ],
        but: [
            "Au coup de sifflet, se rapprocher d'un plot libre pour ne pas se faire éliminer"
        ],
        contenus: [
            "Etre attentif au coup de sifflet", 
            "Diriger son vélo vers un plot libre"
        ],
        evolutions: [
            "Varier le nombre de plots"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 2", 
        nom_exercice: "1, 2, 3 soleil",
        video: "MAILLOT BLANC - ETAPE 2 - 1 2 3 SOLEIL.mp4",
        competences: [
            "Conduire son vélo en ligne droite", 
            "S'équilibrer", 
            "Démarrer un pied au sol", 
            "Ralentir, freiner, s'arrêter"
        ],
        but: [
            "Etre le premier à franchir la ligne"
        ],
        contenus: [
            "Se mettre droit sur son vélo", 
            "Etre attentif au signal sonore", 
            "Freiner rapidement pour poser un appui au sol"
        ],
        evolutions: [
            "Enlever un pied", 
            "Jouer sur la taille de l'espace"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 3", 
        nom_exercice: "Le cavalier",
        video: "MAILLOT BLANC - ETAPE 3 - CAVALIER.mp4",
        competences: [
            "Rouler dans un couloir étroit en position cavalier", 
            "Conduire son vélo en ligne droite", 
            "S'équilibrer"
        ],
        but: [
            "Rouler dans les 4 couloirs sans sortir et sans toucher de plots"
        ],
        contenus: [
            "Adapter sa vitesse", 
            "S'équilibrer, se fléchir", 
            "Reculer le bassin au niveau de la selle"
        ],
        evolutions: [
            "Varier la largeur des couloirs", 
            "Temps limite pour franchir les 4 couloirs"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 3", 
        nom_exercice: "Tout terrain",
        video: "MAILLOT BLANC - ETAPE 3 - TOUT TERRAIN.mp4",
        competences: [
            "Franchir un petit obstacle"
        ],
        but: [
            "Franchir les obstacles sans toucher avec la roue avant"
        ],
        contenus: [
            "Adapter sa vitesse", 
            "Soulever la roue avant en basculant le poids du corps vers l'arrière", 
            "Décoller ses fesses du vélo et tirer le guidon vers soi"
        ],
        evolutions: [
            "Placer une latte surélevée", 
            "Mettre un obstacle dans un virage", 
            "Varier les intervalles entre obstacles", 
            "Soulever la roue arrière", 
            "Monter sur un trottoir"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 3", 
        nom_exercice: "Le peloton",
        video: "MAILLOT BLANC - ETAPE 3 - PELOTON.mp4",
        competences: [
            "Prendre des informations en roulant"
        ],
        but: [
            "Se trouver dans la zone au même moment"
        ],
        contenus: [
            "S'adapter à l'espace en groupe", 
            "Réguler sa vitesse en fonction des autres", 
            "Définir un chef de groupe", 
            "Prendre des informations visuelles"
        ],
        evolutions: [
            "Modifier la taille du groupe", 
            "Modifier la longueur du circuit"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉTAPE 3", 
        nom_exercice: "Attaque dans le peloton",
        video: "MAILLOT BLANC - ETAPE 3 - ATTAQUE PELOTON.mp4",
        competences: [
            "Prendre des informations en roulant", 
            "Changer ses vitesses", 
            "Prendre un virage à 90°"
        ],
        but: [
            "Suivre \"l'attaque\" du meneur"
        ],
        contenus: [
            "Etre prêt à accélerer en poussant fort sur les pédales", 
            "Se mettre en danseuse au moment de l'accélération", 
            "Freiner rapidement"
        ],
        evolutions: [
            "Changer de meneur", 
            "Intégrer un virage à 90°"
        ]
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉVALUATION", 
        nom_exercice: "Evaluation 1",
        competences: ["Toutes"],
        but: ["Réaliser le parcours sans erreur"],
        contenus: [],
        evolutions: []
    },
    {
        maillot: "MAILLOT BLANC", 
        etape: "ÉVALUATION", 
        nom_exercice: "Evaluation 2",
        competences: ["Toutes"],
        but: ["Réaliser le parcours sans erreur"],
        contenus: [],
        evolutions: []
    },
    { 
        maillot: "MAILLOT VERT", 
        etape: "ÉTAPE 1", 
        nom_exercice: "Balle au camp", 
        video: "MAILLOT VERT - ETAPE 1 - BALLE AU CAMP.mp4",
        competences: ["Partager l'espace", "Piloter", "Lâcher une main"], 
        but: ["Ramener le plus d'objets possible dans son camp"], 
        contenus: ["Deux équipes", "Des balles ou petits objets sont placés dans une zone neutre au centre", "Aller chercher un objet à la fois"], 
        evolutions: ["Intégrer des objets rapportant des points différents"] 
    },
    { 
        maillot: "MAILLOT JAUNE", 
        etape: "ÉTAPE 1", 
        nom_exercice: "Les pinces à linge", 
        video: "MAILLOT JAUNE - ETAPE 1 - PINCES A LINGE.mp4",
        competences: ["Pilotage", "Lâcher une main"], 
        but: ["Attraper les pinces à linge des autres enfants tout en gardant les siennes"], 
        contenus: ["Chaque enfant a des pinces à linge accrochées dans le dos ou sur les manches", "Interdiction formelle de tirer sur les vêtements ou de lâcher les deux mains"], 
        evolutions: ["Jouer par équipes de couleurs différentes"] 
    }
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
        media: { face: "SRAV - BLOC 1 - PIECES.jpg" },
        criteres_realisation: ["Observer son vélo de près"],
        criteres_reussite: ["Nommer : cadre, potence, guidon, roues, fourche, dérailleurs, freins, pédales, selle."] },
    {
        id: "b1_securite", agre: "BLOC 1", action: "CONNAÎTRE SON VÉLO", nom: "ÉLÉMENTS DE SÉCURITÉ", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - SECURITE.jpg" },
        criteres_realisation: ["Faire le tour du vélo"],
        criteres_reussite: ["Identifier : éclairage, freins, catadioptres, sonnette."] },
    {
        id: "b1_verifier", agre: "BLOC 1", action: "CONNAÎTRE SON VÉLO", nom: "VÉRIFIER LE VÉLO", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - VERIFICATION.jpg" },
        criteres_realisation: ["Tester les freins en poussant le vélo", "Appuyer sur les pneus"],
        criteres_reussite: ["Vérifier : freins, serrage potence/selle/roues, pression pneus."] },
    {
        id: "b1_monter", agre: "BLOC 1", action: "PILOTER", nom: "MONTER ET DESCENDRE", difficulte: "⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 1 - MONTER.jpg" },
        criteres_realisation: ["Tenir les deux freins", "Passer la jambe par-dessus la selle"],
        criteres_reussite: ["Monter et descendre à l'arrêt sans tomber ni perdre l'équilibre."] },
    {
        id: "b1_demarrer", agre: "BLOC 1", action: "PILOTER", nom: "DÉMARRER", difficulte: "⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 1 - DEMARRER.jpg" },
        criteres_realisation: ["Pédale motrice en haut et en avant", "Pousser fort d'un coup"],
        criteres_reussite: ["Démarrer un pied au sol sans zigzaguer au démarrage."] },
    {
        id: "b1_lignedroite", agre: "BLOC 1", action: "PILOTER", nom: "LIGNE DROITE", difficulte: "⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 1 - LIGNE DROITE.jpg" },
        criteres_realisation: ["Regarder loin devant", "Pédaler régulièrement"],
        criteres_reussite: ["Conduire son vélo en ligne droite sans sortir de la zone."] },
    {
        id: "b1_slalom", agre: "BLOC 1", action: "PILOTER", nom: "SLALOM SIMPLE", difficulte: "⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - SLALOM.jpg" },
        criteres_realisation: ["Regarder le prochain plot", "Anticiper la trajectoire sans freiner brusquement"],
        criteres_reussite: ["Conduire son vélo sur le parcours sans toucher les plots."] },
    {
        id: "b1_freiner", agre: "BLOC 1", action: "PILOTER", nom: "FREINER ET S'ARRÊTER", difficulte: "⭐⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 1 - FREINER.jpg" },
        criteres_realisation: ["Utiliser les deux freins simultanément", "Doser le freinage (ne pas bloquer la roue)"],
        criteres_reussite: ["Ralentir, freiner et s'arrêter précisément dans la zone délimitée."] },
    {
        id: "b1_appui", agre: "BLOC 1", action: "PILOTER", nom: "ENLEVER UN APPUI", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - LACHER APPUI.jpg" },
        criteres_realisation: ["Garder une trajectoire droite", "Lâcher brièvement une main ou un pied"],
        criteres_reussite: ["Rouler en maintenant l'équilibre avec un appui en moins."] },
    {
        id: "b1_couloir", agre: "BLOC 1", action: "PILOTER", nom: "COULOIR ÉTROIT", difficulte: "⭐⭐⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 1 - COULOIR.jpg" },
        criteres_realisation: ["Regarder loin", "Garder les pédales à l'horizontale (position cavalier)"],
        criteres_reussite: ["Rouler dans un couloir étroit de 30 cm sur 10 m sans sortir."] },
    {
        id: "b1_infos", agre: "BLOC 1", action: "PILOTER", nom: "PRENDRE L'INFO", difficulte: "⭐⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 1 - INFOS.jpg" },
        criteres_realisation: ["Tourner la tête brièvement", "Maintenir le guidon droit"],
        criteres_reussite: ["Prendre une information en roulant (ex: dire la couleur montrée derrière)."] },
    {
        id: "b1_virage", agre: "BLOC 1", action: "PILOTER", nom: "VIRAGE 90°", difficulte: "⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - VIRAGE.jpg" },
        criteres_realisation: ["Anticiper le virage du regard", "Mettre la pédale intérieure en haut"],
        criteres_reussite: ["Effectuer un virage à 90° sans dévier de sa voie."] },
    {
        id: "b1_obstacle", agre: "BLOC 1", action: "PILOTER", nom: "FRANCHIR UN OBSTACLE", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 1 - OBSTACLE.jpg" },
        criteres_realisation: ["Se lever de la selle (danseuse)", "Garder bras et jambes souples (amortisseurs)"],
        criteres_reussite: ["Franchir un petit obstacle sans s'arrêter et sans tomber."] },
    {
        id: "b1_vitesses", agre: "BLOC 1", action: "PILOTER", nom: "CHANGER DE VITESSE", difficulte: "⭐⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 1 - VITESSES.jpg" },
        criteres_realisation: ["Continuer à pédaler sans forcer pendant le changement"],
        criteres_reussite: ["Changer ses vitesses pour s'adapter au terrain avant l'obstacle."] },

    // --- BLOC 2 : SAVOIR CIRCULER ---
    {
        id: "b2_espaces", agre: "BLOC 2", action: "ESPACES ET PANNEAUX", nom: "IDENTIFIER LES ESPACES", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - ESPACES.jpg" },
        criteres_realisation: ["Observer son environnement"],
        criteres_reussite: ["Identifier les espaces de circulation adaptés aux vélos (pistes, bandes, voies vertes)."] },
    {
        id: "b2_panneaux", agre: "BLOC 2", action: "ESPACES ET PANNEAUX", nom: "LIRE LES PANNEAUX", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - PANNEAUX.jpg" },
        criteres_realisation: ["Faire attention à la forme (triangle, rond) et la couleur"],
        criteres_reussite: ["Reconnaître et comprendre les panneaux de signalisation (stop, céder le passage...)."] },
    {
        id: "b2_respect", agre: "BLOC 2", action: "CODE DE LA ROUTE", nom: "RESPECT DU CODE", difficulte: "⭐⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 2 - RESPECT.jpg" },
        criteres_realisation: ["Marquer un arrêt total avec un pied au sol au STOP", "Ralentir au Cédez-le-passage"],
        criteres_reussite: ["Circuler en respectant le code de la route mis en place sur le parcours."] },
    {
        id: "b2_autres", agre: "BLOC 2", action: "PARTAGER L'ESPACE", nom: "TENIR COMPTE DES AUTRES", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - AUTRES USAGERS.jpg" },
        criteres_realisation: ["Regarder autour de soi", "Garder une distance de sécurité"],
        criteres_reussite: ["Adapter son déplacement en fonction des piétons et autres cyclistes."] },
    {
        id: "b2_direction", agre: "BLOC 2", action: "COMMUNIQUER", nom: "INDIQUER SA DIRECTION", difficulte: "⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 2 - DIRECTION.jpg" },
        criteres_realisation: ["Tendre le bras du côté où l'on souhaite tourner", "Garder sa trajectoire d'une main"],
        criteres_reussite: ["Communiquer pour faire connaître sa direction aux autres."] },
    {
        id: "b2_identifier", agre: "BLOC 2", action: "COMMUNIQUER", nom: "COMPRENDRE LES AUTRES", difficulte: "⭐⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 2 - IDENTIFIER DIRECTION.jpg" },
        criteres_realisation: ["Regarder les gestes des cyclistes devant soi"],
        criteres_reussite: ["Identifier les changements de direction des autres cyclistes et anticiper."] },

    // --- BLOC 3 : SAVOIR ROULER ---
    {
        id: "b3_pistes", agre: "BLOC 3", action: "CIRCULER EN VILLE", nom: "EMPRUNTER LES PISTES", difficulte: "⭐", mode_enfant: "chouette",
        media: { face: "SRAV - BLOC 3 - PISTES.jpg" },
        criteres_realisation: ["Chercher la signalisation au sol ou les panneaux"],
        criteres_reussite: ["Emprunter la piste ou bande cyclable et ne jamais rouler sur les trottoirs."] },
    {
        id: "b3_droite", agre: "BLOC 3", action: "CIRCULER EN VILLE", nom: "ROULER À DROITE", difficulte: "⭐", mode_enfant: "tortue",
        media: { face: "SRAV - BLOC 3 - DROITE.jpg" },
        criteres_realisation: ["Se positionner sur le tiers droit de la chaussée", "Faire attention aux portières"],
        criteres_reussite: ["Rouler à droite sur la voie publique en toute sécurité."] },
    {
        id: "b3_groupe", agre: "BLOC 3", action: "ROULER ENSEMBLE", nom: "ROULER EN GROUPE", difficulte: "⭐⭐", mode_enfant: "guepard",
        media: { face: "SRAV - BLOC 3 - GROUPE.jpg" },
        criteres_realisation: ["Garder l'espace d'au moins un vélo avec celui de devant", "Ne pas dépasser sans prévenir"],
        criteres_reussite: ["Rouler en groupe de manière fluide et adaptée à la circulation."] },
    {
        id: "b3_intersections", agre: "BLOC 3", action: "GÉRER LES INTERSECTIONS", nom: "PRENDRE SA PLACE", difficulte: "⭐⭐⭐⭐", mode_enfant: "singe",
        media: { face: "SRAV - BLOC 3 - INTERSECTIONS.jpg" },
        criteres_realisation: ["Prendre l'info derrière soi", "Tendre le bras", "Se déporter légèrement si besoin"],
        criteres_reussite: ["Prendre sa place sur la chaussée, notamment dans les giratoires et intersections."] }
];

// =========================================================================
// DONNÉES NAVIGATION VIGNETTES (ACCUEIL)
// =========================================================================
const actionsData = {
    "BLOC 1": [
        { nom: "S'ÉQUIPER", img: "SRAV - MENU - EQUIPER.jpg" },
        { nom: "CONNAÎTRE SON VÉLO", img: "SRAV - MENU - CONNAITRE.jpg" },
        { nom: "PILOTER", img: "SRAV - MENU - PILOTER.jpg" }
    ],
    "BLOC 2": [
        { nom: "ESPACES ET PANNEAUX", img: "SRAV - MENU - PANNEAUX.jpg" },
        { nom: "CODE DE LA ROUTE", img: "SRAV - MENU - CODE.jpg" },
        { nom: "PARTAGER L'ESPACE", img: "SRAV - MENU - PARTAGER.jpg" },
        { nom: "COMMUNIQUER", img: "SRAV - MENU - COMMUNIQUER.jpg" }
    ],
    "BLOC 3": [
        { nom: "CIRCULER EN VILLE", img: "SRAV - MENU - VILLE.jpg" },
        { nom: "ROULER ENSEMBLE", img: "SRAV - MENU - GROUPE.jpg" },
        { nom: "GÉRER LES INTERSECTIONS", img: "SRAV - MENU - INTERSECTIONS.jpg" }
    ]
};

// =========================================================================
// DONNÉES JEUX / ATELIERS VÉLO
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