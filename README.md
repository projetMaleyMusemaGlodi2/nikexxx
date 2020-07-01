<p align="center">
  <img width="266" height="80" src="https://user-images.githubusercontent.com/46261770/79870277-9a490b00-8397-11ea-88ac-e8dc25124084.png">
  </p>
<h2 align="center">
  Monitor EngineX
</h2>  

#### Permettre le contrôle du niveau de batterie et de la localisation des malletes mobiles (A distance).

### Table des Matières
- [Introduction](#Introduction)
- [Fonctionnement](#Fonctionnement)
- [Structure](#Structure)
- [Evolution des versions](#Evolution)
- [Sponsors](#Sponsors)

#### Introduction

Les modules mobiles sont equipés des dispositifs électroniques capables d'envoyer des données (Au format JSON) à une plateforme de visualisation (Application web : https://xxxxxxxx) par l'intermédiaire de deux autres plateformes de transit dont (xxxxxxxx) qui est notre partie backend avec toutes les fonctionnalites possibles de traitement interne des données au niveau du systeme et l'autre plateforme c'est [thingstream](https://thingstream.io) qui nous sert de la source des donnees a traiter.
Les données envoyées contiennent dans un premier temps la localisation (Latitude et logitude du module mobile : Moyennant l'API de LeafLet : https://leafletjs.com) ainsi que le niveau de la tension de la batterie. En outre, il sera possible d'envoyer certaines commandes à un module mobile spécifique via la plateforme web; pour modifier son fonctionnement (Comme changer l'interval de mesure ou désactiver le module).

#### Fonctionnement

Le projet fonctionne en 4 parties interactives dont nous avons :
- **Client web** : C'est la partie servant d'intermédiaire entre l'utilisateur et les mallettes mobiles. Cela implique la gestion des utilisateurs, le suivi des différentes périphériques avec la visualisation des certaines informations les concernants (Niveau de la tension de la batterie, localisation et leurs etats) ainsi que l'envoie des requêttes vers les équipements distants (Via thingstream). 
- **Serveur Web** : Contrôle toutes les intéractions entre les utilisateurs de la plateforme mobile et les dispositifs mobiles, et vice-versa.
- **Seveur de Base de Donnees avec *MongoDB*** : Assure le traçage des informations échangées avec les périphériques mobiles tout en facilitant un stockage à long terme. C'est ainsi, qu'elle permet de vérifier l'historique des mésures effectuées au cours du temps.

*Java EE* a été choisi du fait qu’il facilite le développement des applications professionnelles tout en disposant d'un environnement d’exécution facilement intégrable avec divers *API*.  

Dans le développement de l’application web, nous avons décidé d'utiliser le Modèle ***MVC*** *(Model Vue Controller)* qui facilite l’organisation de celle-ci tout en assurant un meilleur découpage en couches distinctes. Les couches sont des segments ou partiee du code qui peuvent être développés séparement, et cela par des équipes différentes. Voici ses grandes parties:
- ***La couche Modèle*** : Est la partie chargée de stocker les données qui devront être manipulées par l'utilisateur. En outre, elle est le pont avec la Base de Données.
- ***La couche Vue*** : Est la partie qui s’occupe de la présentation des données : C'est l'interface utilisateur disponible pour l'utilisation de l'application. Elle est responsable de la mise en forme de l'aspect visuel de l’application (Pour notre cas, elle a été constituée particulièrement par des pages web utilisant du code ***HTML***).
- ***La couche Controlleur*** : Et la partie centrale permettant d'aiguiller les données saisies par l'utilisateur vers l'interface de stockage après traitements et validation de ces dernières. Cet échange est assuré dans les deux sens : De l'utilisateur vers le stockage (Cela peut se faire via l'intéraction d'autres intermédiares sans pour autant interférer) et vice-versa. En outre, elle se charge de diriger les informations tout en décidant de la partie qui va la récupérée et la traitée. Elle gère ainsi les requêtes des utilisateurs en vue de retourner la réponse appropriée au destinateur en faisant appel aux couches ***Modèle*** et ***Vue***.

Avec le choix porté sur *Java*, le ***serveur Tomcat*** nous a servi comme conteneur web en permettant la prise en charge du code Java côté serveur. Ce dernier permet ainsi de taiter les requêtes (Généralement de ***type HTTP***) en provenance des clients afin d'en retourner les réponses adéquates. 

#### Structure

1. Envoi temporaire de la requête http du Systeme vers ThingStream pour la demande des informations (localisation    géographique, la tension, intervalle de mesure, et l’état de la batterie) sur la batterie.  
2. Récupération de la réponse(JSON) de Thingstream par rapport à la requête.  
3. Transfert de la réponse de Thingstream dans la couche iMetier  
4. Mise des informations de la réponse dans la Persistance pour le stockage  
5. Sauvegarde des informations dans la base de données pour l’historique   
6. Réponse du serveur de la base de données par rapport au stockage de ses informations  
7. Transfert des informations de la réponse de Thingstream dans le serveur TOMCAT aux Controleurs  
8. Transfert des informations de la réponse de Thingstream au Model par le contrôleur  
9. Transfert des informations de la réponse de Thingstream aux vues par le Model
10. Transfert des informations de la réponse de Thingstream dans le page web par les Vues pour leurs l’affichage au clair dans l’interface utilisateur.  
11. Requête des utilisateurs au système par rapport soit à l’arrêt de la batterie ou lancer une commande quelconque à la batterie selon le besoin.  
12. Transfert de la requête de l’utilisateur au Processus de réception, par le contrôleur.  
13. Transfert de la requête de l’utilisateur au site distant Thingstream par le Processus de réception.  
14. Retour a (2)  
voir la Figure ci-dessous.

<p align="center">
  <img width="700" height="400" src="https://user-images.githubusercontent.com/46261770/79869763-b8623b80-8396-11ea-8ee8-6e8b4b3c0857.png">
</p>

### Evolution

Le développement de l'application a commencé depuis ***Fin Novembre 2019*** et à chaque versions des modifications sont apportées au niveau tant de *l'interface utilisateur*, de son *ergonomie* que de *ses fonctionnaliés*.
Avant tout, la plateforme est disponible via le lien : (**Monitor-Engine** : https://quick.cfapps.io)

##### Version 1.0 : [Monitor Engine](https://github.com/isigcodepo/monitor-engine)
- Mise au points d'une interface de login avant d'accéder à l'application.
- Ajout des menus pour ***la gestion courante*** (`Add Device`, `Map`, `Users`,`Logs` et `Setings`) ainsi que ***le manuel de l'utilisateur*** (Non encore finalisé).
- Visualisation générale des informations sur les périphériques mobiles (`Id du périphérique`, `Longitude`, `Latitude`, `Niveau de la batterie`, `Status` et `Détails`).
- Affichage des informations (`Device ID`, `Longitude`,`Latitude` et `Niveau de la batterie`) liées au périphérique choisie dans la Map lors du clic sur `Details`, avec possibilité de changer le type d'affichage de la Map (`Satellite` ou `par défaut`). 
- Possibilité de visualiser le niveau de la batterie dans ***un indicateur du niveau de la batterie*** qui s'affiche au bas de la Map.
- Visualisation de l'historique des messures de la périphérique en dessous de l'indicateur du niveau de la batterie.
- Possibilité de déconnecter l'utilisateur en cliquant sur ***déconnexion*** *(Un cadénat au haut de la page)*.
- Possibilité de reduire l'onglet d'affichage des menus.

##### Version 1.1 : [Monitor EngineX](https://github.com/isigcodepo/enginex)
- Mise au points d'une interface de login avant d'accéder à l'application.
- Ajout des menus pour ***la gestion courante*** (`Add Device`, `Map`, `Users`,`Logs` et `Setings`) ainsi que ***le manuel de l'utilisateur*** (Non encore finalisé).
- Visualisation générale des informations sur les périphériques mobiles (`Id du périphérique`, `Longitude`, `Latitude`, `Niveau de la batterie`, `Status` et `Détails`).
- Affichage des informations (`Device ID`, `Longitude`,`Latitude` et `Niveau de la batterie`) liées au périphérique choisie dans la Map lors du clic sur `Details`, avec possibilité de changer le type d'affichage de la Map (`Satellite` ou `par défaut`). 
- Possibilité de visualiser le niveau de la batterie dans ***un indicateur du niveau de la batterie*** qui s'affiche au bas de la Map.
- Visualisation de l'historique des messures de la périphérique en dessous de l'indicateur du niveau de la batterie.
- Possibilité de déconnecter l'utilisateur en cliquant sur ***déconnexion*** *(Un cadénat au haut de la page)*.
- Possibilité de changer les preferences des couleurs des affichages de la Map pour l'utilisateurs pendant sa session encours en cliquant sur ***Préférences*** *(Un pick des couleurs dans le menu)*.
- Possibilité de reduire l'onglet d'affichage des menus.

### Sponsors

[ULB (Université Libre de Bruxelles)-CODEPO (Cellule de Coopération au Développement de l'Ecole Polytechnique de Bruxelles)](https://polytech.ulb.be/fr/international/cellule-de-cooperation-au-developpement)
<p align="left">
  <img width="100" height="100" src="https://user-images.githubusercontent.com/15903230/74433560-4c7cc780-4e69-11ea-8c20-62a458ae1ffb.png">
  
  [ISIG (Institut Supérieur d'Informatique et de Gestion de Goma)](https://www.isig.ac.cd/)
  <p align="left">
  <img width="100" height="120" src="https://user-images.githubusercontent.com/15903230/74431114-f7d84d00-4e66-11ea-9b20-d3db26e0db89.png">
