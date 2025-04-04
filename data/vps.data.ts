export interface VPSOptions {
    id: number;
    name: string;
    price: number;
    vcpus: number;
    memory: number;
    disk: number;
    traffic: number;
    type: VPSTier;
    link: string;
}

export type VPSTier = 'standard' | 'performance';

export default <VPSOptions[]>[
    {
        id: 1,
        name: 'STD.6',
        price: 4.99,
        vcpus: 1,
        memory: 6,
        disk: 40,
        traffic: 5,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/d335c229-d744-470b-a18a-3ae4d252d761',
    },
    {
        id: 2,
        name: 'STD.8',
        price: 6.49,
        vcpus: 2,
        memory: 8,
        disk: 50,
        traffic: 10,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/e6f71571-9d92-4f49-a563-b5528cd03918',
    },
    {
        id: 3,
        name: 'STD.12',
        price: 7.99,
        vcpus: 4,
        memory: 12,
        disk: 100,
        traffic: 15,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/3a936659-a8c0-4782-b30f-fc001adbf2cc',
    },
    {
        id: 4,
        name: 'STD.16',
        price: 9.99,
        vcpus: 4,
        memory: 16,
        disk: 150,
        traffic: 20,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/48f5bbb9-6cff-4ffd-a734-5b60816ad5d0',
    },
    {
        id: 5,
        name: 'STD.24',
        price: 14.99,
        vcpus: 6,
        memory: 24,
        disk: 200,
        traffic: 25,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/b454ef0d-ec0a-47bb-a406-1c6debe3c9ae',
    },
    {
        id: 6,
        name: 'STD.36',
        price: 21.99,
        vcpus: 6,
        memory: 36,
        disk: 250,
        traffic: 30,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/e68d910c-6532-4143-b3ab-b653cb2bfac5',
    },
    {
        id: 7,
        name: 'STD.48',
        price: 25.99,
        vcpus: 8,
        memory: 48,
        disk: 300,
        traffic: 35,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/251b863b-e140-40ca-b1f2-df4b0d987780',
    },
    {
        id: 8,
        name: 'STD.64',
        price: 36.99,
        vcpus: 8,
        memory: 64,
        disk: 350,
        traffic: 40,
        type: 'standard',
        link: 'https://ctrl.cxmpute.com/order/config/2/deea9c33-94f3-4c8e-b9c9-412f26cb46b1',
    },
    {
        id: 9,
        name: 'HPF.2',
        price: 4.99,
        vcpus: 1,
        memory: 2,
        disk: 20,
        traffic: 5,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/52bfc6aa-bd31-47f4-b3d1-ba69dc1baf4d',
    },
    {
        id: 10,
        name: 'HPF.4',
        price: 6.49,
        vcpus: 1,
        memory: 4,
        disk: 25,
        traffic: 10,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/fefe8a5b-9315-421e-9275-34a402aeaf91',
    },
    {
        id: 11,
        name: 'HPF.6',
        price: 7.99,
        vcpus: 2,
        memory: 6,
        disk: 50,
        traffic: 15,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/8d908787-f133-4b89-95c6-0d1f3d33d92d',
    },
    {
        id: 12,
        name: 'HPF.8',
        price: 10.99,
        vcpus: 2,
        memory: 8,
        disk: 50,
        traffic: 20,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/86fd8298-6aeb-4957-abe6-1c9cd1b812c2',
    },
    {
        id: 13,
        name: 'HPF.12',
        price: 13.99,
        vcpus: 3,
        memory: 12,
        disk: 75,
        traffic: 25,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/18a93927-7fa2-4e2c-bbbe-74bf709db436',
    },
    {
        id: 14,
        name: 'HPF.16',
        price: 18.99,
        vcpus: 4,
        memory: 16,
        disk: 120,
        traffic: 30,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/220465d4-10f7-4748-976f-a03487a653bc',
    },
    {
        id: 15,
        name: 'HPF.24',
        price: 24.99,
        vcpus: 6,
        memory: 24,
        disk: 160,
        traffic: 35,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/3db30476-1cb7-41ae-a0be-bd707bf70e17',
    },
    {
        id: 16,
        name: 'HPF.32',
        price: 30.99,
        vcpus: 6,
        memory: 32,
        disk: 200,
        traffic: 40,
        type: 'performance',
        link: 'https://ctrl.cxmpute.com/order/config/2/7066dfc3-726e-4e61-be37-6875ae018043',
    },
];
