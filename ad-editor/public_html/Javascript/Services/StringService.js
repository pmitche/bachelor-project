var app = angular.module("StringService",[]);

app.service("stringService", function() {
     var stringsEnglishNorwegian = 
             // general editor
             {"Adresseavisen": "Adresseavisa",
            "Ad Editor": "AdEditor",
            "Create new ad": "Ny Annonse",
            "Editor": "Generator",
            "Preview": "Forhåndsvisning",
            "Rules": "Regler",
            "Number Components": "Antall Komponenter",
            "Tools": "Verktøy",
            "approve": "Godkjenn",
            "load": "Last Opp",
            "load saved ad": "Last Opp Lagret Annonse",
            "save ad": "Lagre",
            "add component": "Legg til komponent",
            "change user role": "endre bruker rolla",
            // component descriptions and default values
            "Date of birth": "Fødselsdato",
            "f. dd.MM.JJJJ": "født, dd.mm.åååå",
            "Explanation": "Forklaring",
            "Family": "Familie",
            "Family two columns": "Familie, to kolonner",
            "Family first column": "Familie, første kolonne",
            "Family second column": "Familie, andre kolonne",
            "Information about funeral": "Informasjon om begravelse",
            "Information about gifts": "Informasjon om gaver",
            "Line": "Linje",
            "Name": "Navn",
            "Place and date": "Sted og Dato",
            "Place, Date": "Sted, Dato",
            "Poem": "Vers",
            "Short text": "Innledning",
            "Symbol": "Symbol",
            "Textarea": "Tekstfelt",
            "Textarea two columns": "Tekstfelt, to kolonner",
            "Textarea first column": "Tekstfelt, første kolonne",
            "Textarea second column": "Tekstfelt, andre kolonne",
            // alerts
            "Could not load template due to wrong available components!": "Kunne ikke laste mal, på grunn av feil komponenter",
            "The component of type":"Komponenttypen",
            "could not be added as there are no more fields of this type allowed.":"kunne ikke legges til fordi det ikke er tillatt å ha flere felt av denne typen.",
            // active buttons
            "delete": "Slett",
            "deactivate": "Deaktiver",
            "reactivate": "Aktiver",
            // context menu
            "Change font": "Endre skrifttype",
            // Rules form
            "Type": "Type",
            "component A": "Komponent A",
            "component B": "Komponent B",
            "position": "Posisjon",
            "create rule": "Lag Regel",
            "A at position X": "A i posisjon X",
            "A not at position X": "A ikke i posisjon X",
            "A before B": "A før B",
            "A is directly before B": "A rett før B",
            "A is not directly before B": "A ikke rett før B",
            "A is at the bottom": "A er nederst",
            "A is not at the bottom": "A ikke nederst",
            "If the number is unlimited, use -1": "Hvis antallet er ubegrenset, bruk -1",
            "Max Number": "Maksimalt Antall"};
     
    this.getNorwegianString = function(englishString) {
        return stringsEnglishNorwegian[englishString];
    };
 });
 
 app.controller("stringController", function(stringService) {
     this.getNorwegianString = function(englishString) {
         return stringService.getNorwegianString(englishString);
     };
    
});