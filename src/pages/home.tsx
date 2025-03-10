import { createEffect, createSignal } from "solid-js";
import Box from "../components/Box";
import { FaSolidEnvelope, FaSolidPencil } from "solid-icons/fa";

function validateEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}

export default function Home() {
  const [show, setShow] = createSignal<boolean>(false);
  const [email, setEmail] = createSignal<string | undefined>('');

  createEffect(() => {
    const valid = validateEmail(email());

    if (!valid) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [email]);

  return (
    <div class="flex h-screen">
      <div class="justify-center items-center m-auto max-w-5xl grid lg:grid-cols-2 gap-4">
        <div>
          <h3 class="font-mono text-4xl font-semibold text-white">cloud infrastructure for the <span
            class="text-purple-500">modern world</span></h3>
          <p class="text-gray-400 font-sans mt-1">CXMPUTE is an organisation which specialises in providing low-cost
            solutions for hosting web applications with a global presence.</p>
        </div>
        <Box>
          <div class={'text-center my-8 transition-all duration-300'}>
            <p class={'text-2xl font-semibold font-sans'}>
              Get started with <span class={'text-purple-400'}>CXMPUTE</span>
            </p>
            <div class="flex justify-center mt-6">
              <div class={'relative w-2/3'}>
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaSolidEnvelope class="w-4 h-4" style={{ color: show() ? 'green' : 'gray' }} />
                </div>
                <input type="text" onChange={(e) => setEmail(e.currentTarget.value)} disabled={show()} class="w-full bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 ps-10 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 disabled:text-zinc-400" placeholder="user@cxmpute.com" />
                {show() && <div onClick={() => { setEmail(''); setShow(false) }} class="text-gray-400 absolute end-2.5 bottom-3.5 text-xs cursor-pointer hover:text-red-500 transition-colors duration-300"><FaSolidPencil /></div>}
              </div>
            </div>
            <div class={`transition-all duration-300 overflow-hidden ${show() ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              {show() && <p class={'font-sans text-green-600 text-xs italic mt-1'}>Account created successfully.</p>}
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
