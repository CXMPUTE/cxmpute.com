import { IconTypes } from "solid-icons"

interface Props {
    icon: IconTypes;
    title: string;
    children: string;
}

export default (props: Props) => (
    <div class="glass-panel p-6 text-slate-200">
        <p class="mb-5 flex items-center text-xl font-bold text-white">
            <props.icon class="mr-3 text-cyan-400" />
            {props.title}
        </p>
        <p class="leading-7 text-slate-300">{props.children}</p>
    </div>
);
