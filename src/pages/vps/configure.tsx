import { Show, createMemo, createSignal } from "solid-js";
import { FaSolidCheck, FaSolidCloud, FaSolidHardDrive, FaSolidMemory, FaSolidMicrochip, FaSolidShield, FaSolidWifi, FaSolidArrowLeft, FaSolidBoltLightning, FaSolidGauge } from "solid-icons/fa";
import type { IconTypes } from "solid-icons";
import { Button } from "../../components/button";
import vpsPlans from "../../../data/vps.data";

type VPSType = "standard" | "performance";
type ResourceKey = "cpu" | "memory" | "storage" | "bandwidth";
type ExtraKey = "backups" | "firewall";
type ConfigKey = ResourceKey | ExtraKey;

type Config = {
  cpu: number;
  memory: number;
  storage: number;
  bandwidth: number;
  backups: boolean;
  firewall: boolean;
};

const uniqueSorted = (values: number[]) => Array.from(new Set(values)).sort((a, b) => a - b);

const getPlansByType = (type: VPSType) => vpsPlans.filter((plan) => plan.type === type);
const cpuOptions = (type: VPSType) => uniqueSorted(getPlansByType(type).map((plan) => plan.vcpus));
const memoryOptions = (type: VPSType, cpu: number) => uniqueSorted(getPlansByType(type).filter((plan) => plan.vcpus === cpu).map((plan) => plan.memory));
const storageOptions = (type: VPSType, cpu: number, memory: number) => uniqueSorted(getPlansByType(type).filter((plan) => plan.vcpus === cpu && plan.memory === memory).map((plan) => plan.disk));
const bandwidthOptions = (type: VPSType, cpu: number, memory: number, storage: number) => uniqueSorted(getPlansByType(type).filter((plan) => plan.vcpus === cpu && plan.memory === memory && plan.disk === storage).map((plan) => plan.traffic));

const clamp = (value: number, values: number[]) => (values.includes(value) ? value : values[0]);

const initialType: VPSType = "standard";
const initialPlan = getPlansByType(initialType)[0];

const resourceGroups: Array<{
  title: string;
  key: ResourceKey;
  icon: IconTypes;
  suffix: string;
  getOptions: (type: VPSType, config: Config) => number[];
}> = [
  { title: "CPU", key: "cpu", icon: FaSolidMicrochip, suffix: "vCores", getOptions: (type) => cpuOptions(type) },
  { title: "RAM", key: "memory", icon: FaSolidMemory, suffix: "GB", getOptions: (type, config) => memoryOptions(type, config.cpu) },
  { title: "Storage", key: "storage", icon: FaSolidHardDrive, suffix: "GB", getOptions: (type, config) => storageOptions(type, config.cpu, config.memory) },
  { title: "Bandwidth", key: "bandwidth", icon: FaSolidWifi, suffix: "TB", getOptions: (type, config) => bandwidthOptions(type, config.cpu, config.memory, config.storage) },
];

const extraOptions: Array<{ key: ExtraKey; label: string; description: string; icon: IconTypes }> = [
  { key: "backups", label: "Daily Backups", description: "Daily snapshot restore points.", icon: FaSolidCloud },
  { key: "firewall", label: "Managed Firewall", description: "Stronger network protection.", icon: FaSolidShield },
];

const planTypeDetails: Record<VPSType, { label: string; description: string; perks: string[] }> = {
  standard: {
    label: "Standard VPS",
    description: "Balanced pricing with more memory and storage when compared to performance plans.",
    perks: ["Better memory-to-price ratio", "Great for general purpose workloads", "Perfect for web hosting and development"],
  },
  performance: {
    label: "Performance VPS",
    description: "Higher CPU efficiency and throughput for latency-sensitive tasks.",
    perks: ["Stronger single-threaded performance", "Ideal for game servers and databases", "Built for bursty compute workloads"],
  },
};

const planTypes: VPSType[] = ["standard", "performance"];

export default () => {
  const [selectedType, setSelectedType] = createSignal<VPSType | null>(null);
  const [selected, setSelected] = createSignal<Config>({
    cpu: initialPlan.vcpus,
    memory: initialPlan.memory,
    storage: initialPlan.disk,
    bandwidth: initialPlan.traffic,
    backups: false,
    firewall: false,
  });

  const normalize = (type: VPSType, next: Partial<Config>) => {
    const current = { ...selected(), ...next };
    const cpu = clamp(current.cpu, cpuOptions(type));
    const memory = clamp(current.memory, memoryOptions(type, cpu));
    const storage = clamp(current.storage, storageOptions(type, cpu, memory));
    const bandwidth = clamp(current.bandwidth, bandwidthOptions(type, cpu, memory, storage));
    return { ...current, cpu, memory, storage, bandwidth };
  };

  const beginType = (type: VPSType) => {
    const plan = getPlansByType(type)[0];
    setSelectedType(type);
    setSelected({ cpu: plan.vcpus, memory: plan.memory, storage: plan.disk, bandwidth: plan.traffic, backups: false, firewall: false });
  };

  const update = (key: ConfigKey, value: number | boolean) => {
    const type = selectedType();
    if (!type) return;
    if (key === "cpu") {
      setSelected(normalize(type, { cpu: value as number }));
      return;
    }
    if (key === "memory") {
      setSelected(normalize(type, { memory: value as number }));
      return;
    }
    if (key === "storage") {
      setSelected(normalize(type, { storage: value as number }));
      return;
    }
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  const matchedPlan = createMemo(() => {
    const type = selectedType();
    if (!type) return null;
    const config = selected();
    return getPlansByType(type).find((plan) =>
      plan.vcpus === config.cpu &&
      plan.memory === config.memory &&
      plan.disk === config.storage &&
      plan.traffic === config.bandwidth
    ) ?? getPlansByType(type).find((plan) =>
      plan.vcpus === config.cpu &&
      plan.memory === config.memory &&
      plan.disk === config.storage
    ) ?? getPlansByType(type).find((plan) =>
      plan.vcpus === config.cpu &&
      plan.memory === config.memory
    ) ?? getPlansByType(type).find((plan) => plan.vcpus === config.cpu) ?? getPlansByType(type)[0];
  });

  const estimatedProfile = createMemo(() => {
    const cpu = selected().cpu;
    if (cpu <= 1) return "Starter site";
    if (cpu <= 4) return "Small production";
    if (cpu <= 6) return "Growing service";
    return "High-performance";
  });

  return (
    <section class="space-y-10">
      <div class="space-y-4">
        <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">VPS configurator</p>
        <h2 class="text-4xl font-extrabold text-white">Choose your plan family first</h2>
        <p class="max-w-3xl text-slate-300 text-lg leading-8">Standard and Performance VPS plans are different products. Pick a product line, then configure only the options available for that family.</p>
      </div>

      <Show when={selectedType()} fallback={
        <div class="grid gap-8 xl:grid-cols-2">
          {planTypes.map((type) => (
            <div class="glass-card rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
              <div class="flex items-center gap-3">
                <div class="rounded-3xl bg-cyan-500/10 p-3 text-cyan-300">
                  {type === "standard" ? <FaSolidGauge class="h-6 w-6" /> : <FaSolidBoltLightning class="h-6 w-6" />}
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.35em] text-cyan-300">{planTypeDetails[type].label}</p>
                  <h3 class="mt-3 text-2xl font-semibold text-white">{planTypeDetails[type].description}</h3>
                </div>
              </div>
              <ul class="mt-8 space-y-4 text-slate-300">
                {planTypeDetails[type].perks.map((perk) => (
                  <li class="flex items-start gap-3">
                    <FaSolidCheck class="mt-1 h-5 w-5 text-emerald-400" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button type="button" class="button-frost mt-8 w-full" onClick={() => beginType(type)}>{type === "standard" ? "Start with Standard" : "Start with Performance"}</button>
            </div>
          ))}
        </div>
      }>
        <div class="space-y-10">
          <div class="glass-card rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">{planTypeDetails[selectedType()!].label}</p>
                <h3 class="mt-2 text-3xl font-semibold text-white">Configure your {planTypeDetails[selectedType()!].label}</h3>
                <p class="mt-3 text-slate-400">Only options from the {selectedType()} catalog are available here.</p>
              </div>
              <button type="button" class="button-frost secondary inline-flex items-center gap-2" onClick={() => setSelectedType(null)}><FaSolidArrowLeft /> Change plan type</button>
            </div>
          </div>

          <div class="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <div class="space-y-8">
              <div class="glass-panel p-8">
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Step 1</p>
                    <h3 class="mt-2 text-2xl font-semibold text-white">Choose valid resources only</h3>
                  </div>
                  <div class="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300">Profile: {estimatedProfile()}</div>
                </div>
                <div class="mt-8 grid gap-4 sm:grid-cols-2">
                  {resourceGroups.map((group) => {
                    const options = group.getOptions(selectedType()!, selected());
                    return (
                      <div class="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6">
                        <div class="flex items-center gap-3 text-slate-300">
                          <group.icon class="h-5 w-5 text-cyan-300" />
                          <div>
                            <p class="text-sm uppercase tracking-[0.35em]">{group.title}</p>
                            <p class="mt-2 text-sm text-slate-400">Only catalog-supported values are shown.</p>
                          </div>
                        </div>
                        <div class="mt-6 grid gap-3">
                          {options.map((option) => (
                            <button
                              class={`w-full rounded-3xl border px-5 py-4 text-left text-sm transition duration-300 ${selected()[group.key] === option ? 'border-cyan-400 bg-slate-900 text-white shadow-lg shadow-cyan-500/10' : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:bg-slate-900/80'}`}
                              onClick={() => update(group.key, option)}
                            >
                              <div class="flex items-center justify-between gap-4">
                                <p class="font-semibold">{option} {group.suffix}</p>
                                {selected()[group.key] === option && <FaSolidCheck class="h-5 w-5 text-cyan-400" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div class="glass-panel p-8">
                <div class="flex items-center gap-3">
                  <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">2</span>
                  <div>
                    <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Step 2</p>
                    <h3 class="mt-2 text-2xl font-semibold text-white">Optional enhancements</h3>
                  </div>
                </div>
                <p class="mt-4 text-slate-400">These extras are add-ons and do not affect the base catalog match.</p>
                <div class="mt-8 space-y-4">
                  {extraOptions.map((option) => (
                    <button
                      class={`w-full rounded-[2rem] border px-5 py-5 text-left transition duration-300 ${selected()[option.key] ? 'border-cyan-400 bg-slate-900 shadow-lg shadow-cyan-500/10 text-white' : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:bg-slate-900/80'}`}
                      onClick={() => update(option.key, !selected()[option.key])}
                    >
                      <div class="flex items-start gap-4">
                        <option.icon class="mt-1 h-6 w-6 text-cyan-300" />
                        <div>
                          <div class="flex items-center justify-between gap-4">
                            <p class="text-lg font-semibold">{option.label}</p>
                            <span class="text-sm text-slate-400">Optional</span>
                          </div>
                          <p class="mt-2 text-sm text-slate-400">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <aside class="glass-card sticky top-10 space-y-6 p-8">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="h-12 w-12 rounded-3xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center text-xl">€</div>
                  <div>
                    <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Catalog match</p>
                    <p class="text-3xl font-extrabold text-white">€{matchedPlan()!.price.toFixed(2)}/month</p>
                  </div>
                </div>
                <p class="text-sm text-slate-400">This is the exact plan that supports your selected configuration.</p>
              </div>

              <div class="grid gap-3">
                {[
                  { label: "CPU", value: `${selected().cpu} vCores`, icon: FaSolidMicrochip },
                  { label: "Memory", value: `${selected().memory}GB`, icon: FaSolidMemory },
                  { label: "Storage", value: `${selected().storage}GB`, icon: FaSolidHardDrive },
                  { label: "Network", value: `${selected().bandwidth}TB`, icon: FaSolidWifi },
                ].map((item) => (
                  <div class="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 flex items-center gap-3">
                    <item.icon class="h-5 w-5 text-cyan-300" />
                    <div>
                      <p class="text-sm text-slate-400">{item.label}</p>
                      <p class="text-base font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div class="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-6">
                <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Selected plan</p>
                <p class="mt-3 font-semibold text-white">{matchedPlan()!.name}</p>
                <p class="mt-2 text-sm text-slate-400">{matchedPlan()!.vcpus} vCore, {matchedPlan()!.memory}GB RAM, {matchedPlan()!.disk}GB NVMe, {matchedPlan()!.traffic}TB traffic</p>
              </div>

              <Button onClick={() => { window.location.href = matchedPlan()!.link; }} class="w-full">Order {matchedPlan()!.name}</Button>

              <div class="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-300">
                <p class="font-semibold text-white">Optional add-ons</p>
                <p class="mt-2">Backup and firewall options appear here for convenience and are quoted separately at checkout.</p>
              </div>
            </aside>
          </div>
        </div>
      </Show>
    </section>
  );
};
