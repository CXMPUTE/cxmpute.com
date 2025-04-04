export interface MinecraftOptions {
    id: number;
    name: string;
    icon: string;
    memory: number;
    backups: number;
    price: number;
    isDiscounted?: number;
    link: string;
    featured?: boolean;
}

export default <MinecraftOptions[]>[
    {
        id: 1,
        name: 'Coal Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0b/Deepslate_Coal_Ore_JE1_BE2.png',
        memory: 3,
        backups: 1,
        price: 1.99,
        isDiscounted: 2.99,
        link: 'https://game.cxmpute.com/auth/register',
    },
    {
        id: 2,
        name: 'Copper Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f4/Deepslate_Copper_Ore_JE1_BE1.png',
        memory: 6,
        backups: 2,
        price: 3.99,
        isDiscounted: 5.99,
        link: 'https://game.cxmpute.com/auth/register',
        featured: true,
    },
    {
        id: 3,
        name: 'Iron Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/48/Deepslate_Iron_Ore_JE2_BE1.png',
        memory: 9,
        backups: 3,
        price: 5.99,
        isDiscounted: 8.99,
        link: 'https://game.cxmpute.com/auth/register',
    },
    {
        id: 4,
        name: 'Gold Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1d/Deepslate_Gold_Ore_JE2_BE1.png',
        memory: 12,
        backups: 4,
        price: 7.99,
        isDiscounted: 11.99,
        link: 'https://game.cxmpute.com/auth/register',
    },
    {
        id: 5,
        name: 'Emerald Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9c/Deepslate_Emerald_Ore_JE1_BE1.png',
        memory: 15,
        backups: 5,
        price: 9.99,
        isDiscounted: 14.99,
        link: 'https://game.cxmpute.com/auth/register',
    },
    {
        id: 6,
        name: 'Diamond Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/73/Deepslate_Diamond_Ore_JE2_BE1.png',
        memory: 18,
        backups: 5,
        price: 11.99,
        isDiscounted: 17.99,
        link: 'https://game.cxmpute.com/auth/register',
        featured: true,
    },
    {
        id: 7,
        name: 'Netherite Plan',
        icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4c/Ancient_Debris_JE1_BE1.png',
        memory: 21,
        backups: 6,
        price: 13.99,
        isDiscounted: 20.99,
        link: 'https://game.cxmpute.com/auth/register',
        featured: true,
    },
];
