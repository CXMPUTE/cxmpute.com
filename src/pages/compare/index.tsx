import Table from "./table";

export default () => (
    <section class="py-16 px-4">
        <div class="glass-card mx-auto max-w-6xl p-10 space-y-8">
            <div>
                <p class="text-sm uppercase tracking-[0.35em] text-cyan-300">Compare</p>
                <h1 class="mt-4 text-4xl font-extrabold text-white">How We Compare</h1>
                <p class="mt-4 text-slate-300 text-lg leading-8">See how CXMPUTE stacks up against competitors across performance, security, and value.</p>
            </div>
            <Table />
        </div>
    </section>
)
