export const quizData = [
    {
        id: 1,
        text: "Hoe heet de stadspoort van Berlijn?",
        options: [
            { text: "Brandenburger Tor", isCorrect: true },
            { text: "Eiffeltoren", isCorrect: false },
            { text: "Berlijnse muur", isCorrect: false },
            { text: "Checkpoint Charlie", isCorrect: false }
        ]
    },
    {
        id: 2,
        text: "Wie zie je op de bovenstaande afbeelding?",
        image: new URL('@/assets/images/Fred.jpg' , import.meta.url).href,
        options: [
            { text: "Johny Bravo", isCorrect: false },
            { text: "Roadrunner", isCorrect: false },
            { text: "Popeye", isCorrect: false },
            { text: "Fred Flintstone", isCorrect: true }
        ]
    },
    {
        id: 3,
        text: "Waarmee luisterden mensen naar muziek voordat de CD werd uitgevonden?",
        options: [
            { text: "Videobanden", isCorrect: false },
            { text: "MP3-spelers", isCorrect: false },
            { text: "Cassettebandjes", isCorrect: true },
            { text: "Discman", isCorrect: false }
        ]
    },
    {
        id: 4,
        text: "Wat moest je doen om het voorwerp op de afbeelding te kunnen gebruiken?",
        image: new URL('@/assets/images/Zelda.WEBP' , import.meta.url).href,
        options: [
            { text: "Op de knop drukken", isCorrect: false },
            { text: "Stof eruit blazen", isCorrect: true },
            { text: "Ermee schudden", isCorrect: false },
            { text: "In de Nintendo doen", isCorrect: false }
        ]
    },
    {
        id: 5,
        text: "In welk jaar werd Barack Obama voor het eerst verkozen tot president van de Verenigde Staten?",
        options: [
            { text: "2004", isCorrect: false },
            { text: "2000", isCorrect: false },
            { text: "2008", isCorrect: true },
            { text: "2012", isCorrect: false }
        ]
    },
    {
        id: 6,
        text: "Wie is de persoon op de afbeelding?",
        image: new URL('@/assets/images/Jack.jpg' , import.meta.url).href,
        options: [
            { text: "Michael Jackson", isCorrect: false },
            { text: "Jack Sparrow", isCorrect: true },
            { text: "Piet Piraat", isCorrect: false },
            { text: "Kapitein Haak", isCorrect: false } 
        ]
    },
    {
        id: 7,
        text: "Wat moest je doen om de film op een videoband te kunnen kijken?",
        options: [
            { text: "De videoband in de videospeler stoppen", isCorrect: false },
            { text: "De videoband in de DVD-speler stoppen", isCorrect: false },
            { text: "De videoband terugspoelen", isCorrect: true },
            { text: "De videoband schoonblazen", isCorrect: false }
        ]
    },
    {
        id: 8,
        text: "Wie is de persoon op de afbeelding?",
        image: new URL('@/assets/images/Zidane.jpg' , import.meta.url).href,
        options: [
            { text: "Cristiano Ronaldo", isCorrect: false },
            { text: "Arjen Robben", isCorrect: false },
            { text: "Zinedine Zidane", isCorrect: true },
            { text: "Lionel Messi", isCorrect: false }
        ]
    },
    {
    id: 9,
    text: "Wat moesten bezoekers van Samson en Gert doen als ze binnen wilden komen?",
    options: [
        { text: "Op de bel drukken", isCorrect: false },
        { text: "Op de deur kloppen", isCorrect: true },
        { text: "Gert een appje sturen", isCorrect: false },
        { text: "Zorgen dat ze in het zicht van de slimme deurbel zijn", isCorrect: false }
    ]
},
    {
        id: 10,
        text: "welke band zie je op de afbeelding?",
        image: new URL('@/assets/images/Band.jpg' , import.meta.url).href,
        options: [
            { text: "Guns N' Roses", isCorrect: true },
            { text: "Led Zeppelin", isCorrect: false },
            { text: "The Beatles", isCorrect: false },
            { text: "Pink Floyd", isCorrect: false }
        ]
    }
]