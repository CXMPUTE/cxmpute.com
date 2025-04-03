import { FaSolidArrowTurnDown, FaSolidArrowUpRightFromSquare, FaSolidBoltLightning, FaSolidEthernet, FaSolidHardDrive, FaSolidLayerGroup, FaSolidMemory, FaSolidMicrochip, FaSolidShield } from 'solid-icons/fa';
import ServerSvg from '../../assets/Server.svg';
import { Button } from '../../components/button';
import Configure from './configure';
import PricingBox, { Feature } from '../../components/PricingBox';
import FeatureBox from '../../components/FeatureBox';

const defaultFeatures: Feature[] = [
    { feature: ' 99.5% SLA Uptime', isResource: false },
    { feature: 'SmartMitigate™ Anti-DDoS', isResource: false },
    { feature: 'Custom Control Panel', isResource: false },
    { feature: 'Gigabit Parallel Network', isResource: false },
    { feature: 'Automated System Backups', isResource: false },
];

export default () => {
    let target;

    const scrollToDiv = () => {
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div class={'max-w-7xl relative'}>
            <h1 class="hidden xl:block absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[400px] z-0 font-bold opacity-[5%] select-none">
                VPS
            </h1>
            <div class={'z-10'}>
                <div class={'grid lg:grid-cols-2 gap-8 w-full place-items-center'}>
                    <div class={'text-left w-full'}>
                        <div class="py-8 px-4 mx-auto lg:py-16">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">KVM VPS Range</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">View our configuration options for the range of Virtual Private Servers that we offer. Once you&apos;re happy, move onto the basket to complete your purchase.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                <Button onClick={scrollToDiv}>Find Your VPS <FaSolidArrowTurnDown class={'ml-2'} /></Button>
                                <a href="https://ctrl.cxmpute.com" target={'_blank'} class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Dashboard <FaSolidArrowUpRightFromSquare class={'inline-flex w-3 h-3 ml-1'} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <img src={ServerSvg} class={'hidden lg:block max-w-xl max-h-xl'} />
                </div>
            </div>
            <div class={'grid lg:grid-cols-3 gap-6 mt-12 justify-center max-w-screen-xl'}>
                <FeatureBox icon={FaSolidBoltLightning} title={'Instant Deployment'}>
                    With CXMPUTE, you don&apos;t have to wait for manual approval until your server
                    is deployed to our systems. Within 30 seconds of placing your order, the service
                    is made available and added to your CTRL account for easy interaction.
                </FeatureBox>
                <FeatureBox icon={FaSolidShield} title={'Advanced DDoS Protection'}>
                    We include professional-grade DDoS protection with every plan, provided via SmartMitigate&trade;,
                    in order to keep your services running smoothly even under an attack. DDoS protection can also be
                    controlled via the CTRL Dashboard.
                </FeatureBox>
                <FeatureBox icon={FaSolidLayerGroup} title={'Reliable Performance'}>
                    Our base KVM VPS offers use Intel&copy; Xeon&trade;-type CPUs for general purpose, with DDR4 memory
                    and NVMe SATA SSDs by default for additional performance. All servers also come with a parallel
                    gigabit network connection to improve latency.
                </FeatureBox>
            </div>

            <div class={'mt-32'}>
                <p class={'text-5xl font-extrabold'}>Our Best Offers</p>
                <p class={'text-xl text-gray-500 mb-8 mt-1'}>Choose between our best value options, starting at €4.99/month.</p>
                <div class={'grid lg:grid-cols-3 gap-8 mt-8'}>
                    <PricingBox
                        title={'Standard'}
                        subtitle={'6GB RAM'}
                        price={4.99}
                        url={'https://ctrl.cxmpute.com/order/config/2/d335c229-d744-470b-a18a-3ae4d252d761'}
                        features={[
                            {
                                icon: FaSolidMicrochip,
                                feature: '1 vCore',
                                description: 'on standard CPU',
                                isResource: true,
                            },
                            {
                                icon: FaSolidMemory,
                                feature: '6GB',
                                description: 'DDR4 ECC Memory',
                                isResource: true,
                            },
                            {
                                icon: FaSolidHardDrive,
                                feature: '40GB',
                                description: 'NVMe SSD Storage',
                                isResource: true,
                            },
                            {
                                icon: FaSolidEthernet,
                                feature: '5TB',
                                description: 'DDoS-protected Traffic',
                                isResource: true,
                            },
                            ...defaultFeatures
                        ]} />
                    <PricingBox
                        title={'Standard'}
                        subtitle={'12GB RAM'}
                        price={7.99}
                        backgroundColor={'bg-blue-950/10'}
                        url={'https://ctrl.cxmpute.com/order/config/2/3a936659-a8c0-4782-b30f-fc001adbf2cc'}
                        features={[
                            {
                                icon: FaSolidMicrochip,
                                feature: '4 vCores',
                                description: 'on standard CPU',
                                isResource: true,
                            },
                            {
                                icon: FaSolidMemory,
                                feature: '12GB',
                                description: 'DDR4 ECC Memory',
                                isResource: true,
                            },
                            {
                                icon: FaSolidHardDrive,
                                feature: '100GB',
                                description: 'NVMe SSD Storage',
                                isResource: true,
                            },
                            {
                                icon: FaSolidEthernet,
                                feature: '15TB',
                                description: 'DDoS-protected Traffic',
                                isResource: true,
                            },
                            ...defaultFeatures
                        ]} />
                    <PricingBox
                        title={'Performance'}
                        isPerformance
                        isHighlighted
                        subtitle={'12GB RAM'}
                        price={13.99}
                        backgroundColor={'bg-blue-950/25'}
                        url={'https://ctrl.cxmpute.com/order/config/2/18a93927-7fa2-4e2c-bbbe-74bf709db436'}
                        features={[
                            {
                                icon: FaSolidMicrochip,
                                feature: '4 vCores',
                                description: 'on Performance CPU',
                                isResource: true,
                            },
                            {
                                icon: FaSolidMemory,
                                feature: '12GB',
                                description: 'DDR4 ECC Memory',
                                isResource: true,
                            },
                            {
                                icon: FaSolidHardDrive,
                                feature: '100GB',
                                description: 'NVMe SSD Storage',
                                isResource: true,
                            },
                            {
                                icon: FaSolidEthernet,
                                feature: '15TB',
                                description: 'DDoS-protected Traffic',
                                isResource: true,
                            },
                            ...defaultFeatures
                        ]} />
                </div>
            </div>

            {/* Target div for scrolling */}
            <div ref={el => target = el} class={'transition-all'}>
                <Configure />
            </div>
        </div>
    );
};
