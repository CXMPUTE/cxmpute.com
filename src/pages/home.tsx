import { createSignal, type KeyboardEvent } from "solid-js";
import Box from "../components/Box";
import { FaSolidArrowRight, FaSolidBookOpen, FaSolidCode, FaSolidEnvelope, FaSolidLock, FaSolidPencil, FaSolidTurnDown } from "solid-icons/fa";
import OnePng from '../assets/one.png';
import SpeedTestSvg from '../assets/SpeedTest.svg';
import { Button } from '../components/button';
import { A } from "@solidjs/router";

export default function Home() {
    const [valid, setValid] = createSignal(false);
    const [banner, setBanner] = createSignal(true);

    const validateEmail = (e: KeyboardEvent<HTMLInputElement>) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (e.key === 'Enter' && pattern.test(e.currentTarget.value)) {
            setValid(true);
        }
    };

    return (
        <>
            <section class="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-[0_40px_120px_-60px_rgba(14,165,233,0.45)] mt-10">
                <div class="absolute inset-0 opacity-30">
                    <div class="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div class="absolute right-0 top-20 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl" />
                </div>
                <div class="relative grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center">
                    <div class="space-y-8">
                        <div class="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">New</div>
                        <div class="space-y-5">
                            <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Future-ready cloud infrastructure, designed for modern teams.</h1>
                            <p class="max-w-xl text-lg leading-8 text-slate-300">CXMPUTE delivers elegant hosting, secure control, and transparent pricing for developers, gamers, and businesses who want performance without noise.</p>
                        </div>
                        <div class="grid gap-4 sm:grid-cols-3">
                            <div class="glass-panel p-4 text-slate-200">
                                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Latency</p>
                                <p class="mt-3 text-3xl font-semibold text-white">12ms</p>
                            </div>
                            <div class="glass-panel p-4 text-slate-200">
                                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Network</p>
                                <p class="mt-3 text-3xl font-semibold text-white">1Gbps</p>
                            </div>
                            <div class="glass-panel p-4 text-slate-200">
                                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Uptime</p>
                                <p class="mt-3 text-3xl font-semibold text-white">99.99%</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 sm:flex-row">
                            <A href="/vps" class="button-frost inline-flex items-center justify-center px-6 py-3">Explore VPS <FaSolidArrowRight class="ml-2" /></A>
                            <A href="/compare" class="button-frost secondary inline-flex items-center justify-center px-6 py-3">Compare plans</A>
                        </div>
                    </div>

                    <Box className="p-8">
                        <div class="space-y-6 text-slate-200">
                            <div class="flex items-center justify-between rounded-3xl border border-slate-700/80 bg-slate-950/80 p-4">
                                <div>
                                    <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Start with your email</p>
                                    <p class="mt-2 text-sm text-slate-300">Secure onboarding in a few seconds.</p>
                                </div>
                                <FaSolidEnvelope class="h-5 w-5 text-cyan-400" />
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <label class="text-xs uppercase tracking-[0.28em] text-slate-500">work email</label>
                                    <div class="relative mt-3">
                                        <FaSolidEnvelope class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                                        <input
                                            type="email"
                                            onKeyDown={validateEmail}
                                            disabled={valid()}
                                            placeholder="user@cxmpute.com"
                                            class="w-full rounded-3xl border border-slate-700/80 bg-slate-950/90 py-4 pl-12 pr-4 text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70"
                                        />
                                        {valid() && (
                                            <button
                                                onClick={() => setValid(false)}
                                                class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/90 p-2 text-slate-300 transition hover:bg-slate-700"
                                                aria-label="Edit email"
                                            >
                                                <FaSolidPencil class="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div class={`overflow-hidden transition-all duration-300 ${valid() ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {valid() && (
                                        <div class="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-5 text-slate-300">
                                            <p class="text-sm text-cyan-300">Welcome to CXMPUTE!</p>
                                            <div class="mt-4 grid gap-3 sm:grid-cols-2">
                                                <A href="/vps" class="button-frost text-center">VPS Servers</A>
                                                <A href="/minecraft" class="button-frost text-center">Game Servers</A>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>

            <section class="mt-16 grid gap-8 lg:grid-cols-3">
                <div class="glass-card p-8">
                    <span class="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-emerald-300">2025 sale</span>
                    <div class="mt-8 flex items-center gap-4">
                        <img width="56" height="56" src="https://img.icons8.com/fluency/96/ps-controller.png" alt="ps-controller" />
                        <div>
                            <p class="text-2xl font-semibold text-white">Gameservers</p>
                            <p class="text-sm text-slate-400">Perfect for Minecraft™ and competitive communities with low latency and fast storage.</p>
                        </div>
                    </div>
                    <div class="mt-8 text-sm leading-7 text-slate-300">Whether you&apos;re launching a private server or tournament cluster, our infrastructure keeps every match smooth and responsive.</div>
                    <div class="mt-8 text-right">
                        <A href="/minecraft" class="button-frost inline-flex items-center justify-center px-5 py-3">From €1.99<FaSolidArrowRight class="ml-2" /></A>
                    </div>
                </div>
                <div class="glass-card p-8 border-sky-400/30">
                    <span class="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">2025 sale</span>
                    <div class="mt-8 flex items-center gap-4">
                        <img width="56" height="56" src="https://img.icons8.com/fluency/96/database--v1.png" alt="database" />
                        <div>
                            <p class="text-2xl font-semibold text-white">VPS / Dedicated</p>
                            <p class="text-sm text-slate-400">Flexible compute for apps, workflows, and enterprise services with premium network throughput.</p>
                        </div>
                    </div>
                    <div class="mt-8 text-sm leading-7 text-slate-300">From power-efficient Ryzen cores to burst-ready dedicated nodes, choose the build that matches your growth.</div>
                    <div class="mt-8 text-right">
                        <A href="/vps" class="button-frost inline-flex items-center justify-center px-5 py-3">From €4.99<FaSolidArrowRight class="ml-2" /></A>
                    </div>
                </div>
                <div class="glass-card p-8">
                    <span class="inline-flex rounded-full bg-sky-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-sky-300">Coming soon</span>
                    <div class="mt-8 flex items-center gap-4">
                        <img width="56" height="56" src="https://img.icons8.com/fluency/96/internet.png" alt="internet" />
                        <div>
                            <p class="text-2xl font-semibold text-white">Web Hosting</p>
                            <p class="text-sm text-slate-400">Make your site shine with our upcoming web hosting platform and modern deployment flow.</p>
                        </div>
                    </div>
                    <div class="mt-8 text-sm leading-7 text-slate-300">A polished dashboard, smart backups, and effortless domain control are coming soon at an introductory price.</div>
                    <div class="mt-8 text-right">
                        <button disabled class="button-frost secondary">Launching 2025</button>
                    </div>
                </div>
            </section>

            <section class="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div class="space-y-8">
                    <span class="inline-flex rounded-full bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-300">Platform highlight</span>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">An all-new experience from order to control panel.</h2>
                    <p class="max-w-2xl text-lg leading-8 text-slate-300">CXMPUTE is built around CTRL, our proprietary management interface. Every server, network, and billing option is designed to feel crisp, fast, and easy for both new users and seasoned operators.</p>
                </div>
                <div class="glass-card overflow-hidden">
                    <img src={OnePng} alt="platform preview" class="h-full w-full object-cover" />
                </div>
            </section>

            <section class="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
                <div class="glass-card p-10">
                    <span class="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Performance</span>
                    <h3 class="mt-5 text-3xl font-extrabold text-white">Stellar performance under real load.</h3>
                    <p class="mt-4 text-slate-300 leading-8">Our cloud stack uses the latest Intel™ and Ryzen™ hardware, NVMe SSD storage, advanced DDoS protection, and 1Gbps parallel networks. Every server tier includes live boost capacity for sudden traffic spikes.</p>
                </div>
                <div class="glass-card p-10 text-center">
                    <img src={SpeedTestSvg} width={256} height={256} alt="performance diagram" class="mx-auto" />
                </div>
            </section>

            <section class="mt-20 rounded-[2rem] bg-slate-900/80 p-8 shadow-[0_40px_120px_-60px_rgba(14,165,233,0.35)]">
                <div class="grid gap-8 md:grid-cols-2">
                    <div class="glass-panel p-8">
                        <div class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-emerald-300">
                            <FaSolidCode /> Developers
                        </div>
                        <h3 class="mt-5 text-3xl font-extrabold text-white">Extensible by design</h3>
                        <p class="mt-4 text-slate-300 leading-8">Our stack, from this website to the CTRL API, is open for customization and integrations so your workflow can scale without friction.</p>
                    </div>
                    <div class="glass-panel p-8">
                        <div class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-violet-300">
                            <FaSolidLock /> Security
                        </div>
                        <h3 class="mt-5 text-3xl font-extrabold text-white">Secure to the CXRE</h3>
                        <p class="mt-4 text-slate-300 leading-8">Our CXRE framework combines physical, network, and application-layer safeguards to protect your data while keeping performance responsive.</p>
                    </div>
                </div>
            </section>

            {banner() && (
                <div id="bottom-banner" tabindex="-1" class="fixed bottom-0 inset-x-0 z-50 flex flex-col gap-4 border-t border-slate-800 bg-slate-950/95 p-4 text-slate-300 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
                    <div class="flex items-center gap-3 text-sm text-slate-300">
                        <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/80 text-slate-200">
                            <FaSolidCode class="h-4 w-4" />
                        </span>
                        <span>Standard and Performance VPS lines are discounted until 19 June.</span>
                    </div>
                    <button onClick={() => setBanner(false)} class="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700">Dismiss</button>
                </div>
            )}
        </>
    );
}
