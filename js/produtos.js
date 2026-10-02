/* EDITE ESTE ARQUIVO PARA ALTERAR NOMES, PREÇOS, UNIDADES E CATEGORIAS. */
const produtos = [
  {
    "id": 1,
    "image": "produto_001.jpg",
    "name": "Nhoque Pizza - 1kg",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 2,
    "image": "produto_002.jpg",
    "name": "Nhoque 4 Queijos - 1kg",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 3,
    "image": "produto_003.jpg",
    "name": "Nhoque Requeijão - 1kg",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 4,
    "image": "produto_004.jpg",
    "name": "Nhoque Queijo - 1kg",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 5,
    "image": "produto_005.jpg",
    "name": "Nhoque Carne Seca - 1kg",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 6,
    "image": "produto_006.jpg",
    "name": "Nhoque Costela - 1kg",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 7,
    "image": "produto_007.jpg",
    "name": "Chipa com Parmesão - 1kg",
    "price": "R$ 33,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 8,
    "image": "produto_008.jpg",
    "name": "Nhoque Calabresa com Queijo - 1Kg - 1kg",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 9,
    "image": "produto_009.jpg",
    "name": "Queijo Canastra",
    "price": "R$ 65,60",
    "unit": "Kg",
    "category": "Produtos"
  },
  {
    "id": 10,
    "image": "produto_010.jpg",
    "name": "Pão de Queijo - 1kg",
    "price": "R$ ~30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 11,
    "image": "produto_011.jpg",
    "name": "Queijo Meia Cura Canastra",
    "price": "R$ 65,60",
    "unit": "Kg",
    "category": "Produtos"
  },
  {
    "id": 12,
    "image": "produto_012.jpg",
    "name": "Picanha Suina com Parmesão",
    "price": "R$ 40,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 13,
    "image": "produto_013.jpg",
    "name": "Kit Provolone",
    "price": "R$ 23,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 14,
    "image": "produto_014.jpg",
    "name": "Queijo Padrão com Alho Poró",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 15,
    "image": "produto_015.jpg",
    "name": "Queijo Padrão com Tomate Seco",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 16,
    "image": "produto_016.jpg",
    "name": "Queijo Meia Cura Canastra",
    "price": "R$ 65,60",
    "unit": "Kg",
    "category": "Produtos"
  },
  {
    "id": 17,
    "image": "produto_017.jpg",
    "name": "Queijo Meia Cura Chavinho",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 18,
    "image": "produto_018.jpg",
    "name": "Queijo Parmesão Canastra",
    "price": "R$ 38,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 19,
    "image": "produto_019.jpg",
    "name": "Kit Parmesão Matuto",
    "price": "R$ 35,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 20,
    "image": "produto_020.jpg",
    "name": "Kit 4 Queijo Canastra",
    "price": "R$ 38,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 21,
    "image": "produto_021.jpg",
    "name": "Queijo Parmesão Capa Preta Canastra",
    "price": "R$ 39,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 22,
    "image": "produto_022.jpg",
    "name": "Queijo Padrão Chavinho",
    "price": "R$ 0,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 23,
    "image": "produto_023.jpg",
    "name": "Queijo Trufado com Requeijão",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 24,
    "image": "produto_024.jpg",
    "name": "Queijo Trufado com Requeijão",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 25,
    "image": "produto_025.jpg",
    "name": "Palito Diversos Canastra",
    "price": "R$ 22,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 26,
    "image": "produto_026.jpg",
    "name": "Palito sem Tempero",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 27,
    "image": "produto_027.jpg",
    "name": "Queijo Napolitan",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 28,
    "image": "produto_028.jpg",
    "name": "Queijo Frescal",
    "price": "R$ 26,50",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 29,
    "image": "produto_029.jpg",
    "name": "Queijo Padrão",
    "price": "R$ 0,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 30,
    "image": "produto_030.jpg",
    "name": "Requeijão Cremoso 400g",
    "price": "R$ 18,50",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 31,
    "image": "produto_031.jpg",
    "name": "Manteiga Pura - 200g",
    "price": "R$ 12,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 32,
    "image": "produto_032.jpg",
    "name": "Requeijão do Norte",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 33,
    "image": "produto_033.jpg",
    "name": "Queijo Meia Cura",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 34,
    "image": "produto_034.jpg",
    "name": "Trança de Mussarela com Tempero",
    "price": "R$ 35,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 35,
    "image": "produto_035.jpg",
    "name": "Queijo Coalho em Barra",
    "price": "R$ 30,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 36,
    "image": "produto_036.jpg",
    "name": "Queijo Zero Lactose",
    "price": "R$ 37,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 37,
    "image": "produto_037.jpg",
    "name": "Paçoca Caseira",
    "price": "R$ 6,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 38,
    "image": "produto_038.jpg",
    "name": "carro de Boi em Madeira para Bebida",
    "price": "R$ 28,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 39,
    "image": "produto_039.jpg",
    "name": "Pingometro",
    "price": "R$ 50,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 40,
    "image": "produto_040.jpg",
    "name": "Trança de Mussarela sem Tempero",
    "price": "R$ 35,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 41,
    "image": "produto_041.jpg",
    "name": "Barril de Parede",
    "price": "R$ 62,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 42,
    "image": "produto_042.jpg",
    "name": "Licor Doce de leite",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 43,
    "image": "produto_043.jpg",
    "name": "Licor Marrrula",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 44,
    "image": "produto_044.jpg",
    "name": "Licor Milho Verde",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 45,
    "image": "produto_045.jpg",
    "name": "Licor Cachaça",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 46,
    "image": "produto_046.jpg",
    "name": "Pingometro",
    "price": "R$ 50,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 47,
    "image": "produto_047.jpg",
    "name": "Cachaça Du-Chico Amburana",
    "price": "R$ 40,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 48,
    "image": "produto_048.jpg",
    "name": "Gim Bliss",
    "price": "R$ 65,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 49,
    "image": "produto_049.jpg",
    "name": "Drink Red",
    "price": "R$ 35,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 50,
    "image": "produto_050.jpg",
    "name": "Licor de Cachaça",
    "price": "R$ 42,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 51,
    "image": "produto_051.jpg",
    "name": "Cachaça Pura Golin de Minas",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 52,
    "image": "produto_052.jpg",
    "name": "Cachaça 3 Madeira Proza Mineira",
    "price": "R$ 160,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 53,
    "image": "produto_053.jpg",
    "name": "Cachaça Pura Du-Chico",
    "price": "R$ 40,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 54,
    "image": "produto_054.jpg",
    "name": "Cachaça Pura 3 Lagos",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 55,
    "image": "produto_055.jpg",
    "name": "Vinho Tempranillo Rpsé Seco - Quinta Morães",
    "price": "R$ 40,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 56,
    "image": "produto_056.jpg",
    "name": "Vinho Merlot - Quinta Morães",
    "price": "R$ 50,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 57,
    "image": "produto_057.jpg",
    "name": "Vinho Cabernet Sauvignon - Quinta Morães",
    "price": "R$ 50,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 58,
    "image": "produto_058.jpg",
    "name": "Vinho Seco Tinto - Quinta Morães",
    "price": "R$ 27,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 59,
    "image": "produto_059.jpg",
    "name": "Vinho Demi Seco Tinto - Quinta Morães",
    "price": "R$ 27,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 60,
    "image": "produto_060.jpg",
    "name": "Cachaça Pura Salinas",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 61,
    "image": "produto_061.jpg",
    "name": "Chopp e Vinho",
    "price": "R$ 20,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 62,
    "image": "produto_062.jpg",
    "name": "Cooler de Morango - Xv de Novembro",
    "price": "R$ 22,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 63,
    "image": "produto_063.jpg",
    "name": "Cooler de Uva - ",
    "price": "R$ 22,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 64,
    "image": "produto_064.jpg",
    "name": "Vinho Demi Seco Branco - Quinta Morães",
    "price": "R$ 27,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 65,
    "image": "produto_065.jpg",
    "name": "Geleia de Uva - Tatitania",
    "price": "R$ 17,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 66,
    "image": "produto_066.jpg",
    "name": "Café Puro Superior - Lozano - 500g",
    "price": "R$ 36,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 67,
    "image": "produto_067.jpg",
    "name": "Café Puro Tradicional - Lozano - 500g",
    "price": "R$ 33,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 68,
    "image": "produto_068.jpg",
    "name": "Goaiba Pastosa Nha Nair - 400g",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 69,
    "image": "produto_069.jpg",
    "name": "Café Puro em Grãos - Lozano - 500g",
    "price": "R$ 43,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 70,
    "image": "produto_070.jpg",
    "name": "Vinho Suave Bordo - Xv de Novembro ",
    "price": "R$ 26,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 71,
    "image": "produto_071.jpg",
    "name": "Dode de Leite Puro - Tatitania - 680g",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 72,
    "image": "produto_072.jpg",
    "name": "Cocada Cremosa - Tatitania - 680g",
    "price": "R$32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 73,
    "image": "produto_073.jpg",
    "name": "Pêssego em Caldas",
    "price": "R$20,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 74,
    "image": "produto_074.jpg",
    "name": "Doce de Leite com Ameixa",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 75,
    "image": "produto_075.jpg",
    "name": "Molho de Pimenta",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 76,
    "image": "produto_076.jpg",
    "name": "Ambrosia - Tatitania - 680g",
    "price": "R$ 32,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 77,
    "image": "produto_077.jpg",
    "name": "Pé de Moleque Nha Nair - 300g",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 78,
    "image": "produto_078.jpg",
    "name": "Bananinha Nha Nair - 300g",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 79,
    "image": "produto_079.jpg",
    "name": "Dode de Leite Puro - Nha Nair - 300g",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 80,
    "image": "produto_080.jpg",
    "name": "Cocada Queimada - Nha Nair - 300g",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 81,
    "image": "produto_081.jpg",
    "name": "Cocada Branca - Nha Nair - 300g",
    "price": "R$ 16,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 82,
    "image": "produto_082.jpg",
    "name": "Cocada Branca - Capela 400g",
    "price": "R$ 21,90",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 83,
    "image": "produto_083.jpg",
    "name": "Molho de Pimenta",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 84,
    "image": "produto_084.jpg",
    "name": "Doce de Leite com Nozes - Capela 400g",
    "price": "R$ 21,90",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 85,
    "image": "produto_085.jpg",
    "name": "Dode de Leite Puro - Capela 400g",
    "price": "R$ 21,90",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 86,
    "image": "produto_086.jpg",
    "name": "Bananinha Cristalizada Lopes - 200g",
    "price": "R$ 6,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 87,
    "image": "produto_087.jpg",
    "name": "Paçoca em Cubos na Barra",
    "price": "R$ 16,0",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 88,
    "image": "produto_088.jpg",
    "name": "Biscoito recheado com Goiaba",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 89,
    "image": "produto_089.jpg",
    "name": "Doce de leite com Coco e Limão  - Capela 400g",
    "price": "R$ 21,90",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 90,
    "image": "produto_090.jpg",
    "name": "Biscoito Romeu e Julieta",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 91,
    "image": "produto_091.jpg",
    "name": "Biscoito Sequilho",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 92,
    "image": "produto_092.jpg",
    "name": "Biscoito Beliscão",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 93,
    "image": "produto_093.jpg",
    "name": "Biscoito Natinha",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 94,
    "image": "produto_094.jpg",
    "name": "Goiaba Cascão de Muzambinho",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 95,
    "image": "produto_095.jpg",
    "name": "Biscoito Casadinho",
    "price": "R$ 10,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 96,
    "image": "produto_096.jpg",
    "name": "Bananinha Zero Açucar com Ameixa",
    "price": "R$ 14,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 97,
    "image": "produto_097.jpg",
    "name": "Bananinha Zero Açucar com Castanha do Pará",
    "price": "R$ 14,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 98,
    "image": "produto_098.jpg",
    "name": "Bananinha Zero Açucar com Uvas Passas",
    "price": "R$ 14,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 99,
    "image": "produto_099.jpg",
    "name": "Bananinha Zero Açucar com Caju",
    "price": "R$ 14,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 100,
    "image": "produto_100.jpg",
    "name": "Biscoito Polvilho",
    "price": "R$ 7,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 101,
    "image": "produto_101.jpg",
    "name": "Salame italiano",
    "price": "R$ 25,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 102,
    "image": "produto_102.jpg",
    "name": "Salame Defumado",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 103,
    "image": "produto_103.jpg",
    "name": "Salame Defumado com Pimenta Biquinho",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 104,
    "image": "produto_104.jpg",
    "name": "Salame Defumado com Azeitona",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 105,
    "image": "produto_105.jpg",
    "name": "Salame Defumado com Limao Siciliano",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 106,
    "image": "produto_106.jpg",
    "name": "Salame Defumado com Queijo Provolone",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 107,
    "image": "produto_107.jpg",
    "name": "Bananinha Zero Açucar Tradicional",
    "price": "R$ 14,00",
    "unit": "unidade",
    "category": "Produtos"
  },
  {
    "id": 108,
    "image": "produto_108.jpg",
    "name": "Salame Defumado com Bacon",
    "price": "R$ 15,00",
    "unit": "unidade",
    "category": "Produtos"
  }
];
