import { JSX } from "solid-js";

export default (props: { children: JSX.Element }) => (
    <div class={'w-full rounded-lg shadow-xl bg-zinc-800 p-2'}>
        {props.children}
    </div>
);
