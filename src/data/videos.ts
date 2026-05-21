/**
 * KIDDO KOUNT — Placeholder Video Data
 * 50 pre-seeded video entries for the gallery
 * Each includes metadata for SEO, filtering, and interlacing
 */

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  ageRange: '2-3' | '3-4' | '4-5' | '2-5';
  mathConcept: string;
  duration: string;
  tags: string[];
}

const mathConcepts = [
  'Counting', 'Shapes', 'Patterns', 'Measurement', 'Addition',
  'Subtraction', 'Geometry', 'Sorting', 'Comparing', 'Logic',
  'Sequences', 'Colors & Numbers', 'Spatial Awareness', 'Estimation', 'Time',
];

const videoTemplates = [
  { title: "Can Geometry Save This Egg?", concept: "Geometry", desc: "Ralph uses shapes to build a protective nest for a tiny egg. Learn triangles, squares, and circles!" },
  { title: "Count the Stars with Ralph!", concept: "Counting", desc: "Join Ralph on a cosmic journey counting twinkling stars from 1 to 10." },
  { title: "The Shape Rocket Adventure", concept: "Shapes", desc: "Build a rocket ship using geometric shapes and blast off into space!" },
  { title: "Pattern Planet", concept: "Patterns", desc: "Ralph discovers a planet where everything follows patterns. Can you spot them?" },
  { title: "Measuring Rainbow Bridge", concept: "Measurement", desc: "Help Ralph measure the rainbow bridge to rescue the cloud puppies!" },
  { title: "1 + 1 = Fun!", concept: "Addition", desc: "Ralph's first addition adventure — combining fruits in his cosmic basket." },
  { title: "Take Away the Clouds", concept: "Subtraction", desc: "Clear the sky by subtracting clouds! Ralph needs sunshine for his garden." },
  { title: "Sort the Space Gems", concept: "Sorting", desc: "Help Ralph sort sparkling space gems by color, size, and shape." },
  { title: "Big, Bigger, Biggest!", concept: "Comparing", desc: "Ralph meets three friendly aliens and learns about comparing sizes." },
  { title: "Logic Labyrinth", concept: "Logic", desc: "Navigate through a fun maze using logical thinking and clues!" },
  { title: "Number Sequence Express", concept: "Sequences", desc: "All aboard the number train! Fill in the missing numbers." },
  { title: "Rainbow Numbers", concept: "Colors & Numbers", desc: "Each color hides a number. Can you find them all with Ralph?" },
  { title: "Up, Down, All Around!", concept: "Spatial Awareness", desc: "Ralph learns about up, down, left, right, and all around!" },
  { title: "How Many Scoops?", concept: "Estimation", desc: "Guess how many ice cream scoops fit in the giant cosmic cone!" },
  { title: "Tick Tock with Ralph", concept: "Time", desc: "Learn about morning, afternoon, and night with Ralph's daily routine." },
  { title: "Counting Dinosaurs", concept: "Counting", desc: "Count adorable baby dinosaurs from 1 to 20 with Ralph!" },
  { title: "Circle, Square, Triangle Song", concept: "Shapes", desc: "Sing along with Ralph as he dances with shape friends!" },
  { title: "The Pattern Parade", concept: "Patterns", desc: "Join the cosmic pattern parade — what comes next in line?" },
  { title: "Long and Short", concept: "Measurement", desc: "Ralph compares long snakes and short worms in the garden." },
  { title: "Adding Starfish", concept: "Addition", desc: "Ralph finds starfish at the cosmic beach. Let's add them up!" },
  { title: "Subtracting Butterflies", concept: "Subtraction", desc: "Some butterflies fly away! How many are left in Ralph's garden?" },
  { title: "Shape Detective", concept: "Geometry", desc: "Ralph becomes a detective finding hidden shapes in everyday objects." },
  { title: "Color Sorting Factory", concept: "Sorting", desc: "Work in Ralph's color sorting factory and organize the cosmic crayons." },
  { title: "Heavy or Light?", concept: "Comparing", desc: "Which is heavier — the feather or the rock? Ralph investigates!" },
  { title: "If-Then Adventures", concept: "Logic", desc: "If it's raining, then we need... Ralph learns cause and effect!" },
  { title: "Skip Counting Kangaroos", concept: "Sequences", desc: "Hop along with kangaroos counting by 2s, 5s, and 10s!" },
  { title: "Number Rainbow Art", concept: "Colors & Numbers", desc: "Paint by numbers and create a beautiful cosmic rainbow!" },
  { title: "Inside the Box, Outside the Box", concept: "Spatial Awareness", desc: "Where is Ralph? Inside, outside, beside — learn position words!" },
  { title: "Guess the Group", concept: "Estimation", desc: "How many marbles are in the jar? Ralph makes his best guess!" },
  { title: "Day and Night Counting", concept: "Time", desc: "Count activities we do during the day and at night." },
  { title: "Counting Cosmic Cookies", concept: "Counting", desc: "Ralph bakes cookies and counts them — yummy math fun!" },
  { title: "3D Shapes in Space", concept: "Shapes", desc: "Discover cubes, spheres, and cylinders floating in outer space!" },
  { title: "Growing Pattern Garden", concept: "Patterns", desc: "Plant seeds in a pattern and watch Ralph's garden grow!" },
  { title: "Taller Than a Rocket", concept: "Measurement", desc: "Is the giraffe taller than the rocket? Measuring fun with Ralph!" },
  { title: "Adding Friends Together", concept: "Addition", desc: "Ralph's friends arrive one by one. How many friends total?" },
  { title: "Sharing Cosmic Pizza", concept: "Subtraction", desc: "Ralph shares his pizza slices. How many are left for him?" },
  { title: "Symmetry Butterfly", concept: "Geometry", desc: "Ralph discovers symmetry by painting beautiful butterfly wings!" },
  { title: "Size Sorting Space Station", concept: "Sorting", desc: "Sort astronaut supplies from smallest to biggest on the space station." },
  { title: "More or Less Apples", concept: "Comparing", desc: "Who has more apples — Ralph or his robot friend? Let's compare!" },
  { title: "What Comes Next?", concept: "Logic", desc: "Complete the pattern! Ralph's logic puzzle adventure." },
  { title: "Counting by Tens Rocket Launch", concept: "Sequences", desc: "10, 20, 30... blast off! Count by tens to reach the moon!" },
  { title: "Number Hunt Safari", concept: "Colors & Numbers", desc: "Go on a safari and find hidden numbers in the cosmic jungle!" },
  { title: "Left and Right Dance", concept: "Spatial Awareness", desc: "Ralph dances left and right — shake it out and learn directions!" },
  { title: "Handful of Stars", concept: "Estimation", desc: "Ralph grabs a handful of stars. Can you estimate how many?" },
  { title: "Before and After", concept: "Time", desc: "What happens before lunch? After bedtime? Ralph explores time order!" },
  { title: "Counting Underwater Friends", concept: "Counting", desc: "Dive deep and count the fish, octopi, and seahorses with Ralph!" },
  { title: "Shape Pizza Party", concept: "Shapes", desc: "Cut pizza into different shapes and serve it to Ralph's friends!" },
  { title: "Musical Patterns", concept: "Patterns", desc: "Clap, stomp, clap! Create rhythmic patterns with Ralph's cosmic band!" },
  { title: "Measuring with Ralph's Feet", concept: "Measurement", desc: "How many Ralph-feet long is the table? Non-standard measurement fun!" },
  { title: "Zero the Hero", concept: "Addition", desc: "Meet Zero — the hero who makes numbers stay the same when added!" },
];

export const videos: Video[] = videoTemplates.map((v, i) => ({
  id: `video-${String(i + 1).padStart(3, '0')}`,
  title: v.title,
  description: v.desc,
  youtubeId: '', // Placeholder — add real YouTube IDs when videos are published
  thumbnail: `/thumbnails/video-${String(i + 1).padStart(3, '0')}.webp`,
  ageRange: (['2-3', '3-4', '4-5', '2-5'] as const)[i % 4],
  mathConcept: v.concept,
  duration: `${Math.floor(Math.random() * 8) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  tags: [v.concept.toLowerCase(), 'ralph', 'math', 'kids', 'stem'],
}));

/**
 * Fisher-Yates Shuffle with session seed
 * Ensures non-repeating interlaced video order per session
 */
export function shuffleVideos(videoList: Video[], seed?: number): Video[] {
  const shuffled = [...videoList];
  let currentSeed = seed ?? Date.now();
  
  // Simple seeded random number generator (Mulberry32)
  const seededRandom = () => {
    currentSeed |= 0;
    currentSeed = (currentSeed + 0x6D2B79F5) | 0;
    let t = Math.imul(currentSeed ^ (currentSeed >>> 15), 1 | currentSeed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Get or create session seed for consistent shuffle order
 */
export function getSessionSeed(): number {
  if (typeof window === 'undefined') return Date.now();
  
  const stored = localStorage.getItem('kk-session-seed');
  if (stored) return parseInt(stored, 10);
  
  const seed = Date.now();
  localStorage.setItem('kk-session-seed', String(seed));
  return seed;
}
