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
    let target: HTMLElement | undefined;

    const scrollToDiv = () => {
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section class="py-16 px-4">
            <div class="glass-card mx-auto max-w-7xl p-10">
                <div class="grid gap-10 lg:grid-cols-2 items-center">
                    <div class="space-y-8">
                        <div class="inline-flex items-center gap-3 rounded-full border border-slate-800/80 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">VPS Hosting</div>
                        <div>
                            <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Fast, reliable KVM VPS designed for modern workloads.</h1>
                            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Spin up high-performance virtual machines with instant deployment, advanced DDoS protection, and a premium control panel built for developers and teams.</p>
                        </div>
                        <div class="flex flex-wrap gap-4">
                            <Button onClick={scrollToDiv}>Find Your VPS <FaSolidArrowTurnDown class="ml-2" /></Button>
                            <a href="https://ctrl.cxmpute.com" target="_blank" class="button-frost secondary inline-flex items-center justify-center px-6 py-3">Dashboard <FaSolidArrowUpRightFromSquare class="ml-2" /></a>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-8">
                        <img src={ServerSvg} alt="Server illustration" class="mx-auto max-w-full" />
                    </div>
                </div>
            </div>

            <div class="mt-14 grid gap-6 lg:grid-cols-3">
                <FeatureBox icon={FaSolidBoltLightning} title="Instant Deployment">Your VPS is ready within seconds of ordering, with automated provisioning and fast control panel access.</FeatureBox>
                <FeatureBox icon={FaSolidShield} title="Advanced DDoS Protection">Every plan includes SmartMitigate™ protection, so your services stay online during traffic spikes and attacks.</FeatureBox>
                <FeatureBox icon={FaSolidLayerGroup} title="Scalable Performance">Balanced CPU, memory, and storage for consistent performance under load, ideal for apps, websites, and containers.</FeatureBox>
            </div>

            <div class="mt-14 space-y-10">
                <div class="glass-card p-10">
                    <div class="mb-10">
                        <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Pricing</p>
                        <h2 class="mt-4 text-4xl font-extrabold text-white">Our Best Offers</h2>
                        <p class="mt-3 text-slate-300">Choose between our best value options, starting at €4.99/month.</p>
                    </div>
                    <div class="grid gap-8 lg:grid-cols-3">
                        <PricingBox
                            title="Standard"
                            subtitle="6GB RAM"
                            price={4.99}
                            url={'https://ctrl.cxmpute.com/order/config/2/d335c229-d744-470b-a18a-3ae4d252d761'}
                            features={[
                                { icon: FaSolidMicrochip, feature: '1 vCore', description: 'Standard CPU', isResource: true },
                                { icon: FaSolidMemory, feature: '6GB', description: 'DDR4 ECC Memory', isResource: true },
                                { icon: FaSolidHardDrive, feature: '40GB', description: 'NVMe SSD Storage', isResource: true },
                                { icon: FaSolidEthernet, feature: '5TB', description: 'DDoS-protected Traffic', isResource: true },
                                ...defaultFeatures
                            ]}
                        />
                        <PricingBox
                            title="Standard Plus"
                            subtitle="12GB RAM"
                            price={7.99}
                            isHighlighted
                            url={'https://ctrl.cxmpute.com/order/config/2/3a936659-a8c0-4782-b30f-fc001adbf2cc'}
                            features={[
                                { icon: FaSolidMicrochip, feature: '4 vCores', description: 'Standard CPU', isResource: true },
                                { icon: FaSolidMemory, feature: '12GB', description: 'DDR4 ECC Memory', isResource: true },
                                { icon: FaSolidHardDrive, feature: '100GB', description: 'NVMe SSD Storage', isResource: true },
                                { icon: FaSolidEthernet, feature: '15TB', description: 'DDoS-protected Traffic', isResource: true },
                                ...defaultFeatures
                            ]}
                        />
                        <PricingBox
                            title="Performance"
                            subtitle="12GB RAM"
                            price={13.99}
                            isPerformance
                            backgroundColor="bg-slate-900/70"
                            url={'https://ctrl.cxmpute.com/order/config/2/18a93927-7fa2-4e2c-bbbe-74bf709db436'}
                            features={[
                                { icon: FaSolidMicrochip, feature: '4 vCores', description: 'Performance CPU', isResource: true },
                                { icon: FaSolidMemory, feature: '12GB', description: 'DDR4 ECC Memory', isResource: true },
                                { icon: FaSolidHardDrive, feature: '100GB', description: 'NVMe SSD Storage', isResource: true },
                                { icon: FaSolidEthernet, feature: '15TB', description: 'DDoS-protected Traffic', isResource: true },
                                ...defaultFeatures
                            ]}
                        />
                    </div>
                </div>

                <div ref={el => target = el} class="glass-panel p-10">
                    <Configure />
                </div>
            </div>
        </section>
    );
};
