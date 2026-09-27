export type Atmosphere = "warm" | "moon" | "danger" | "ghost";

export type StoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  atmosphere: Atmosphere;
  action: string;
};

export const storyChapters: StoryChapter[] = [
  {
    id: "remember",
    eyebrow: "THE OLD MOUNTAIN STORY",
    title: "They say the mountains remember everything.",
    text: "Every footstep. Every name. Every goodbye. Every secret whispered.",
    image: "/story/voice-02-mountains-remember.webp",
    alt: "Friends gathered around a campfire beneath a moonlit mountain lake",
    atmosphere: "moon",
    action: "LISTEN",
  },
  {
    id: "rule",
    eyebrow: "THE RULE",
    title: "Don't whistle after dark.",
    text: "The mountain people have rules. Some rules exist because somebody learned them the hard way.",
    image: "/story/voice-03-dont-whistle.webp",
    alt: "Campfire gathering beneath a full moon with a dark forest behind it",
    atmosphere: "danger",
    action: "REMEMBER",
  },
  {
    id: "warning",
    eyebrow: "THE WARNING",
    title: "If you hear someone you know calling your name from the woods after dark, no you didn't.",
    text: "Keep walking. And whatever you do—don't look back.",
    image: "/story/voice-04-warning.webp",
    alt: "Ghostly figures watching from a dark forest beyond a campfire",
    atmosphere: "ghost",
    action: "LISTEN",
  },
  {
    id: "gone",
    eyebrow: "THE FIRST ABSENCE",
    title: "Some disappearances begin as ordinary nights.",
    text: "A party in the woods. Friends laughing around the fire. A walk home that should have taken only a few minutes.",
    image: "/story/voice-05-gone.webp",
    alt: "A dark mountain story scene centered around a campfire",
    atmosphere: "moon",
    action: "CONTINUE",
  },
  {
    id: "party",
    eyebrow: "THE GIRL",
    title: "There’s a story of a girl who walked home alone from a party in the woods.",
    text: "Her friends never saw her at school the next day. Her bed was never slept in.",
    image: "/story/voice-06-diedre-party.webp",
    alt: "A girl leaving a mountain gathering and walking toward the dark woods",
    atmosphere: "danger",
    action: "FOLLOW THE PATH",
  },
  {
    id: "diedre",
    eyebrow: "DIEDRE",
    title: "Poor Diedre.",
    text: "Fiercely independent, she left her friends behind in the dark. She thought she didn’t need anyone. Until she was utterly alone, wondering which way was home.",
    image: "/story/voice-07-diedre-alone.webp",
    alt: "Diedre walking alone along a haunted mountain road at night",
    atmosphere: "danger",
    action: "CONTINUE",
  },
  {
    id: "voice",
    eyebrow: "THE VOICE",
    title: "The locals believe Diedre heard the one thing she couldn’t resist.",
    text: "Her mother’s voice. She knew the rules. Don’t look back. But she looked back anyway.",
    image: "/story/voice-08-mothers-voice.webp",
    alt: "A ghostly woman calling to Diedre from a moonlit forest",
    atmosphere: "ghost",
    action: "LISTEN FOR HER",
  },
  {
    id: "mother",
    eyebrow: "THE MOTHER",
    title: "Despite knowing her mother had been dead for years, Diedre couldn’t help believing it was her.",
    text: "The mountain had found the voice she was most likely to follow.",
    image: "/story/voice-09-mother-apparition.webp",
    alt: "A luminous ghostly mother reaching toward Diedre in a haunted forest",
    atmosphere: "ghost",
    action: "LOOK",
  },
  {
    id: "road",
    eyebrow: "THE ROAD",
    title: "Some people say they see a girl who seems lost when they drive through this neck of the woods.",
    text: "And when they look in the rearview mirror to see if their eyes are playing tricks on them…",
    image: "/story/voice-10-rearview.webp",
    alt: "A driver seeing a ghostly girl in a rearview mirror on a mountain road",
    atmosphere: "danger",
    action: "CHECK THE MIRROR",
  },
  {
    id: "crash",
    eyebrow: "THE ROAD REMEMBERS",
    title: "Some people say their vision blurs. Some crash and don’t make it.",
    text: "The road has its own version of the story.",
    image: "/story/voice-11-crash.webp",
    alt: "A crashed car on a flooded mountain road with a ghost in the rearview mirror",
    atmosphere: "danger",
    action: "LOOK AGAIN",
  },
  {
    id: "taken",
    eyebrow: "THE TAKEN",
    title: "Just like Diedre, those that crash or disappear to never be seen again—those are the ones who are taken.",
    text: "The mountain keeps what it remembers.",
    image: "/story/voice-12-taken.webp",
    alt: "A submerged car in a haunted mountain lake beneath a ghostly figure",
    atmosphere: "ghost",
    action: "RETURN TO THE FIRE",
  },
];

export const titleImage = "/story/voice-01-title.webp";
