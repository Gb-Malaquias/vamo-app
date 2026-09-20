import { Place } from "@/domain/entities/Place";

export const mockPlaces = [
  {
    id: "1",
    name: "Oficina de Cerâmica Criativa",
    description: "Experiência prática de cerâmica com orientação de artista local",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7939,
      longitude: -47.8828,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "2",
    name: "Tour Histórico pelo Centro",
    description: "Passeio guiado pelos principais pontos históricos e culturais de Brasília",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.7998,
      longitude: -47.8645,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "3",
    name: "Aula de Fotografia Urbana",
    description: "Aula prática de fotografia explorando arquitetura e paisagens da cidade",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7801,
      longitude: -47.9292,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "4",
    name: "Workshop de Grafite",
    description: "Aprenda técnicas de grafite com um artista urbano da região",
    category: "EVENT",
    priceRange: "LOW",
    location: {
      latitude: -15.8057,
      longitude: -47.9136,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "5",
    name: "Experiência de Culinária Brasileira",
    description: "Aula prática de culinária com receitas tradicionais de diferentes regiões do Brasil",
    category: "EVENT",
    priceRange: "HIGH",
    location: {
      latitude: -15.7921,
      longitude: -47.8898,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "6",
    name: "Passeio Fotográfico pela Asa Sul",
    description: "Caminhada guiada para conhecer lugares e registrar a arquitetura modernista",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.8126,
      longitude: -47.9024,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "7",
    name: "Aula de Dança Brasileira",
    description: "Experiência de dança com ritmos brasileiros conduzida por instrutor local",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7947,
      longitude: -47.9006,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "8",
    name: "Tour de Arte Urbana",
    description: "Passeio guiado por murais, grafites e manifestações de arte urbana",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.7984,
      longitude: -47.9112,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "9",
    name: "Workshop de Fotografia de Natureza",
    description: "Aprenda técnicas de fotografia durante uma experiência ao ar livre",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7678,
      longitude: -47.8894,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "10",
    name: "Trilha Guiada no Cerrado",
    description: "Trilha acompanhada por guia local com informações sobre fauna e flora do Cerrado",
    category: "TOURIST_SPOT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7412,
      longitude: -47.8877,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "11",
    name: "Aula de Culinária Regional",
    description: "Aprenda receitas tradicionais brasileiras com cozinheiro local",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7992,
      longitude: -47.8765,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "12",
    name: "Passeio de Bicicleta Cultural",
    description: "Passeio guiado de bicicleta por pontos culturais e históricos da cidade",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.7848,
      longitude: -47.8953,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "13",
    name: "Experiência de Capoeira",
    description: "Aula introdutória de capoeira acompanhada por instrutor experiente",
    category: "EVENT",
    priceRange: "LOW",
    location: {
      latitude: -15.8083,
      longitude: -47.8917,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "14",
    name: "Tour Arquitetônico de Brasília",
    description: "Passeio guiado pelos principais projetos arquitetônicos da capital",
    category: "TOURIST_SPOT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7936,
      longitude: -47.8825,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "15",
    name: "Workshop de Pintura",
    description: "Experiência artística para iniciantes com materiais fornecidos pelo artista",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7874,
      longitude: -47.8978,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "16",
    name: "Tour Gastronômico Local",
    description: "Roteiro guiado por estabelecimentos que valorizam a gastronomia regional",
    category: "TOURIST_SPOT",
    priceRange: "HIGH",
    location: {
      latitude: -15.8032,
      longitude: -47.8891,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "17",
    name: "Aula de Surf no Lago",
    description: "Experiência introdutória de esporte aquático com instrutor especializado",
    category: "EVENT",
    priceRange: "HIGH",
    location: {
      latitude: -15.8231,
      longitude: -47.8574,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "18",
    name: "Passeio de Stand Up Paddle",
    description: "Atividade ao ar livre acompanhada por instrutor às margens do lago",
    category: "TOURIST_SPOT",
    priceRange: "HIGH",
    location: {
      latitude: -15.8247,
      longitude: -47.8538,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "19",
    name: "Workshop de Música",
    description: "Experiência musical com músico local e introdução a instrumentos brasileiros",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7954,
      longitude: -47.9097,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "20",
    name: "Tour de Fotografia ao Pôr do Sol",
    description: "Passeio fotográfico guiado para registrar o pôr do sol em Brasília",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.7782,
      longitude: -47.8659,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "21",
    name: "Workshop de Artesanato",
    description: "Aprenda técnicas tradicionais de artesanato com artesão da região",
    category: "EVENT",
    priceRange: "LOW",
    location: {
      latitude: -15.8006,
      longitude: -47.8957,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "22",
    name: "Experiência de Observação de Aves",
    description: "Passeio guiado para observar aves e conhecer a biodiversidade do Cerrado",
    category: "TOURIST_SPOT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7398,
      longitude: -47.9052,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "23",
    name: "Aula de Teatro",
    description: "Experiência de iniciação teatral conduzida por profissional das artes cênicas",
    category: "EVENT",
    priceRange: "MEDIUM",
    location: {
      latitude: -15.7918,
      longitude: -47.9071,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "24",
    name: "Tour Cultural pela Vila",
    description: "Passeio guiado por espaços culturais, feiras e pontos históricos locais",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.8038,
      longitude: -47.9149,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "25",
    name: "Workshop de Cerveja Artesanal",
    description: "Experiência guiada para conhecer o processo de produção de cervejas artesanais",
    category: "EVENT",
    priceRange: "HIGH",
    location: {
      latitude: -15.7869,
      longitude: -47.9132,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "26",
    name: "Experiência de Yoga ao Ar Livre",
    description: "Aula de yoga com instrutor em um espaço aberto e tranquilo",
    category: "EVENT",
    priceRange: "LOW",
    location: {
      latitude: -15.7653,
      longitude: -47.8831,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "27",
    name: "Passeio Cultural pelo Plano Piloto",
    description: "Caminhada guiada para conhecer a história e curiosidades do Plano Piloto",
    category: "TOURIST_SPOT",
    priceRange: "LOW",
    location: {
      latitude: -15.7941,
      longitude: -47.8826,
      city: "Brasília",
    },
    validated: true,
  },

  {
    id: "28",
    name: "Workshop de Produção de Vídeo",
    description: "Oficina prática de gravação e edição de vídeos com produtor audiovisual",
    category: "EVENT",
    priceRange: "HIGH",
    location: {
      latitude: -15.7896,
      longitude: -47.9028,
      city: "Brasília",
    },
    validated: true,
  },
];
