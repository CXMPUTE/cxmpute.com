import { A } from "@solidjs/router";

export default () => (
    <>
        <nav class="w-full border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl z-50">
            <div class="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6">
                <a href="/" class="flex items-center gap-3">
                    <img src="https://i.postimg.cc/zX0BVThh/Untitled-design-2.png" class="h-7" alt="CXMPUTE logo" />
                    <div>
                        <p class="text-sm uppercase tracking-[0.4em] text-sky-300/80">CXMPUTE</p>
                        <p class="text-xs text-slate-400">cloud infrastructure</p>
                    </div>
                </a>
                <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                    <a href="https://discord.gg/FBGHC7hWPy" class="transition hover:text-white">Discord</a>
                    <a href="https://ctrl.cxmpute.com" class="transition hover:text-white">Sign In</a>
                    <a href="https://ctrl.cxmpute.com/register" class="rounded-full border border-slate-700/70 px-4 py-2 transition hover:bg-slate-800 hover:text-white">Register</a>
                </div>
            </div>
        </nav>

        <nav class="w-full bg-slate-950/85 backdrop-blur-xl z-40">
            <div class="mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-4 py-4 sm:px-6 text-sm font-semibold text-slate-300">
                <div class="flex flex-wrap items-center gap-8">
                    <A href="/vps" class="transition hover:text-white">VPS Hosting</A>
                    <A href="/minecraft" class="transition hover:text-white">Minecraft™ Servers</A>
                    <A href="/compare" class="transition hover:text-white">Compare</A>
                </div>
                <div class="hidden md:block opacity-80">
                    <iframe src="https://status.cxmpute.com/badge?theme=dark" width="250" height="30" class="opacity-80"></iframe>
                </div>
            </div>
        </nav>
    </>
);
