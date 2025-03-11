import { createAsync } from '@solidjs/router';
import { Suspense } from 'solid-js';
import { getBackendStatus } from '../api/getBackendStatus';
import { FaSolidCircleCheck, FaSolidCircleXmark, FaSolidTriangleExclamation } from 'solid-icons/fa';

export default () => {
    const data = createAsync(() => getBackendStatus());

    return (
        <div class={'fixed bottom-0 right-0 p-2 opacity-50'}>
            <div class={'bg-black/50 p-2 rounded-lg text-xs shadow-xl'}>
                <Suspense fallback={<><FaSolidTriangleExclamation class={'inline-flex mb-0.5 text-yellow-500'} /> Disconnected from backend</>}>
                    <p>{data() ? <><FaSolidCircleCheck class={'inline-flex mb-0.5 text-green-500'} /> Connected to backend</> : <><FaSolidCircleXmark class={'inline-flex mb-0.5 text-red-500'} /> Backend connection failed</>}</p>
                </Suspense>
            </div>
        </div>
    );
};