import { FaSolidArrowRight, FaSolidArrowTurnDown, FaSolidArrowUpRightFromSquare, FaSolidBuildingUser, FaSolidComputerMouse, FaSolidDesktop, FaSolidRecycle, FaSolidTriangleExclamation, FaSolidUserPlus } from "solid-icons/fa";
import { Button } from "../../components/button";
import { Feature } from "../../components/PricingBox";
import FeatureBox from "../../components/FeatureBox";
import { createSignal } from "solid-js";
import classNames from "classnames";
import PreBuilt from "./pre-built";
import Alert from "../../components/Alert";
import Configure from "./configure";

export const defaultFeatures: Feature[] = [
    { feature: ' 99.5% SLA Uptime', isResource: false },
    { feature: 'Custom Control Panel', isResource: false },
    { feature: 'Unlimited Player Slots', isResource: false },
    { feature: 'No CPU limits*', isResource: false },
    { feature: 'No SSD limits**', isResource: false },
];

export default () => {
    const [showConfigurator, setShowConfigurator] = createSignal<boolean>(false);

    let target;

    const scrollToDiv = () => {
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div class={'max-w-7xl'}>
            <Alert type={'info'}>Save up to <span class={'mx-1 font-bold'}>40%</span> in our 2025 Spring Sale, while stocks last. <span class={'text-gray-400 ml-2'}>Ends 19 June.</span></Alert>
            <div class={'grid lg:grid-cols-2 gap-8 w-full place-items-center'}>
                <div class={'text-left w-full z-20'}>
                    <div class="py-8 px-4 mx-auto lg:py-16">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Minecraft Servers</h1>
                        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">View our configuration options for the range of Minecraft&trade; Servers that we offer. Once you&apos;re happy, move onto the basket to complete your purchase.</p>
                        <div>
                            <Button onClick={scrollToDiv}>View Plans<FaSolidArrowTurnDown class={'ml-2'} /></Button>
                            <a href="https://game.cxmpute.com" target={'_blank'} class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Dashboard <FaSolidArrowUpRightFromSquare class={'inline-flex w-3 h-3 ml-1'} />
                            </a>
                        </div>
                    </div>
                </div>
                <div class={'hidden lg:grid grid-cols-3 gap-8 z-20'}>
                    <img src={'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/73/Deepslate_Diamond_Ore_JE2_BE1.png'} class={'w-48 h-48'} />
                    <img src={'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/48/Deepslate_Iron_Ore_JE2_BE1.png'} class={'w-48 h-48'} />
                    <img src={'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1d/Deepslate_Gold_Ore_JE2_BE1.png'} class={'w-48 h-48'} />
                </div>
            </div>
            <div class={'grid lg:grid-cols-3 gap-6 mt-12 justify-center max-w-screen-xl'}>
                <FeatureBox icon={FaSolidDesktop} title={'Custom Management Panel'}>
                    All game server plans use our custom control panel, designed specifically for CXMPUTE
                    with features such as a plugin/mod installer, one-click setup and more.
                </FeatureBox>
                <FeatureBox icon={FaSolidRecycle} title={'Support for all versions'}>
                    Our interface supports all versions, whether you want to play 1.7.10 or the very latest Minecraft&trade; version.
                    At any time, you can reinstall your server to a different version with just 3 clicks.
                </FeatureBox>
                <FeatureBox icon={FaSolidComputerMouse} title={'One-click Setup'}>
                    As soon as your payment is processed, you are redirected to your new Minecraft&trade; server which is ready to go.
                    No configuration needed (unless you want to tinker with plugins and configurations!)
                </FeatureBox>
                <FeatureBox icon={FaSolidUserPlus} title={'No player limits'}>
                    Unlike most other networks, we allow as many people to join as possible - regardless of what plan you choose with us.
                </FeatureBox>
                <FeatureBox icon={FaSolidTriangleExclamation} title={'Automatic crash detection'}>
                    Crashes happen. That&apos;s why with CXMPUTE, our systems automatically detect any errors and attempt to reboot automatically.
                </FeatureBox>
                <FeatureBox icon={FaSolidBuildingUser} title={'Subuser Access'}>
                    With our control panel, you can add subusers with a set list of permissions who can interact with the server on your behalf.
                </FeatureBox>
            </div>
            <div class={'my-16 h-px bg-blue-950 rounded-full'}></div>
            <div ref={el => target = el}>
                <div class={'w-full flex justify-center items-center'}>
                    <button
                        class={
                            classNames(
                                'py-3 px-6 text-lg capitalize font-semibold duration-500 rounded-l-xl',
                                !showConfigurator() ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => setShowConfigurator(false)}
                    >
                        Use Pre-Built Plan
                    </button>
                    <button
                        class={
                            classNames(
                                'py-3 px-6 text-lg capitalize font-semibold duration-500 rounded-r-xl',
                                showConfigurator() ? 'text-blue-200 bg-blue-900' : 'bg-zinc-900 text-gray-400',
                            )
                        }
                        onClick={() => setShowConfigurator(true)}
                    >
                        Use Configurator
                    </button>
                </div>
                {showConfigurator() ? <Configure /> : <PreBuilt />}
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 my-8">
                <div class={'grid lg:grid-cols-5'}>
                    <div class={'col-span-4'}>
                        <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">More than 20+ concurrent players?</h1>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Get in touch with our specialist team who can make a custom plan to suit your needs.</p>
                        <a href={'https://ctrl.cxmpute.com/createticket'}>
                            <Button>Contact Us <FaSolidArrowRight class={'ml-2'} /></Button>
                        </a>
                    </div>
                    <img src={'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9a/Bastion_Remnant_4.png'} class={'hidden lg:block'} />
                </div>
            </div>
            <p class={'text-gray-400 italic'}>
                * While the CPU assigned to your server has no limit, it is restricted by the performance capacity of the host server.
            </p>
            <p class={'text-gray-400 italic'}>
                ** We do offer unmetered SSD storage, however all servers come with a soft limit of 20GB by default. You must ask our support team to increase this once the server has been deployed if you require more. All files must be related to Minecraft&trade; server hosting, and anyone who abuses this feature we offer may have their services cancelled.
            </p>
        </div>
    )
}
