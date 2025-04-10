

// stats.html

const testimonials = [
    {
        author: {
            name: 'Shark',
            image: 'images/shark.png',
        },
        speed: '8,500 points - Fast and maneuverable, some reach speeds of 35 mph',
        strength: '9,000 points - Powerful bite force, strong swimmers.',
        beauty: '5,000 points - Some species are sleek and cool, but not traditionally cute.',
        favorability: '6,500 points - Fascinating, but also feared.',
        intellegence: '7,500 points - Capable of learning and problem-solving.',
        predatorprey: 'Predator - Apex predators in their ecosystems.',
        specialskill: 'Electroreception, silent swimming, multiple rows of teeth, breaching (great whites), ambush attacks',
    },
    {
        author: {
            name: 'Dolphin',
            image: 'images/dolphin.jpeg',
        },
        speed: '9,000 points - Fast and incredibly maneuverable.',
        strength: '6,500 points - Strong but not built for brute force.',
        beauty: '9,000 points - Sleek, smooth, and friendly-looking.',
        favorability: '10,000 points - Loved worldwide.',
        intellegence: '9,800 points - One of the smartest non-human animals.',
        predatorprey: 'Both - Eat fish but can be hunted by orcas.',
        specialskill: 'Echolocation, teamwork, tool use, ramming sharks, high-speed jumps.',
    },
    {
        author: {
            name: 'Sea Turtle',
            image: 'images/turtle.jpeg',
        },
        speed: '3,500 points - Slow on land but decent swimmers.',
        strength: '5,000 points - Strong jaws and shells.',
        beauty: '8,000 points - Many species have adorable faces.',
        favorability: '9,500 points - Well-loved creatures.',
        intellegence: '6,500 points - Decent memory and problem-solving.',
        predatorprey: 'Mostly prey - Hunted by sharks and humans.',
        specialskill: 'Long lifespan, migration memory, strong jaw snaps, retreating into shells.',
    },
    {
        author: {
            name: 'Clownfish',
            image: 'images/clownfish.jpeg',
        },
        speed: '5,000 points - Decent swimmers.',
        strength: '2,500 points - Tiny but tough.',
        beauty: '9,500 points - Bright colors and small size.',
        favorability: '10,000 points - Beloved thanks to Finding Nemo.',
        intellegence: '5,500 points - Decent for a small fish.',
        predatorprey: 'Mostly prey - Eaten by larger fish.',
        specialskill: 'Immunity to anemone stings, hiding in anemones',
    },
    {
        author: {
            name: 'Seahorse',
            image: 'images/seahorse.png',
        },
        speed: '1,500 points - Very slow swimmers.',
        strength: '2,000 points - Not built for power.',
        beauty: '9,500 points - Delicate, elegant, and unique.',
        favorability: '9,000 points - Popular in aquariums.',
        intellegence: '3,500 points - Limited cognition.',
        predatorprey: 'Mostly prey - Eaten by larger fish.',
        specialskill: 'Camouflage, prehensile tail, clinging to objects with tail.',
    },
    {
        author: {
            name: 'Electric Eel',
            image: 'images/eel.jpg',
        },
        speed: '6,500 points - Good burst speed.',
        strength: '7,000 points - Strong, especially when shocking prey.',
        beauty: '3,500 points - More eerie than cute.',
        favorability: '7,500 points - Fascinating but dangerous.',
        intellegence: '6,500 points - Good problem-solving ability.',
        predatorprey: 'Both - Eats fish but has few predators.',
        specialskill: 'Electric shock up to 860 volts, stunning prey with electric bursts.',
    },
    {
        author: {
            name: 'Orca',
            image: 'images/orca.png',
        },
        speed: '9,500 points - One of the fastest marine predators.',
        strength: '10,000 points - Incredibly powerful, can take down whales.',
        beauty: '9,000 points - Sleek black-and-white design.',
        favorability: '9,000 points - Loved, but also feared.',
        intellegence: '10,000 points - Highly intelligent, social, and emotional.',
        predatorprey: 'Predator - Nothing hunts them.',
        specialskill: 'Team hunting, advanced communication, coordinated wave attacks, flipping sharks.',
    },
    {
        author: {
            name: 'Narwhal',
            image: 'images/narwhal.jpg',
        },
        speed: '7,500 points - Quick and agile in icy waters.',
        strength: '6,500 points - Not the strongest but tough.',
        beauty: '9,000 points - Looks like a magical sea unicorn.',
        favorability: '9,500 points - A legendary and beloved animal.',
        intellegence: '7,000 points - Smart but not as advanced as orcas.',
        predatorprey: 'Both - Eats fish, hunted by orcas.',
        specialskill: 'Tusk sensing, deep diving, using its tusk to stun fish.',
    },
    {
        author: {
            name: 'Jellyfish',
            image: 'images/jellyfish.jpg',
        },
        speed: '2,500 points - They pulse through water but lack true mobility.',
        strength: '1,000 points - Physically fragile and mostly defenseless outside of their stinging tentacles.',
        beauty: '9,000 points - Some of the most mesmerizing sea creatures.',
        favorability: '4,000 points - Some find them fascinating, but others see them as pests.',
        intellegence: '1,500 points - No brain.',
        predatorprey: 'Prey - Often preyed upon but some species are dangerous predators themselves.',
        specialskill: 'Some are immortal, venom can paralyze or kill, some glow in the dark, pulsing drift, bioluminescence, and venomous sting.',
    },
];

const makeTestimonialCard = testimonial => {
    return `<div class="testimonial-card"> 
        <img src="${testimonial.author.image}">
        <h2>${testimonial.author.name} </h2>
        <p>Speed: ${testimonial.speed}</p>
        <p>Strength: ${testimonial.strength}</p>
        <p>Beauty: ${testimonial.beauty}</p>
        <p>Favorability: ${testimonial.favorability}</p>
        <p>Intellegence: ${testimonial.intellegence}</p>
        <p>Predator or Prey?: ${testimonial.predatorprey}</p>
        <p>Special Skills: ${testimonial.specialskill}</p>
    </div>`
};

let currentTestimonial = 0;

const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length - 1) {
        currentTestimonial += 1;
        updatePage();
    }
}
const prevTestimonial = () => {
    if (currentTestimonial > 0) {
        currentTestimonial -= 1;
        updatePage();
    }
}

const updatePage = () => {
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);

    if (testimonials.length > 1) {
        markup += `<nav>
        <button onclick="prevTestimonial()">Previous</button>
    <button onclick="nextTestimonial()">Next</button>
   </nav>`
    }

    const container = document.getElementById('testimonials-container');

    container.innerHTML = markup;
}

updatePage();