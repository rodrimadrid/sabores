const productos = [{
  "id": 1,
  "bebida": "Gin",
  "nombre": "Heraclito London DRY",
  "marca": "Lunfardo DDB",
  "ml": 750,
  "precioUnitario": 1173,
  "precioCaja": 937.75,
  "img": "images/heraclito dry gin.jpg"
}, {
  "id": 2,
  "bebida": "DRY Gin",
  "nombre": "Heraclito y Macedonio Botanic",
  "marca": "Lunfardo DDB",
  "ml": 750,
  "precioUnitario": 1290,
  "precioCaja": 1044.63,
  "img": "images/hera y mace.jpg"
}, {
  "id": 3,
  "bebida": "Vermu",
  "nombre": "Lunfa Vermu",
  "marca": "Lunfardo DDB",
  "ml": 750,
  "precioUnitario": 736,
  "precioCaja": 578.78,
  "img": "images/lunfa vermu.jpeg"
}, {
  "id": 3,
  "bebida": "Bitter",
  "nombre": "Verbena Bitter Rojo",
  "marca": "Lunfardo DDB",
  "ml": 750,
  "precioUnitario": 736,
  "precioCaja": 578.78,
  "img": "images/verbena biter.jpg"
}, {
  "id": 4,
  "bebida": "Gin",
  "nombre": "Gin D-1313",
  "marca": "Helmich",
  "ml": 750,
  "precioUnitario": 1282,
  "precioCaja": 1115.62,
  "img": "images/d1313.jpg"
}, {
  "id": 5,
  "bebida": "Vodka",
  "nombre": "Vodka ICE",
  "marca": "Helmich",
  "ml": 750,
  "precioUnitario": 833,
  "precioCaja": 774.40,
  "img": "images/vodka ice.jpg"
}, {
  "id": 6,
  "bebida": "Triple Seco",
  "nombre": "Triple Seco",
  "marca": "CARAJO",
  "ml": 750,
  "precioUnitario": 863,
  "precioCaja": 754.23,
  "img": "images/triple seco.jpg"
}, {
  "id": 7,
  "bebida": "Grapa",
  "nombre": "Grapa Catamarqueña",
  "marca": "CARAJO",
  "ml": 500,
  "precioUnitario": 470,
  "precioCaja": "-",
  "img": "images/grapa.jpg"
}, {
  "id": 8,
  "bebida": "MIXERS",
  "nombre": "Santa Quina",
  "marca": "Santa Quina",
  "ml": 200,
  "precioUnitario": 104,
  "precioCaja": 1248,
  "img": "images/santa quina.jpg"
}, {
  "id": 9,
  "bebida": "MIXERS",
  "nombre": "Santa Quina",
  "marca": "Santa Quina",
  "ml": 1000,
  "precioUnitario": 148.43,
  "precioCaja": 1781,
  "img": "images/santa quina 2.jpg"
}, {
  "id": 10,
  "bebida": "Vino",
  "nombre": "Desquiciado - Malbec",
  "marca": "Desquiciado",
  "ml": 750,
  "precioUnitario": 4356,
  "precioCaja": 2613,
  "img": "images/malbeec.jpg"
}, {
  "id": 11,
  "bebida": "Vino",
  "nombre": " Desquiciado - Franc",
  "marca": "Desquiciado",
  "ml": 750,
  "precioUnitario": 4356,
  "precioCaja": 2613,
  "img": "images/franc.jpg"
}, {
  "id": 12,
  "bebida": "Vino",
  "nombre": " Desquiciado - Pinot Gris",
  "marca": "Desquiciado",
  "ml": 750,
  "precioUnitario": 4356,
  "precioCaja": 2613,
  "img": "images/pinot noir.jpg"
}, {
  "id": 13,
  "bebida": "Pulpa",
  "nombre": "Pulpa de Maracuyá",
  "marca": "ZONIA",
  "ml": 1000,
  "precioUnitario": 580,
  "precioCaja": 495,
  "img": ""
}, {
  "id": 14,
  "bebida": "Pulpa",
  "nombre": "Pulpa de Mango",
  "marca": "ZONIA",
  "ml": 1000,
  "precioUnitario": 540,
  "precioCaja": 460,
  "img": ""
}, {
  "id": 15,
  "bebida": "Pulpa",
  "nombre": "Pulpa de Ananá",
  "marca": "ZONIA",
  "ml": 1000,
  "precioUnitario": 540,
  "precioCaja": 460,
  "img": ""
}, {
  "id": 16,
  "bebida": "Pulpa",
  "nombre": "Jugo de Arándanos",
  "marca": "ZONIA",
  "ml": 1000,
  "precioUnitario": 210,
  "precioCaja": 170,
  "img": ""
}, {
  "id": 17,
  "bebida": "Pulpa",
  "nombre": "Jugo de Tomate",
  "marca": "ZONIA",
  "ml": 1000,
  "precioUnitario": 265,
  "precioCaja": 240,
  "img": ""
}, {
  "id": 18,
  "bebida": "Jugo",
  "nombre": "Jugo de Tomate",
  "marca": "ZONIA",
  "ml": 250,
  "precioUnitario": 125,
  "precioCaja": 100,
  "img": ""
}, {
  "id": 19,
  "bebida": "Pulpa",
  "nombre": "Pulpa de Maracuyá",
  "marca": "ZONIA",
  "ml": 500,
  "precioUnitario": 330,
  "precioCaja": 280,
  "img": ""
}, {
  "id": 20,
  "bebida": "Pulpa",
  "nombre": "Pulpa de Maracuyá",
  "marca": "ZONIA",
  "ml": 250,
  "precioUnitario": 185,
  "precioCaja": 158,
  "img": ""
}, {
  "id": 21,
  "bebida": "Jugo",
  "nombre": "Jugo de Lima Tahiti",
  "marca": "ZONIA",
  "ml": 500,
  "precioUnitario": 280,
  "precioCaja": 233.33,
  "img": ""
}, {
  "id": 22,
  "bebida": "Jugo",
  "nombre": "Jugo de Lima Tahiti",
  "marca": "ZONIA",
  "ml":250 ,
  "precioUnitario": 185,
  "precioCaja": 156.67,
  "img": ""
}, {
  "id": 23,
  "bebida": "Dressing",
  "nombre": "Dressing de Sauco, Cásis, frambuesa",
  "marca": "Müller & Wolf",
  "ml": 250,
  "precioUnitario": 385,
  "precioCaja": "NO DISPONIBLE",
  "img": ""
}, {
  "id": 24,
  "bebida": "Dressing",
  "nombre": "Dressing de Sauco, Cásis, frambuesa",
  "marca": "Müller & Wolf",
  "ml": 1000,
  "precioUnitario": 1380,
  "precioCaja": "NO DISPONIBLE",
  "img": ""
}, {
  "id": 25,
  "bebida": "Néctar",
  "nombre": "Néctar concentrado de flores de Sauco",
  "marca": "Müller & Wolf",
  "ml": 250,
  "precioUnitario": 460,
  "precioCaja": "NO DISPONIBLE",
  "img": ""
}, {
  "id": 26,
  "bebida": "Néctar",
  "nombre": "Néctar concentrado de flores de Sauco",
  "marca": "Müller & Wolf",
  "ml": 1000,
  "precioUnitario": 1700,
  "precioCaja": "NO DISPONIBLE",
  "img": ""
}, {
  "id": 27,
  "bebida": "Néctar",
  "nombre": "Néctar de Casis",
  "marca": "Müller & Wolf",
  "ml": 1000,
  "precioUnitario": 1700,
  "precioCaja": "NO DISPONIBLE",
  "img": ""
}];
