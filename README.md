# 🌎 VAMO

> **Escolhe. Vamo.**

O **VAMO** é uma plataforma de descoberta de lugares, experiências e atividades que ajuda usuários a encontrar o que fazer de forma simples e personalizada.

A proposta combina **descoberta por interação**, **recomendações personalizadas por IA** e, futuramente, **criação de roteiros com IA**, conectando usuários a lugares, experiências e prestadores de serviços.

---

## 💡 Sobre o projeto

Encontrar algo interessante para fazer nem sempre é fácil. Muitas vezes, existem diversos lugares e atividades disponíveis, mas as informações estão espalhadas entre diferentes plataformas.

O VAMO busca centralizar essa descoberta em uma experiência simples:

**Você informa o que procura → o VAMO apresenta opções → você escolhe → VAMO.**

A aplicação possui uma interface inspirada em sistemas de descoberta por cards, permitindo que o usuário explore lugares e demonstre interesse de maneira rápida.

> 🚧 **Status atual:** projeto em desenvolvimento. A versão atual utiliza dados mockados para validar a experiência e as funcionalidades da aplicação.
> 🚧 ** IA ** ainda não implementada. A IA irá trabalhar com os dados e informações já cadastradas para evitar invenções, além de personalizar as recomendações para o usuário.

---

## 🎯 Objetivos

**Ser a ponte entre quem oferece experiências locais e o turista.**

* Facilitar a descoberta de lugares e atividades.
* Reduzir o tempo necessário para decidir o que fazer.
* Personalizar recomendações de acordo com o perfil do usuário.
* Dar maior visibilidade a pequenos negócios e prestadores de serviços locais.
* Futuramente utilizar IA para recomendar experiências e montar roteiros personalizados.

---

## ✨ Funcionalidades

### 🃏 Descoberta de lugares

O usuário pode navegar por cards contendo informações sobre diferentes locais e experiências.

Entre as informações apresentadas estão:

* Nome
* Descrição
* Categoria
* Faixa de preço
* Localização
* Status de validação

---

### ❤️ Curtidas

O usuário pode demonstrar interesse em um local através da funcionalidade de curtida.

As curtidas atualmente são armazenadas localmente para que possam ser consultadas posteriormente.

---

### 📍 Locais visitados

O VAMO possui uma estrutura para registrar locais que já foram visitados pelo usuário.

Esses dados também podem ser utilizados posteriormente para:

* Histórico de experiências
* Conquistas
* Personalização das recomendações

---

### 🏆 Conquistas

O projeto possui uma estrutura inicial para conquistas relacionadas às experiências do usuário.

A ideia é transformar a descoberta de lugares em uma experiência mais interativa e incentivar o usuário a conhecer novos locais.

---

### 🤖 Recomendações com IA — planejado

Uma das principais evoluções planejadas para o VAMO é a utilização de inteligência artificial para personalizar as recomendações.

A IA poderá considerar informações como:

* Preferências do usuário
* Locais curtidos
* Locais visitados
* Orçamento
* Localização
* Tipo de atividade
* Tempo disponível

e gerar uma resposta consultando opções que tiverem cadastradas no sistema.

O objetivo é fazer com que as recomendações sejam cada vez mais relevantes para cada usuário.

---

### 🗺️ Criação de roteiros — planejado

Outra funcionalidade planejada é permitir que o usuário descreva o que deseja fazer e receba um roteiro personalizado.

Por exemplo:

> "Quero passar um sábado em Brasília, gastando até R$ 200 e fazendo atividades ao ar livre."

A partir dessas informações, o VAMO poderá montar uma sequência de atividades e lugares compatíveis com a solicitação e nas preferências do usuário.

---

### 🧑‍🏫 Prestadores de serviços

O VAMO também poderá permitir que pessoas e pequenos negócios ofereçam experiências e serviços.

Exemplos:

* Aulas de surf
* Trilhas guiadas
* Passeios
* Experiências gastronômicas
* Atividades esportivas
* Experiências culturais

Isso amplia o VAMO de uma plataforma de descoberta de lugares para uma plataforma de **descoberta de experiências**.

---

## 🏗️ Arquitetura

O projeto atualmente utiliza uma estrutura baseada em funcionalidades, buscando separar responsabilidades e facilitar a evolução da aplicação.

```text
src/
├── app/
│   ├── (tabs)/
│   └── ...
│
├── components/
│   ├── AppButton
│   └── PlaceCard
│
├── contexts/
│   ├── likesContext
│   └── visitedContext
│
├── features/
│   └── places/
│       ├── mockPlaces.ts
│       └── ...
│
├── hooks/
│   ├── usePlaces
│   └── useSwipe
│
├── infra/
│   └── storage/
│       └── storage.ts
│
└── theme/
    └── theme.ts
```

A estrutura pode ser modificada conforme o projeto evolui para uma arquitetura com backend, banco de dados e serviços de IA.

---

## 🛠️ Tecnologias

### Front-end / Mobile

* **React Native**
* **Expo**
* **Expo Router**
* **TypeScript**

### Armazenamento

* **AsyncStorage**

Atualmente utilizado para persistência local de informações como curtidas.

### Futuras tecnologias

A arquitetura do projeto poderá incorporar:

* API própria
* Banco de dados
* Autenticação
* Serviços de IA
* Geolocalização
* Sistema de recomendação

---

## 📱 Estado atual

O VAMO atualmente está em fase de desenvolvimento do **MVP**.

### Implementado

* [x] Interface inicial
* [x] Navegação entre telas
* [x] Sistema de cards
* [x] Descoberta por interação
* [x] Curtidas
* [x] Persistência local das curtidas
* [x] Registro de locais visitados
* [x] Perfil do usuário
* [x] Sistema inicial de conquistas
* [x] Dados mockados

### Em desenvolvimento

* [ ] Backend
* [ ] Banco de dados
* [ ] Sistema de autenticação
* [ ] Cadastro de usuários
* [ ] Cadastro de estabelecimentos
* [ ] Sistema de validação de locais
* [ ] Sistema de recomendação
* [ ] * [ ] Recomendações personalizadas com IA
* [ ] Geração de roteiros com IA
* [ ] Cadastro de prestadores de serviços

### Planejado


* [ ] Sistema de avaliações
* [ ] Geolocalização
* [ ] Filtros avançados
* [ ] Sistema completo de conquistas
* [ ] Monetização

---

## 🚀 Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

* Node.js
* npm
* Expo
* Git

### Clonar o repositório

```bash
git clone REPOSITORIO do VAMO
cd vamo-app
```

### Instalar as dependências

```bash
npm install
```

### Iniciar o projeto

```bash
npx expo start
```

Depois disso, é possível executar o projeto utilizando:

* Expo Go (app na Google play) (mais fácil de usar)

configuração atual do projeto

---

## 📂 Dados atuais

A versão atual utiliza **dados mockados** para representar os lugares disponíveis.

Isso é proposital nesta etapa do desenvolvimento, permitindo validar:

* Fluxo da aplicação
* Interface
* Navegação
* Experiência do usuário
* Sistema de curtidas
* Sistema de visitas
* Estrutura das entidades

A substituição dos mocks por uma API e banco de dados será realizada em uma etapa posterior.

---

## 🔮 Visão futura

O objetivo do VAMO é evoluir de um simples sistema de descoberta de lugares para uma plataforma capaz de entender **o que o usuário quer fazer** e ajudá-lo a encontrar experiências adequadas.

A visão do produto pode ser resumida em:

```text
                 ┌──────────────────┐
                 │      USUÁRIO     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │      VAMO        │
                 │                  │
                 │ Preferências     │
                 │ Histórico        │
                 │ Localização      │
                 │ Orçamento        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │       IA         │
                 │                  │
                 │ Recomendações    │
                 │ Roteiros         │
                 │ Experiências     │
                 └────────┬─────────┘
                          │
                          ▼
          ┌──────────────────────────────┐
          │ Lugares + Experiências +     │
          │ Prestadores de serviços      │
          └──────────────────────────────┘
```

---

## 👨‍💻 Desenvolvedor

**Gabriel Malaquias**

Desenvolvedor em formação com foco em **Back-End**, atualmente estudando Full-Stack**.

O VAMO é um projeto desenvolvido para explorar conceitos de:

* Desenvolvimento mobile
* React Native
* TypeScript
* Arquitetura de software
* Experiência do usuário
* Sistemas de recomendação
* Inteligência artificial
* Desenvolvimento de produtos digitais

---

## 📌 Status

**🚧 Em desenvolvimento**

O projeto está sendo desenvolvido iterativamente, começando pela validação da experiência do usuário e evoluindo posteriormente para uma arquitetura completa com backend, banco de dados e inteligência artificial.

> **Escolhe. Vamo.**
