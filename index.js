const data = [
    [1, 10.0, 12.0, 11.3, 7.5, 12.3, 12.5, 13.2],
    [2, 17.0, 12.3, 14.1, 15.5, 11.0, 10.0, 15.3],
    [2, 20.0, 16.0, 13.3, 9.5, 12.6, 12.4, 13.4],
    [1, 10.3, 10.0, 12.3, 11.5, 11.3, 15.5, 17.1],
    [1, 10.1, 12.0, 11.3, 6.5, 12.3, 16.5, 15.2],
    
];

console.log(data); // [1, 10.0, 12.0, 11.3, 7.5, 12.3, 12.5, 13.2],
    [2, 17.0, 12.3, 14.1, 15.5, 11.0, 10.0, 15.3],
    [2, 20.0, 16.0, 13.3, 9.5, 12.6, 12.4, 13.4],
    [1, 10.3, 10.0, 12.3, 11.5, 11.3, 15.5, 17.1],
    [1, 10.1, 12.0, 11.3, 6.5, 12.3, 16.5, 15.2],

function generateAlert(genero, hemoglobina) {
    if (genero === 1) {
        if (hemoglobina < 12.2) {
            return "Baja";
        } else if (hemoglobina >= 16.6) {
            return "Alta";
        } else {
            return "Normal";
        }
    } else {genero === 2}
        if (hemoglobina < 12.6) {
            return "Baja";
        } else if (hemoglobina > 15.0) {
            return "Alta";
        } else {
            return "Normal";
        }
    }

function ProcesarInfo(genero) {
    
}


