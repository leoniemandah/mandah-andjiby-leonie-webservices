CREATE TABLE Projet_Utilisateur (
    projet_id INT,
    utilisateur_id INT,
    date_debut DATE NOT NULL,
    date_fin DATE,
    PRIMARY KEY (projet_id, utilisateur_id),
    FOREIGN KEY (projet_id) REFERENCES Projet(id),
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateur(id)
);