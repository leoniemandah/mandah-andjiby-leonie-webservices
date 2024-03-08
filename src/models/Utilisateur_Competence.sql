CREATE TABLE Utilisateur_Competence (
    utilisateur_id INT,
    competence_id INT,
    niveau VARCHAR(50),
    PRIMARY KEY (utilisateur_id, competence_id),
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateur(id),
    FOREIGN KEY (competence_id) REFERENCES Competence(id)
);
