Cum se schimba preturile aplicatiei? 

1. acceseaza <a href="https://github.com/PaulVLAD22/calculator-transporturi-v2/blob/main/src/assets/transport_data.tsx">fisierul cu preturi</a>

2. Explicatie fisier:
  structura linie : intern/extern[tip_masina][tip_transport] apoi in functie de caz 

   Exemplu 1: linia 6 -intern[camion][complet]["0-100 km"] este pretul pentru transporturi interne cu masina de tip camion, transport tip complet, pe distante intre 0 si 100 km
   Daca se doreste schimbarea pretului se modifica valorile [800,1200] de la linia 6, exemplu : [900,1300] daca vreau sa schimb atat limita inferioara cat si cea superioara

   Exemplu 2: linia 57 - intern[sprinter][ltl]["0-100 km"]["0-300 kg < 3cbm"] poate fi modificat range-ul [300, 400] pentru a schimba pretul transporturilor interne sprinter ltl intre 0 si 100 km si cu marfa
   cu calitatile 0-300 kg < 3cbm

   Exemplu 3: linia 106 - extern[import][camion][complet]["Marea Britanie"] poate fi modificat range-ul [1.1, 1.3] spre ex la [1.5,1.8] pentru a schimba pretul per km de import cu camion complet din Marea Britanie

   Exemplu 4: linia 444 - extern[export][sprinter][grupaj][Germania]["300+ KG"] poate fi modificat range-ul "300+ KG": [1, 1.8] pentru a schimba pretul per km


   EXCEPTII :
    1. linie 11 - intern[camion][complet]["500+ km] - [5, 6] :  range calculat astfel : pret de la 5*km la 6*km (lei) 
    3. linie 42 - intern[camion][grupaj]["500+ km"]["16-33 paleti"] are pretul [1600,[5,6]] primul fiind suma de lei minima, al doilea fiind un range calculat astfel : pret de la 5*km la 6*km (lei)
  ...
