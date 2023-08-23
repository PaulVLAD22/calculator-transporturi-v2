const camionComplet = {
  "0-100 km": [800, 1200],
  "100-200 km": [1000, 1600],
  "200-300 km": [1400, 2400],
  "300-400 km": [2000, 2800],
  "400-500 km": [2400, 3200],
  "500+ km": [5, 6],
};

const camionGrupaj = {
  "0-100 km": {
    "1-6 paleti": [400, 600],
    "7-15 paleti": [500, 800],
    "16-33 paleti": [600, 1200],
  },
  "100-200 km": {
    "1-6 paleti": [400, 700],
    "7-15 paleti": [500, 900],
    "16-33 paleti": [800, 1600],
  },
  "200-300 km": {
    "1-6 paleti": [450, 900],
    "7-15 paleti": [700, 1600],
    "16-33 paleti": [1300, 2400],
  },
  "300-400 km": {
    "1-6 paleti": [500, 1000],
    "7-15 paleti": [800, 2000],
    "16-33 paleti": [1400, 2800],
  },
  "400-500 km": {
    "1-6 paleti": [500, 1200],
    "7-15 paleti": [900, 2200],
    "16-33 paleti": [1500, 3200],
  },
  "500+ km": {
    "1-6 paleti": [600, 1400],
    "7-15 paleti": [1000, 2500],
    "16-33 paleti": [1600, 5],
  },
};

const sprinterComplet = {
  "0-100 km": [400, 900],
  "100-200 km": [600, 1200],
  "200-300 km": [800, 1600],
  "300-400 km": [1100, 1900],
  "400-500 km": [1300, 2200],
  "500+ km": [3, 4],
};

const sprinterLTLFTL = {
  "0-100 km": {
    "0-300 kg < 3cbm": [300, 400],
    "300-900 kg < 9cbm": [400, 500],
    "900-1200 kg < 12cbm": [500, 600],
    "1200-1500 kg < 15cbm": [600, 800],
    "1500-2000 kg < 22cbm": [650, 900],
  },
  "100-200 km": {
    "0-300 kg < 3cbm": [350, 700],
    "300-900 kg < 9cbm": [450, 800],
    "900-1200 kg < 12cbm": [500, 1000],
    "1200-1500 kg < 15cbm": [700, 1200],
    "1500-2000 kg < 22cbm": [800, 1400],
  },
  "200-300 km": {
    "0-300 kg < 3cbm": [450, 800],
    "300-900 kg < 9cbm": [600, 1000],
    "900-1200 kg < 12cbm": [700, 1200],
    "1200-1500 kg < 15cbm": [900, 1600],
    "1500-2000 kg < 22cbm": [1000, 1700],
  },
  "300-400 km": {
    "0-300 kg < 3cbm": [500, 900],
    "300-900 kg < 9cbm": [700, 1200],
    "900-1200 kg < 12cbm": [900, 1700],
    "1200-1500 kg < 15cbm": [1000, 1900],
    "1500-2000 kg < 22cbm": [1200, 2100],
  },
  "400-500 km": {
    "0-300 kg < 3cbm": [550, 1000],
    "300-900 kg < 9cbm": [750, 1700],
    "900-1200 kg < 12cbm": [1100, 1900],
    "1200-1500 kg < 15cbm": [1200, 2200],
    "1500-2000 kg < 22cbm": [1400, 2400],
  },
  "500+ km": {
    "0-300 kg < 3cbm": [600, 1200],
    "300-900 kg < 9cbm": [800, 1800],
    "900-1200 kg < 12cbm": [1200, 2100],
    "1200-1500 kg < 15cbm": [1300, 2400],
    "1500-2000 kg < 22cbm": [1400, 2600],
  },
};

const costPerKmCamionCompletImport = {
  "Marea Britanie": [1.1, 1.3],
  Germania: [1.08, 1.28],
  Franta: [1.05, 1.25],
  Polonia: [1.37, 1.67],
  Austria: [1.49, 1.69],
  Elvetia: [1.25, 1.55],
  Ungaria: [1.5, 1.8],
  Cehia: [1.37, 1.57],
  Slovacia: [1.33, 1.53],
  Spania: [0.95, 1.15],
  Italia: [1.3, 1.5],
  Slovenia: [1.4, 1.6],
  Danemarca: [1.2, 1.4],
  Norvegia: [1.2, 1.4],
  Suedia: [1.1, 1.3],
  Finlanda: [1.1, 1.3],
  Estonia: [1.2, 1.4],
  Letonia: [1.2, 1.4],
  Lituania: [1.2, 1.4],
  Grecia: [1.5, 1.8],
  Bulgaria: [1.6, 2],
  Serbia: [1.6, 2],
  Albania: [1.6, 2],
  Croatia: [1.5, 2],
  Muntenegru: [1.6, 2],
  "Bosnia si Hertegovina": [1.6, 2],
  Macedonia: [1.6, 2],
  Turcia: [1.8, 2.2],
  Moldova: [1.7, 2.2],
  Ucraina: [1.6, 2],
  Belarus: [1.5, 1.9],
};

const costPerKmCamionCompletExport = {
  "Marea Britanie": [1.0, 1.2],
  Germania: [0.95, 1.15],
  Franta: [0.95, 1.1],
  Polonia: [0.97, 1.17],
  Austria: [1.29, 1.49],
  Elvetia: [1.1, 1.4],
  Ungaria: [1.3, 1.6],
  Cehia: [1.37, 1.57],
  Slovacia: [1.33, 1.53],
  Spania: [0.85, 1.05],
  Italia: [1.0, 1.25],
  Slovenia: [1.2, 1.4],
  Danemarca: [1.0, 1.2],
  Norvegia: [1.1, 1.3],
  Suedia: [0.95, 1.1],
  Finlanda: [1.0, 1.2],
  Estonia: [1.1, 1.3],
  Letonia: [1.1, 1.3],
  Lituania: [1.15, 1.3],
  Grecia: [1.4, 1.7],
  Bulgaria: [1.5, 1.9],
  Serbia: [1.4, 1.8],
  Albania: [1.4, 1.8],
  Croatia: [1.3, 1.9],
  Muntenegru: [1.5, 1.9],
  "Bosnia si Hertegovina": [1.5, 1.9],
  Macedonia: [1.5, 1.9],
  Turcia: [1.4, 1.8],
  Moldova: [1.7, 2.2],
  Ucraina: [1.4, 1.8],
  Belarus: [1.3, 1.7],
};

const costPerMetruPodeaGrupajImport = {
  "Marea Britanie": [300, 400],
  Germania: [170, 270],
  Franta: [300, 400],
  Polonia: [200, 300],
  Austria: [150, 250],
  Elvetia: [200, 300],
  Ungaria: [150, 250],
  Cehia: [150, 250],
  Slovacia: [150, 250],
  Spania: [350, 500],
  Italia: [200, 300],
  Slovenia: [150, 250],
  Danemarca: [200, 300],
  Norvegia: [300, 400],
  Suedia: [250, 350],
  Finlanda: [250, 350],
  Estonia: [250, 350],
  Letonia: [200, 300],
  Lituania: [200, 300],
  Grecia: [150, 250],
  Bulgaria: [100, 200],
  Serbia: [250, 350],
  Albania: [250, 350],
  Croatia: [250, 350],
  Muntenegru: [250, 350],
  "Bosnia si Hertegovina": [250, 350],
  Macedonia: [250, 350],
  Turcia: [250, 350],
  Moldova: [200, 300],
  Ucraina: [300, 500],
  Belarus: [300, 500],
};

const costPerMetruPodeaGrupajExport = {
  "Marea Britanie": [300, 400],
  Germania: [170, 270],
  Franta: [300, 400],
  Polonia: [200, 300],
  Austria: [150, 250],
  Elvetia: [200, 300],
  Ungaria: [150, 250],
  Cehia: [150, 250],
  Slovacia: [150, 250],
  Spania: [350, 500],
  Italia: [200, 300],
  Slovenia: [150, 250],
  Danemarca: [200, 300],
  Norvegia: [300, 400],
  Suedia: [250, 350],
  Finlanda: [250, 350],
  Estonia: [250, 350],
  Letonia: [200, 300],
  Lituania: [200, 300],
  Grecia: [150, 250],
  Bulgaria: [100, 200],
  Serbia: [250, 350],
  Albania: [250, 350],
  Croatia: [250, 350],
  Muntenegru: [250, 350],
  "Bosnia si Hertegovina": [250, 350],
  Macedonia: [250, 350],
  Turcia: [250, 350],
  Moldova: [200, 300],
  Ucraina: [300, 500],
  Belarus: [300, 500],
};

const costPerKmSprinterCompletImport = {
  "Marea Britanie": [0.5, 0.6],
  Germania: [0.55, 0.65],
  Franta: [0.45, 0.55],
  Polonia: [0.57, 0.77],
  Austria: [0.65, 0.9],
  Elvetia: [0.55, 0.75],
  Ungaria: [0.65, 0.9],
  Cehia: [0.55, 0.75],
  Slovacia: [0.55, 0.75],
  Spania: [0.4, 0.55],
  Italia: [0.5, 0.7],
  Slovenia: [0.55, 0.75],
  Danemarca: [0.5, 0.6],
  Norvegia: [0.6, 0.75],
  Suedia: [0.5, 0.6],
  Finlanda: [0.55, 0.65],
  Estonia: [0.5, 0.6],
  Letonia: [0.5, 0.6],
  Lituania: [0.5, 0.6],
  Grecia: [0.65, 0.85],
  Bulgaria: [0.65, 0.9],
  Serbia: [0.85, 1.1],
  Albania: [0.85, 1.1],
  Croatia: [0.85, 1.1],
  Muntenegru: [0.85, 1.1],
  "Bosnia si Hertegovina": [0.85, 1.1],
  Macedonia: [0.85, 1.1],
  Turcia: [0.95, 1.3],
  Moldova: [0.85, 1.1],
  Ucraina: [1.0, 1.3],
  Belarus: [1.0, 1.3],
};

const costPerKmSprinterCompletExport = {
  "Marea Britanie": [0.4, 0.5],
  Germania: [0.45, 0.55],
  Franta: [0.35, 0.45],
  Polonia: [0.42, 0.62],
  Austria: [0.45, 0.7],
  Elvetia: [0.45, 0.65],
  Ungaria: [0.55, 0.75],
  Cehia: [0.45, 0.65],
  Slovacia: [0.45, 0.65],
  Spania: [0.3, 0.45],
  Italia: [0.35, 0.55],
  Slovenia: [0.45, 0.65],
  Danemarca: [0.4, 0.5],
  Norvegia: [0.5, 0.65],
  Suedia: [0.4, 0.5],
  Finlanda: [0.45, 0.55],
  Estonia: [0.4, 0.5],
  Letonia: [0.4, 0.5],
  Lituania: [0.4, 0.5],
  Grecia: [0.55, 0.75],
  Bulgaria: [0.65, 0.9],
  Serbia: [0.85, 1.1],
  Albania: [0.85, 1.1],
  Croatia: [0.85, 1.1],
  Muntenegru: [0.85, 1.1],
  "Bosnia si Hertegovina": [0.85, 1.1],
  Macedonia: [0.85, 1.1],
  Turcia: [0.75, 1.0],
  Moldova: [0.85, 1.1],
  Ucraina: [1.0, 1.3],
  Belarus: [1.0, 1.3],
};

const costPerKgGrupajSprinterImport = {
  "Marea Britanie": {
    "0-300 KG": [1.5, 2.5],
    "300+ KG": [1, 1.8],
  },
  Germania: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Franta: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Polonia: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Austria: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Elvetia: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Ungaria: {
    "0-300 KG": [1, 1.8],
    "300+ KG": [0.6, 1.2],
  },
  Cehia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Slovacia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Spania: {
    "0-300 KG": [1.6, 2.8],
    "300+ KG": [1.2, 1.7],
  },
  Italia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.6, 1.3],
  },
  Slovenia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Danemarca: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Norvegia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Suedia: {
    "0-300 KG": [1.6, 2.8],
    "300+ KG": [1.2, 1.7],
  },
  Finlanda: {
    "0-300 KG": [1.6, 2.8],
    "300+ KG": [1.2, 1.7],
  },
  Estonia: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Letonia: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Lituania: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Grecia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Bulgaria: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Serbia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Albania: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Croatia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Muntenegru: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  "Bosnia si Hertegovina": {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Macedonia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Turcia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Moldova: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Ucraina: {
    "0-300 KG": [2, 3.6],
    "300+ KG": [1.5, 3],
  },
  Belarus: {
    "0-300 KG": [2, 3.6],
    "300+ KG": [1.5, 3],
  },
};

const costPerKgGrupajSprinterExport = {
  "Marea Britanie": {
    "0-300 KG": [1.5, 2.5],
    "300+ KG": [1, 1.8],
  },
  Germania: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Franta: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Polonia: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Austria: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Elvetia: {
    "0-300 KG": [1.2, 2],
    "300+ KG": [0.8, 1.5],
  },
  Ungaria: {
    "0-300 KG": [1, 1.8],
    "300+ KG": [0.6, 1.2],
  },
  Cehia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Slovacia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Spania: {
    "0-300 KG": [1.6, 2.8],
    "300+ KG": [1.2, 1.7],
  },
  Italia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.6, 1.3],
  },
  Slovenia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Danemarca: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Norvegia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Suedia: {
    "0-300 KG": [1.6, 2.8],
    "300+ KG": [1.2, 1.7],
  },
  Finlanda: {
    "0-300 KG": [1.6, 2.8],
    "300+ KG": [1.2, 1.7],
  },
  Estonia: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Letonia: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Lituania: {
    "0-300 KG": [1.4, 2.2],
    "300+ KG": [1, 1.6],
  },
  Grecia: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Bulgaria: {
    "0-300 KG": [1.1, 1.9],
    "300+ KG": [0.7, 1.4],
  },
  Serbia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Albania: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Croatia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Muntenegru: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  "Bosnia si Hertegovina": {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Macedonia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Turcia: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Moldova: {
    "0-300 KG": [1.8, 3.2],
    "300+ KG": [1.4, 2],
  },
  Ucraina: {
    "0-300 KG": [2, 3.6],
    "300+ KG": [1.5, 3],
  },
  Belarus: {
    "0-300 KG": [2, 3.6],
    "300+ KG": [1.5, 3],
  },
};
