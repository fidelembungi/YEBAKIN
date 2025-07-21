function foc() {
    $("#username").focus();
}

function theme(formulaire) {
    $("#centre").load("./Pages/" + formulaire + ".html");
}

function arts(formulaire) {
    $("#centre").load("./Pages/art/" + formulaire + ".html");
}

function transport(formulaire) {
    $("#centre").load("./Pages/transport/" + formulaire + ".html");
}

function hebergements() {
    location.href = "./hebergements.html";
}

function connecter() {
    location.href = "./connexion.html";
}

function Evenements() {
    location.href = "./Evenements.html";
}

function sites() {
    location.href = "./sites.html";
}

function infos() {
    location.href = "./infos.html";
}

function savoirs() {
    location.href = "./savoirs.html";
}

function cartos() {
    location.href = "./cartographie.html";
}

function Apropos() {
    location.href = "./Apropos.html";
}

function place_publique() {
    location.href = "./place_publique.html";
}

function super_marches() {
    location.href = "./super_marches.html";
}
function boutique_marches() {
    location.href = "./boutique_marches.html";
}

function grand_marches() {
    location.href = "./grand_marches.html";
}
function art_marches() {
    location.href = "./art_marches.html";
}
function loisir() {
    location.href = "./loisir.html";
}

function shopping() {
    location.href = "./shopping_menu.html";
}

function Edifices_publiques() {
    location.href = "./edifice_menu.html";
}

function art() {
    location.href = "./art.html";
}

function excursion() {
    location.href = "./excursion.html";
}

function services() {
    location.href = "./services.html";
}

function Randonnees() {
    location.href = "./Randonnees.html";
}

function kinois() {
    location.href = "./kinois.html";
}

function visit() {
    location.href = "./visit.html";
}

function eglise() {
    location.href = "./eglise.html";
}

function ministere() {
    location.href = "./ministere.html";
}

function batiment() {
    location.href = "./batiment.html";
}

function themathique() {
    location.href = "./thematique.html";
}

function resto_tradi() {
    location.href = "./resto_tradi.html";
}
function street_food() {
    location.href = "./street_food.html";
}
function presentation() {
    location.href = "./presentation.html";
}

function restaurants() {
    location.href = "./restaurant_menu.html";
}

function transports() {
    location.href = "./transport.html";
}

function contacts() {
    location.href = "./contacts.html";
}

function Accueil() {
    location.href = "./index.html";
}

function charger(formulaire) {
    $("#hotels").load("./Pages/hotels/" + formulaire + ".html");
}

function edifices(formulaire) {
    $("#centre").load("./Pages/edifices/" + formulaire + ".html");
}

function boite(formulaire) {
    $("#centre").load("./Pages/kin_night/" + formulaire + ".html");
}

function boites() {
    location.href = "./kin_by_night.html"
}

function sitess(formulaire) {
    $("#centre").load("./Pages/sitess/" + formulaire + ".html");
}

function info(formulaire) {
    $("#centre").load("./Pages/informations/" + formulaire + ".html");
}

function districts(formulaire) {
    $("#centre").load("./Pages/districts/" + formulaire + ".html");
}

function place(formulaire) {
    $("#centre").load("./Pages/place_publiques/" + formulaire + ".html");
}

function resto(formulaire) {
    $("#centre").load("./Pages/restaurants/" + formulaire + ".html");
}

function connection() {
    var nom = "";
    var mdp = "";

    nom = $("#username").val();
    mdp = $("#mdp").val();

    if (nom !== "") {
        if (mdp !== "") {
            if (mdp.length >= 8) {

                $.ajax({
                    url: "./model/scripts.php",
                    type: "POST",
                    data: {
                        "ent": "connexion",
                        "nom": nom,
                        "mdp": mdp
                    },
                    error: function (data) {
                        console.log(data);
                    },
                    success: function (data) {

                        var donnees = JSON.parse(data);

                        if (donnees[0] !== 0) {

                            $("#username").val("");
                            $("#mdp").val("");

                            sessionStorage.setItem('prenom', donnees[1]);

                            location.href = "./Pages/Admin.html";
                        } else {
                            alert("Nom d'utilisateur ou mot de passe invalide");
                            $("#username").val("");
                            $("#mdp").val("");
                            $("#username").focus();
                        }
                    }
                });
            } else {
                alert("Veuillez entrez aux moins 8 caractères");
            }
        } else {
            alert("Veuillez entrez un mot de passe");
        }
    } else {
        alert("Veuillez Entrer votre nom d'utilisateur");
    }
}

function validation() {

    if (!sessionStorage.getItem("prenom") || sessionStorage.getItem("prenom") == "") {
        location.href = "../evenements.html";
    } else {

        $('#username').html((sessionStorage.getItem("prenom")));
        // $('#profile').attr("src", "./u_images/" + sessionStorage.getItem("photo_profile"));
        if (sessionStorage.getItem("prenom").toLowerCase() == "admin") {
            // $("#gerer").css({
            //     display: "block"
            // });

        } else {
            // $("#gerer").css({
            //     display: "none"
            // });

        }
        if (sessionStorage.getItem("photo_profile") == "") {
            // $('#profile').attr("src", "./u_images/default.jpg");

        } else {
            // $('#profile').attr("src", "./u_images/" + sessionStorage.getItem("photo_profile"));

        }
    }
}

function Ajout_evenement() {
    var g_titre = "";
    var p_titre = "";
    var titre = "";
    var organisateur = "";
    var p_normal = "";
    var p_vip = "";
    var d_prix = "";
    var duree = "";
    var date = "";
    var heure = "";
    var h_depart = "";
    var h_arriver = "";
    var distance = "";
    var lieu = "";
    var images = "";
    var details = "";

    var fichier = new FormData();
    images = $("#images")[0].files;
    g_titre = $("#g_titre").val();
    p_titre = $("#p_titre").val();
    titre = $("#titre").val();
    organisateur = $("#organisateur").val();
    p_normal = $("#p_normal").val();
    p_vip = $("#p_vip").val();
    d_prix = $("#d_prix").val();
    duree = $("#duree").val();
    date = $("#date").val();
    heure = $("#heure").val();
    h_depart = $("#h_depart").val();
    h_arriver = $("#h_arriver").val();
    distance = $("#distance").val();
    lieu = $("#lieu").val();
    details = $("#details").val();


    var photo = images[0];
    if (g_titre !== "") {
        if (p_titre !== "") {
            if (titre !== "") {
                if (organisateur !== "") {
                    if ($("#images").val() !== "") {
                        if (details !== "") {

                            fichier.append("ent", "Ajout_evenements");
                            fichier.append("g_titre", g_titre);
                            fichier.append("p_titre", p_titre);
                            fichier.append("titre", titre);
                            fichier.append("organisateur", organisateur);
                            fichier.append("p_normal", p_normal);
                            fichier.append("p_vip", p_vip);
                            fichier.append("d_prix", d_prix);
                            fichier.append("duree", duree);
                            fichier.append("date", date);
                            fichier.append("heure", heure);
                            fichier.append("h_depart", h_depart);
                            fichier.append("h_arriver", h_arriver);
                            fichier.append("distance", distance);
                            fichier.append("lieu", lieu);
                            fichier.append("details", details);
                            fichier.append("photo", photo);

                            $.ajax({
                                url: "../model/scripts.php",
                                type: "POST",
                                data: fichier,
                                contentType: false,
                                processData: false,
                                error: function (data) {
                                    console.log(data);
                                },
                                success: function (data) {

                                    var donnees = JSON.parse(data);

                                    if (donnees[0] !== 0) {

                                        alert("L'Evenement avec titre " + " " + g_titre + " " + "est enregistré avec succès");
                                        $("#id").val("");
                                        $("#p_titre").val("");
                                        $("#g_titre").val("");
                                        $("#titre").val("");
                                        $("#organisateur").val("");
                                        $("#p_normal").val("");
                                        $("#p_vip").val("");
                                        $("#d_prix").val("");
                                        $("#duree").val("");
                                        $("#date").val("");
                                        $("#heure").val("");
                                        $("#h_depart").val("");
                                        $("#h_arriver").val("");
                                        $("#distance").val("");
                                        $("#lieu").val("");
                                        $("#details").val("");
                                        $("#images").val("");
                                        evenementTable();

                                    } else {
                                        alert("Erreur d'enregistrement");
                                    }
                                }
                            });

                        } else {
                            alert("Veuillez entrer les détails de l'événement");
                        }
                    } else {
                        alert("Veuillez Sélectionner l'image de l'événements");
                    }
                } else {
                    alert("Veuillez entrer le nom de l'organisateur");
                }
            } else {
                alert("Veuillez ajouter le titre")
            }
        } else {
            alert("Veuillez Ajouter le petit titre");
        }
    } else {
        alert("Veuillez Ajouter le grand titre");
    }

}

function evenementTable() {
    $.ajax({
        url: "../model/scripts.php",
        type: "POST",
        data: {
            'ent': 'evenementTable'
        },
        error: function (data) {
            console.log(data);
        },
        success: function (data) {
            var result = JSON.parse(data);
            var i = 0;
            var string = "";

            $.each(result, function (key, value) {
                i += 1;
                string +=
                    '<tr onclick="selection(this.id)" name="' + value["g_titre"] + '" id="' + value["id"] + '" style="cursor: pointer;">' +
                    '<th>' + value["id"] + '</th>' +
                    '<th>' + value["g_titre"] + '</th>' +
                    '<th>' + value["p_titre"] + '</th>' +
                    '<th>' + value["titre"] + '</th>' +
                    '<th>' + value["organisateur"] + '</th>' +
                    '<th>' + value["details"] + '</th>' +
                    '<th>' + value["dates"] + '</th>' +
                    '</tr>'
            });
            $("#evenementTable").empty().append(string);
        }

    });
}

function selection(id) {
    $.ajax({
        url: "../model/scripts.php",
        type: "POST",
        data: {
            'ent': 'selectionner',
            "id": id
        },
        error: function (data) {
            console.log(data);
        },
        success: function (data) {
            var data2 = JSON.parse(data);
            if (data2 != 0) {
                $("#id").val(data2[1]);
                $("#g_titre").val(data2[2]);
                $("#p_titre").val(data2[3]);
                $("#titre").val(data2[4]);
                $("#details").val(data2[5]);
                $("#organisateur").val(data2[6]);
                $("#p_normal").val(data2[7]);
                $("#p_vip").val(data2[8]);
                $("#d_prix").val(data2[9]);
                $("#duree").val(data2[10]);
                $("#date").val(data2[11]);
                $("#heure").val(data2[12]);
                $("#h_depart").val(data2[13]);
                $("#h_arriver").val(data2[14]);
                $("#distance").val(data2[15]);
                $("#lieu").val(data2[16]);
                $("#images")[0].filename = "../images/services/" + data2[17];

            }
        }
    });
}

function supprimer() {
    var id = $("#id").val();
    if (id !== "") {
        if (confirm("Voulez-vous vraiment supprimer cet événement ?")) {
            $.ajax({
                url: "../model/scripts.php",
                type: "POST",
                data: {
                    'ent': "supprimer",
                    "id": id
                },
                error: function (data) {
                    console.log(data);
                },
                success: function (data) {

                    var donnees = JSON.parse(data);

                    if (donnees[0] !== 0) {

                        alert("Supprimer avec Succès");
                        $("#id").val("");
                        $("#p_titre").val("");
                        $("#g_titre").val("");
                        $("#titre").val("");
                        $("#organisateur").val("");
                        $("#p_normal").val("");
                        $("#p_vip").val("");
                        $("#d_prix").val("");
                        $("#duree").val("");
                        $("#date").val("");
                        $("#heure").val("");
                        $("#h_depart").val("");
                        $("#h_arriver").val("");
                        $("#distance").val("");
                        $("#lieu").val("");
                        $("#details").val("");
                        $("#images").val("");
                        evenementTable();

                    } else {

                    }
                }
            });
        }
    } else {
        alert("Veuillez Séléctionner une enregistrement pour supprimer");
    }
}

function Modifier() {
    var id = "";
    var g_titre = "";
    var p_titre = "";
    var titre = "";
    var organisateur = "";
    var p_normal = "";
    var p_vip = "";
    var d_prix = "";
    var duree = "";
    var date = "";
    var heure = "";
    var h_depart = "";
    var h_arriver = "";
    var distance = "";
    var lieu = "";
    var details = "";
    var images = "";
    var fichier = new FormData();

    id = $("#id").val();
    g_titre = $("#g_titre").val();
    p_titre = $("#p_titre").val();
    titre = $("#titre").val();
    organisateur = $("#organisateur").val();
    p_normal = $("#p_normal").val();
    p_vip = $("#p_vip").val();
    d_prix = $("#d_prix").val();
    duree = $("#duree").val();
    date = $("#date").val();
    heure = $("#heure").val();
    h_depart = $("#h_depart").val();
    h_arriver = $("#h_arriver").val();
    distance = $("#distance").val();
    lieu = $("#lieu").val();
    details = $("#details").val();
    images = $("#images")[0].files;
    var photo = images[0];

    if (id !== "") {
        if (g_titre !== "") {
            if (p_titre !== "") {
                if (titre !== "") {
                    if (organisateur !== "") {
                        if ($("#images").val() !== "") {
                            if (details !== "") {

                                fichier.append("ent", "Modifier_evenements");
                                fichier.append("id", id);
                                fichier.append("g_titre", g_titre);
                                fichier.append("p_titre", p_titre);
                                fichier.append("titre", titre);
                                fichier.append("organisateur", organisateur);
                                fichier.append("p_normal", p_normal);
                                fichier.append("p_vip", p_vip);
                                fichier.append("d_prix", d_prix);
                                fichier.append("duree", duree);
                                fichier.append("date", date);
                                fichier.append("heure", heure);
                                fichier.append("h_depart", h_depart);
                                fichier.append("h_arriver", h_arriver);
                                fichier.append("distance", distance);
                                fichier.append("lieu", lieu);
                                fichier.append("details", details);
                                fichier.append("photo", photo);

                                $.ajax({
                                    url: "../model/scripts.php",
                                    type: "POST",
                                    data: fichier,
                                    contentType: false,
                                    processData: false,
                                    error: function (data) {
                                        console.log(data);
                                    },
                                    success: function (data) {

                                        var donnees = JSON.parse(data);

                                        if (donnees[0] !== 0) {

                                            alert("L'Evenement avec titre " + " " + g_titre + " " + "est Modifié avec succès");
                                            $("#id").val("");
                                            $("#p_titre").val("");
                                            $("#g_titre").val("");
                                            $("#titre").val("");
                                            $("#organisateur").val("");
                                            $("#p_normal").val("");
                                            $("#p_vip").val("");
                                            $("#d_prix").val("");
                                            $("#duree").val("");
                                            $("#date").val("");
                                            $("#heure").val("");
                                            $("#h_depart").val("");
                                            $("#h_arriver").val("");
                                            $("#distance").val("");
                                            $("#lieu").val("");
                                            $("#details").val("");
                                            $("#images").val("");
                                            evenementTable();

                                        } else {
                                            alert("Erreur de modification");
                                        }
                                    }
                                });

                            } else {
                                alert("Veuillez entrer les détails de l'événement");
                            }
                        } else {
                            alert("Veuillez séléctionner une image");
                        }
                    } else {
                        alert("Veuillez entrer le nom de l'organisateur");
                    }
                } else {
                    alert("Veuillez ajouter le titre")
                }
            } else {
                alert("Veuillez Ajouter le petit titre");
            }
        } else {
            alert("Veuillez Ajouter le grand titre");
        }
    } else {
        alert("Veuillez Séléctioner un événement à modifier");
    }
}

function evenements_afficher() {
    $.ajax({
        url: "./model/scripts.php",
        type: "POST",
        data: {
            'ent': 'evenements'
        },
        error: function (data) {
            console.log(data);
        },
        success: function (data) {
            var result = JSON.parse(data);
            var i = 0;
            var string = "";

            $.each(result, function (key, value) {
                i += 1;
                string +=
                    '<div class="col p-2" id="' + value["id"] + '">' +
                    '<div>' +
                    '<h2 class="py-1">' +
                    value["g_titre"] +
                    '</h2>' +
                    '</div>' +
                    '<div class="card bg-transparent p-0 m-0 border">' +
                    '<div class="card-header nav-bg">' +
                    '<span class="lead gras text-light" id="titre_festival">' +
                    value["p_titre"] +
                    '</span>' +
                    '</div>' +
                    '<div class="card-body row d-flex justify-content-around align-items-center">' +
                    '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-3" id="images">' +
                    '<img src="Images/services/' + value["photo"] + '" alt="' + value["titre"] + '" class="img-fluid">' +
                    '</div>' +
                    '<div class="col-xs-12 col-sm-12 col-md-8 col-lg-7">' +
                    '<span class="h4" id="' + value["titre"] + '">' +
                    value["titre"] +
                    '</span>' +
                    '<p class="text-justify pt-2" id="' + value["p-titre"] + '" style="text-align: justify;">' +
                    value["details"] +
                    '</p>' +
                    '<h4 class = "h5"> <b> Organisateur: </b> ' + value["organisateur"] + ' </h4 >' +
                    '</div>' +
                    '<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 d-flex justify-content-around d-none">' +
                    '<button class="btn btn-primary" id="delete">' +
                    '<span class="lead gras">' +
                    ' En savoir' +
                    '</span>' +
                    '<i class="fa fa-plus">' +

                    '</i>' +
                    '</button>' +
                    '<button class="btn btn-danger p-2" id="delete" type="button">' +

                    '<i class="fa fa-close"></i>' +
                    '</button>' +
                    '</div>' +
                    '<div>' +

                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'

            });
            $("#evenements").empty().append(string);
        }

    });
}

function nettoyer() {
    if (confirm("Voulez-vous nettoyer toutes les zones de texte ?")) {
        $("#id").val("");
        $("#p_titre").val("");
        $("#g_titre").val("");
        $("#titre").val("");
        $("#organisateur").val("");
        $("#p_normal").val("");
        $("#p_vip").val("");
        $("#d_prix").val("");
        $("#duree").val("");
        $("#date").val("");
        $("#heure").val("");
        $("#h_depart").val("");
        $("#h_arriver").val("");
        $("#distance").val("");
        $("#lieu").val("");
        $("#details").val("");
        $("#images").val("");
        evenementTable();
    } else {

    }
}