export interface DedicatedLocation {
    logo: string;
    title: string;
    description: string;
}

export interface DedicatedOptions {
    id: number;
    location: DedicatedLocation;
    cpu: {
        model: string;
        specs: string;
    };
    memory: {
        size: string;
        specs: string;
    };
    storage: {
        size: string;
        specs: string;
    };
    network: {
        speed: string;
        specs: string;
    };
    price: number;
    available: string;
}

export default <DedicatedOptions[]>[
    {
        id: 1,
        location: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png',
            title: 'Amsterdam, Netherlands',
            description: 'Fantastic value with 6 cores.',
        },
        cpu: {
            model: 'Intel® Xeon D-1531',
            specs: '2.2 GHz 6c/12t',
        },
        memory: {
            size: '32GB DDR4',
            specs: 'ECC, 4x8GB',
        },
        storage: {
            size: '1TB (2x 500GB)',
            specs: 'SATA SSD Storage',
        },
        network: {
            speed: '1Gbps w/ Anti-DDoS',
            specs: '300mbps gauranteed',
        },
        price: 34.99,
        available: 'Ready within 3 days',
    },
    {
        id: 2,
        location: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
            title: 'London, United Kingdom',
            description: 'Features high-performance CPU.',
        },
        cpu: {
            model: 'Intel® Xeon E3-1270 v6',
            specs: '3.8 GHz 4c/8t',
        },
        memory: {
            size: '32GB DDR4',
            specs: 'ECC, 4x8GB',
        },
        storage: {
            size: '900GB (2x 450GB)',
            specs: 'NVMe SSD Storage',
        },
        network: {
            speed: '1Gbps w/ Anti-DDoS',
            specs: '300mbps gauranteed',
        },
        price: 39.99,
        available: 'Ready within 3 days',
    },
    {
        id: 3,
        location: {
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
            title: 'Dusseldorf, Germany',
            description: '64GB memory for high capacity.',
        },
        cpu: {
            model: 'Intel® Xeon D-1540',
            specs: '2 GHz 8c/16t',
        },
        memory: {
            size: '64GB DDR4',
            specs: 'ECC, 4x16GB',
        },
        storage: {
            size: '500GB (2x 240GB)',
            specs: 'SATA SSD Storage',
        },
        network: {
            speed: '1Gbps w/ Anti-DDoS',
            specs: '100mbps gauranteed',
        },
        price: 44.99,
        available: 'Ready within 3 days',
    },
    {
        id: 3,
        location: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png',
            title: 'Montreal, Canada',
            description: 'EPYC CPU for pure compute.',
        },
        cpu: {
            model: 'AMD® EPYC 7451',
            specs: '2.3 GHz 24c/48t',
        },
        memory: {
            size: '128GB DDR4',
            specs: 'ECC, 8x16GB',
        },
        storage: {
            size: '1TB (2x 500GB)',
            specs: 'NVMe SSD Storage',
        },
        network: {
            speed: '1Gbps w/ Anti-DDoS',
            specs: '300mbps gauranteed',
        },
        price: 99.99,
        available: 'Ready within 3 days',
    },
];
