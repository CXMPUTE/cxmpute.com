import { JSX } from "solid-js";

export default (props: { children: JSX.Element }) => (
    <div class={'relative w-full rounded-lg shadow-xl bg-zinc-800 p-4 z-20 text-gray-300'}>
        {props.children}
    </div>
);
