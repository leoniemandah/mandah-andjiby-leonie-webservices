# Reponses aux questions

# PUT & PATCH
Quelle est la différence entre un PUT un PATCH?

=> La différence entre un PUT et un PATCH est que le PUT est utilisé pour remplacer entièrement une ressource alors que le PATCH est utilisé pour appliquer des modifications partielles à une ressource existante.

# FETCH/AXIOS
Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?

=> Cela peut être la résultante de plusieurs problèmes d'origine diverses.
    - peut-être un problème de CORS car Firefox met en place des politiques de sécurité strictes pour empêcher les appels de ressources depuis des domaines différents

    - peut-être un problème de certificat SSL : Si votre API utilise HTTPS avec un certificat SSL auto-signé ou expiré, Firefox peut bloquer l'accès à l'API par mesure de sécurité

    - peut-être un problème liés aux cookies ou aux sessions car il est possible que Firefox ne gère pas correctement ces cookies lors de l'appel de l'API

    - peut-être un problème de cache car le navigateur peut mettre en cache les requêtes précédentes vers l'API

# NGINX/APACHE
Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?

=> L'utilisation d'un serveur web en plus de notre API Node.js peut améliorer les performances, la sécurité et la scalabilité de notre application, tout en offrant une flexibilité pour prendre en charge une gamme plus large de cas d'utilisation

# PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest

=> En cours nous avons vu:
    - optimisation des requêtes et réponses
    - optimisation des requêtes côté client
    - optimisation de l'infrastructure et de la conception de l'API 