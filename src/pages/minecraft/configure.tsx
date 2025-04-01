import classNames from "classnames";
import { FaSolidBoxArchive, FaSolidCircleQuestion, FaSolidCircleXmark, FaSolidEthernet, FaSolidMemory, FaSolidPuzzlePiece, FaSolidUser, FaSolidUserGroup, FaSolidUserPlus, FaSolidUsers } from "solid-icons/fa";
import { createSignal } from "solid-js";
import getPlans, { MinecraftOptions } from '../../../data/minecraft.data';
import PricingBox from "../../components/PricingBox";
import { defaultFeatures } from ".";

type ServerType = 'paper' | 'other' | 'forge' | null;

interface Options {
    players?: number;
    plugins?: number;
    serverType?: ServerType;
}

export default () => {
    const [selected, setSelected] = createSignal<Options>();
    const [plans, setPlans] = createSignal<MinecraftOptions[]>([]);

    const updateSelected = (key: string, value: any) => {
        setSelected(prev => ({ ...prev, [key]: value }));
        findPlans();
    };

    const findPlans = () => {
        console.log('Finding plans');
        setPlans([]);

        if (!selected().players || !selected().plugins) {
            console.log('Players and plugins not selected');
            return;
        }

        const playerMultiplier = selected().players * 1.05;
        const pluginsMultiplier = selected().plugins * 1.1;

        let total = pluginsMultiplier + playerMultiplier;
        if (total < 4) total = 4;
        if (total > 21) total = 21;

        total = Math.ceil(total);

        const availablePlans = getPlans.filter(x => x.memory >= total);

        for (let i = 0; i < 3; i++) {
            if (availablePlans[i]) {
                setPlans(prevPlans => [...prevPlans, availablePlans[i]]);
            };
        }

        plans().forEach((p) => console.log(p));
    };

    return (
        <div class={'w-full bg-black/25 rounded-lg border border-gray-800 shadow-xl mt-6 p-6 lg:p-16'}>
            <div>
                <h1 class={'text-3xl font-bold'}><span class={'text-blue-500'}>1.</span> What distribution of Minecraft&trade; are you using?</h1>
                <div class={'grid grid-cols-4 mt-4'}>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500 rounded-l-xl',
                                selected()?.serverType === 'paper' ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('serverType', 'paper')}
                    >
                        <img src={'https://docs.papermc.io/assets/images/papermc-logomark-512-f125384f3367cd4d9291ca983fcb7334.png'} class={'mx-auto w-12 h-12 mb-2'} />
                        Paper
                    </button>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500',
                                selected()?.serverType === 'forge' ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('serverType', 'forge')}
                    >
                        <img src={'https://www.cloudron.io/store/icons/net.minecraftforge.cloudronapp.png'} class={'mx-auto w-12 h-12 mb-2 rounded-lg'} />
                        Forge
                    </button>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500 rounded-r-xl',
                                selected()?.serverType === 'other' ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('serverType', 'other')}
                    >
                        <FaSolidCircleQuestion class={'mx-auto w-8 h-8 mb-2'} />
                        Other
                    </button>
                </div>
            </div>
            <div class={'my-12'}>
                <h1 class={'text-3xl font-bold'}><span class={'text-blue-500'}>2.</span> How many plugins/mods will you be using?</h1>
                <div class={'grid grid-cols-4 mt-4'}>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500 rounded-l-xl',
                                selected()?.plugins === 1 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('plugins', 1)}
                    >
                        <FaSolidCircleXmark class={'w-full mx-auto mr-2 w-8 h-8 mb-2'} />
                        No plugins
                    </button>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500',
                                selected()?.plugins === 5 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('plugins', 5)}
                    >
                        <div class={'w-full mx-auto mb-2'}>
                            <FaSolidPuzzlePiece class={'w-full mx-auto w-8 h-8'} />
                        </div>
                        1-5 plugins
                    </button>
                    <button
                        class={
                            classNames(
                                'relative py-8 text-lg capitalize font-semibold duration-500',
                                selected()?.plugins === 10 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('plugins', 10)}
                    >
                        <FaSolidPuzzlePiece class={'w-full mx-auto mr-2 w-8 h-8 mb-2 z-10'} />
                        <FaSolidPuzzlePiece class={'absolute top-[25px] right-[120px] w-8 h-8 opacity-50'} />

                        5-10 plugins
                    </button>
                    <button
                        class={
                            classNames(
                                'relative py-8 text-lg capitalize font-semibold duration-500 rounded-r-xl',
                                selected()?.plugins === 15 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('plugins', 15)}
                    >
                        <FaSolidPuzzlePiece class={'w-full mx-auto mr-2 w-8 h-8 mb-2 z-10'} />
                        <FaSolidPuzzlePiece class={'absolute top-[25px] right-[120px] w-8 h-8 opacity-50'} />
                        <FaSolidPuzzlePiece class={'absolute top-[20px] right-[115px] w-8 h-8 opacity-25'} />
                        15+ plugins
                    </button>
                </div>
            </div>
            <div>
                <h1 class={'text-3xl font-bold'}><span class={'text-blue-500'}>3.</span> How many players will be online at once?</h1>
                <div class={'grid grid-cols-4 mt-4'}>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500 rounded-l-xl',
                                selected()?.players === 1 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('players', 1)}
                    >
                        <FaSolidUser class={'w-full mx-auto mr-2 w-8 h-8 mb-2'} />
                        1-5 players
                    </button>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500',
                                selected()?.players === 5 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('players', 5)}
                    >
                        <FaSolidUserGroup class={'w-full mx-auto mr-2 w-8 h-8 mb-2'} />
                        5-10 players
                    </button>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500',
                                selected()?.players === 10 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('players', 10)}
                    >
                        <FaSolidUsers class={'w-full mx-auto inline-flex mr-2 w-8 h-8 mb-2'} />
                        10-15 players
                    </button>
                    <button
                        class={
                            classNames(
                                'py-8 text-lg capitalize font-semibold duration-500 rounded-r-xl',
                                selected()?.players === 20 ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => updateSelected('players', 20)}
                    >
                        <FaSolidUserPlus class={'w-full mx-auto mr-2 w-8 h-8 mb-2'} />
                        20+ players
                    </button>
                </div>
            </div>
            <div class={'h-px bg-blue-900 rounded-full my-12'} />
            {plans().length > 0 && (
                <>
                    <p class={'text-3xl font-bold'}>Recommended Plans:</p>
                    <div class={'grid lg:grid-cols-3 gap-6 mt-4'}>
                        {plans().map((plan) => (
                            <PricingBox
                                url={plan.link}
                                price={plan.price}
                                isDiscounted={plan.isDiscounted}
                                title={plan.name}
                                subtitle={`${plan.memory}GB RAM`}
                                icon={plan.icon}
                                isHighlighted={plan.featured}
                                features={[
                                    {
                                        icon: FaSolidMemory,
                                        feature: `${plan.memory}GB`,
                                        description: 'DDR4 ECC Memory',
                                        isResource: true,
                                    },
                                    {
                                        icon: FaSolidEthernet,
                                        feature: 'Unmetered',
                                        description: 'Bandwidth',
                                        isResource: true,
                                    },
                                    {
                                        icon: FaSolidBoxArchive,
                                        feature: plan.backups.toString(),
                                        description: 'Automatic Backup Slots',
                                        isResource: true,
                                    },
                                    ...defaultFeatures
                                ]}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}