import classNames from "classnames";
import { createMemo, createSignal } from "solid-js";
import { FaSolidCheck, FaSolidCircleQuestion, FaSolidCloud, FaSolidGamepad, FaSolidMemory, FaSolidMicrochip, FaSolidNetworkWired, FaSolidPuzzlePiece, FaSolidShield, FaSolidUserGroup } from "solid-icons/fa";
import getPlans from "../../../data/minecraft.data";
import PricingBox from "../../components/PricingBox";
import { Button } from "../../components/button";

const serverTypes = [
  { value: "paper", title: "Paper", description: "Best all-around performance for plugins and vanilla compatibility." },
  { value: "forge", title: "Forge", description: "For modded worlds and custom server mods." },
  { value: "other", title: "Other", description: "Support for Bedrock, Spigot, and custom builds." },
];

const pluginLevels = [
  { value: 0, title: "No plugins", description: "Lightweight, fastest possible performance." },
  { value: 5, title: "1–5 plugins", description: "Small to medium modpacks with ease." },
  { value: 10, title: "6–10 plugins", description: "More resource needs and extra complexity." },
  { value: 15, title: "10+ plugins", description: "For large modded servers and heavy plugins." },
];

const playerRanges = [
  { value: 5, title: "1–5 players", description: "Perfect for friends and small communities." },
  { value: 10, title: "6–10 players", description: "For active public servers." },
  { value: 15, title: "11–15 players", description: "Room for growing groups and events." },
  { value: 20, title: "16+ players", description: "High concurrency and serious gameplay." },
];

const defaultFeatures = [
  { feature: "99.5% SLA Uptime", isResource: false },
  { feature: "Custom Management Panel", isResource: false },
  { feature: "Unlimited Player Slots", isResource: false },
  { feature: "Automatic Crash Recovery", isResource: false },
];

const estimateMemory = (players: number, plugins: number, type: string) => {
  let value = players * 0.9 + plugins * 1.1;
  if (type === "forge") value += 1.5;
  if (players > 15) value += 1;
  return Math.max(4, Math.min(21, Math.ceil(value)));
};

export default () => {
  const [selected, setSelected] = createSignal({
    serverType: "paper",
    plugins: 5,
    players: 10,
    extraProtection: true,
  });

  const recommendedPlans = createMemo(() => {
    const memory = estimateMemory(selected().players, selected().plugins, selected().serverType);
    return getPlans.filter((plan) => plan.memory >= memory).slice(0, 3);
  });

  const selectedPlan = createMemo(() => recommendedPlans()[0]);

  const setupStrength = createMemo(() => {
    const players = selected().players;
    if (players <= 5) return "Light adventure";
    if (players <= 10) return "Stable community";
    if (players <= 15) return "Large server";
    return "High-demand world";
  });

  const update = (key: string, value: any) => setSelected((prev) => ({ ...prev, [key]: value }));

  return (
    <section class="space-y-10">
      <div class="space-y-4">
        <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Minecraft Configurator</p>
        <h2 class="text-4xl font-extrabold text-white">Build your ideal Minecraft server</h2>
        <p class="max-w-3xl text-slate-300 text-lg leading-8">Choose your server type, plugin load, and expected player count to get a recommendation that is fast, stable, and ready for your world.</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
        <div class="space-y-8">
          <div class="glass-card p-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Step 1</p>
                <h3 class="mt-2 text-2xl font-semibold text-white">Server environment</h3>
              </div>
              <span class="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300">{setupStrength()}</span>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              {serverTypes.map((type) => (
                <button
                  class={classNames(
                    "rounded-[2rem] border p-6 text-left transition duration-300",
                    selected().serverType === type.value
                      ? "border-cyan-400 bg-slate-900 text-white shadow-lg shadow-cyan-500/10"
                      : "border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:bg-slate-900/80"
                  )}
                  onClick={() => update("serverType", type.value)}
                >
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <h4 class="text-lg font-semibold">{type.title}</h4>
                      <p class="mt-2 text-sm text-slate-400">{type.description}</p>
                    </div>
                    {selected().serverType === type.value && <FaSolidCheck class="h-5 w-5 text-cyan-400" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div class="glass-card p-8">
            <div class="flex items-center gap-3">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">2</span>
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Step 2</p>
                <h3 class="mt-2 text-2xl font-semibold text-white">Plugin and mod load</h3>
              </div>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              {pluginLevels.map((option) => (
                <button
                  class={classNames(
                    "rounded-[2rem] border p-6 text-left transition duration-300",
                    selected().plugins === option.value
                      ? "border-cyan-400 bg-slate-900 text-white shadow-lg shadow-cyan-500/10"
                      : "border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:bg-slate-900/80"
                  )}
                  onClick={() => update("plugins", option.value)}
                >
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <h4 class="text-lg font-semibold">{option.title}</h4>
                      <p class="mt-2 text-sm text-slate-400">{option.description}</p>
                    </div>
                    {selected().plugins === option.value && <FaSolidCheck class="h-5 w-5 text-cyan-400" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div class="glass-card p-8">
            <div class="flex items-center gap-3">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">3</span>
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Step 3</p>
                <h3 class="mt-2 text-2xl font-semibold text-white">Player capacity</h3>
              </div>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              {playerRanges.map((option) => (
                <button
                  class={classNames(
                    "rounded-[2rem] border p-6 text-left transition duration-300",
                    selected().players === option.value
                      ? "border-cyan-400 bg-slate-900 text-white shadow-lg shadow-cyan-500/10"
                      : "border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:bg-slate-900/80"
                  )}
                  onClick={() => update("players", option.value)}
                >
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <h4 class="text-lg font-semibold">{option.title}</h4>
                      <p class="mt-2 text-sm text-slate-400">{option.description}</p>
                    </div>
                    {selected().players === option.value && <FaSolidCheck class="h-5 w-5 text-cyan-400" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside class="glass-card sticky top-10 space-y-6 p-8">
          <div class="space-y-4">
            <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Recommended</p>
            <h3 class="text-3xl font-extrabold text-white">Smart plan selection</h3>
            <p class="text-slate-400">This recommendation is tailored to your plugin load and player expectations.</p>
          </div>

          <div class="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-6">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm text-slate-400">Suggested memory</p>
                <p class="mt-2 text-2xl font-bold text-white">{estimateMemory(selected().players, selected().plugins, selected().serverType)}GB RAM</p>
              </div>
              <div class="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">{setupStrength()}</div>
            </div>
          </div>

          <div class="grid gap-3">
            <div class="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p class="text-sm text-slate-400">Server type</p>
              <p class="mt-2 text-white">{serverTypes.find((type) => type.value === selected().serverType)?.title}</p>
            </div>
            <div class="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p class="text-sm text-slate-400">Plugin load</p>
              <p class="mt-2 text-white">{pluginLevels.find((option) => option.value === selected().plugins)?.title}</p>
            </div>
            <div class="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4">
              <p class="text-sm text-slate-400">Players</p>
              <p class="mt-2 text-white">{playerRanges.find((option) => option.value === selected().players)?.title}</p>
            </div>
          </div>

          <Button class="w-full">Order recommended plan</Button>

          <div class="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-6 text-slate-300">
            <div class="flex items-center gap-3 text-cyan-300">
              <FaSolidShield class="h-5 w-5" />
              <p class="font-semibold text-white">Stable hosting guarantee</p>
            </div>
            <p class="mt-3 text-sm">Every Minecraft server includes DDoS protection, 24/7 monitoring, and our custom control panel.</p>
          </div>
        </aside>
      </div>

      <div class="glass-panel p-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Your recommendation</p>
            <h3 class="mt-2 text-2xl font-semibold text-white">Plans matched to your server</h3>
          </div>
          <div class="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300">Based on {selected().players} players and {selected().plugins} plugins</div>
        </div>

        {recommendedPlans().length > 0 ? (
          <div class="mt-8 grid gap-6 lg:grid-cols-3">
            {recommendedPlans().map((plan) => (
              <PricingBox
                url={plan.link}
                price={plan.price}
                isDiscounted={plan.isDiscounted}
                title={plan.name}
                subtitle={`${plan.memory}GB RAM`}
                icon={plan.icon}
                isHighlighted={plan.featured}
                features={[
                  { icon: FaSolidMicrochip, feature: "Xeon CPU", description: "Stable server processor", isResource: true },
                  { icon: FaSolidMemory, feature: `${plan.memory}GB RAM`, description: "Memory allocated", isResource: true },
                  { icon: FaSolidNetworkWired, feature: "Unmetered traffic", description: "Low-latency network", isResource: true },
                  { icon: FaSolidCloud, feature: `${plan.backups} backups`, description: "Daily snapshots", isResource: true },
                  ...defaultFeatures,
                ]}
              />
            ))}
          </div>
        ) : (
          <div class="mt-8 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 text-slate-300">
            <p class="font-semibold text-white">We need a few more details.</p>
            <p class="mt-3">Choose a player range and plugin load to see tailored server plans.</p>
          </div>
        )}
      </div>
    </section>
  );
};
