

const roles = [
    '1 - Tank',
    '2 - Healer',
    '3 - DPS'
]

const keystones = [
"1 - DOS",
"2 - HOA",
"3 - MISTS",
"4 - NW",
"5 - PF",
"6 - SD",
"7 - SOA",
"8 - TOP"
]

const affixes = [
    "Fortified",
    "Tyrannical",
    "Bolstering",
    "Bursting",
    "Inspiring",
    "Raging",
    "Sanguine",
    "Spiteful",
    "Explosive",
    "Grievous",
    "Necrotic",
    "Quaking",
    "Storming",
    "Volcanic",
    "Tormented" 
]

const classes = [
    "1 - Death Knight",
    "2 - Demon Hunter",
    "3 - Druid",
    "4 - Hunter",
    "5 - Mage",
    "6 - Monk",
    "7 - Paladin",
    "8 - Priest",
    "9 - Rogue",
    "10 - Shaman",
    "11 - Warlock",
    "12 - Warrior"
]

const regions = [
    "1 - Americas & Oceanic",
    "2 - Europe [not supported yet]",
    "3 - Korea [not supported yet",
    "4 - Taiwan [not supported yet]"
]

const americas_and_oceanic_realms = [
"Aegwynn",
"Aerie Peak",
"Agamaggan",
"Aggramar",
"Akama",
"Alexstrasza",
"Alleria",
"Altar of Storms",
"Alterac Mountains",
"Aman'Thul",
"Andorhal",
"Anetheron",
"Antonidas",
"Anub'arak",
"Anvilmar",
"Arathor",
"Archimonde",
"Area 52",
"Argent Dawn",
"Arthas","Arygos",
"Auchindoun",
"Azgalor",
"Azjol-Nerub",
"Azralon",
"Azshara",
"Azuremyst",
"Baelgun",
"Balnazzar",
"Barthilas",
"Black Dragonflight",
"Blackhand",
"Blackrock",
"Blackwater Raiders",
"Blackwing Lair",
"Blade's Edge",
"Bladefist"
,"Bleeding Hollow",
"Blood Furnace",
"Bloodhoof",
"Bloodscalp",
"Bonechewer",
"Borean Tundra",
"Boulderfist",
"Bronzebeard",
"Burning Blade",
"Burning Legion",
"Caelestrasz",
"Cairne",
"Cenarion Circle",
"Cenarius",
"Cho'gall",
"Chromaggus",
"Coilfang",
"Crushridge",
"Daggerspine",
"Dalaran",
"Dalvengyr",
"Dark Iron",
"Darkspear",
"Darrowmere",
"Dath'Remar",
"Dawnbringer",
"Deathwing",
"Demon Soul",
"Dentarg",
"Destromath",
"Dethecus",
"Detheroc",
"Doomhammer",
"Draenor",
"Dragonblight",
"Dragonmaw",
"Drak'Tharon",
"Drak'thul",
"Draka",
"Drakkari",
"Dreadmaul",
"Drenden",
"Dunemaul",
"Durotan",
"Duskwood",
"Earthen Ring",
"Echo Isles",
"Eitrigg",
"Eldre'Thalas",
"Elune",
"Emerald Dream",
"Eonar",
"Eredar",
"Executus",
"Exodar",
"Farstriders",
"Feathermoon",
"Fenris",
"Firetree",
"Fizzcrank",
"Frostmane",
"Frostmourne",
"Frostwolf",
"Galakrond",
"Gallywix",
"Garithos",
"Garona",
"Garrosh",
"Ghostlands",
"Gilneas",
"Gnomeregan",
"Goldrinn",
"Gorefiend",
"Gorgonnash",
"Greymane",
"Grizzly Hills",
"Gul'dan",
"Gundrak",
"Gurubashi",
"Hakkar",
"Haomarush",
"Hellscream",
"Hydraxis",
"Hyjal",
"Icecrown",
"Illidan",
"Jaedenar",
"Jubei'Thos",
"Kael'thas",
"Kalecgos",
"Kargath",
"Kel'Thuzad",
"Khadgar",
"Khaz Modan",
"Khaz'goroth",
"Kil'jaeden",
"Kilrogg",
"Kirin Tor",
"Korgath",
"Korialstrasz",
"Kul Tiras",
"Laughing Skull",
"Lethon",
"Lightbringer",
"Lightning's Blade",
"Lightninghoof",
"Llane",
"Lothar",
"Madoran",
"Maelstrom",
"Magtheridon",
"Maiev",
"Mal'Ganis",
"Malfurion",
"Malorne",
"Malygos",
"Mannoroth",
"Medivh",
"Misha",
"Mok'Nathal",
"Moon Guard",
"Moonrunner",
"Mug'thol",
"Muradin",
"Nagrand",
"Nathrezim",
"Nazgrel",
"Nazjatar",
"Nemesis",
"Ner'zhul",
"Nesingwary",
"Nordrassil",
"Norgannon",
"Onyxia",
"Perenolde",
"Proudmoore",
"Quel'Thalas",
"Quel'dorei",
"Ragnaros",
"Ravencrest",
"Ravenholdt",
"Rexxar",
"Rivendare",
"Runetotem",
"Sargeras",
"Saurfang",
"Scarlet Crusade",
"Scilla",
"Sen'jin",
"Sentinels",
"Shadow Council",
"Shadowmoon",
"Shadowsong",
"Shandris",
"Shattered Halls",
"Shattered Hand",
"Shu'halo",
"Silver Hand",
"Silvermoon",
"Sisters of Elune",
"Skullcrusher",
"Skywall",
"Smolderthorn",
"Spinebreaker",
"Spirestone",
"Staghelm",
"Steamwheedle Cartel",
"Stonemaul",
"Stormrage",
"Stormreaver",
"Stormscale",
"Suramar",
"Tanaris",
"Terenas",
"Terokkar",
"Thaurissan",
"The Forgotten Coast",
"The Scryers",
"The Underbog",
"The Venture Co",
"Thorium Brotherhood",
"Thrall",
"Thunderhorn",
"Thunderlord",
"Tichondrius",
"Tol Barad",
"Tortheldrin",
"Trollbane",
"Turalyon",
"Twisting Nether",
"Uldaman",
"Uldum",
"Undermine",
"Ursin",
"Uther",
"Vashj",
"Vek'nilash",
"Velen",
"Warsong",
"Whisperwind",
"Wildhammer",
"Windrunner",
"Winterhoof"
]


exports.roles = roles;
exports.keystones = keystones;
exports.affixes = affixes;
exports.classes = classes;
exports.regions = regions;
exports.americas_and_oceanic_realms = americas_and_oceanic_realms;