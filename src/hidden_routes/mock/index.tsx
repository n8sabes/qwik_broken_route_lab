import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const DocumentName = "placeholder";

export default component$(() => {

    return <>
        placeholder
    </>
});

export const head: DocumentHead = {
    title: DocumentName,
    meta: [
        { name: 'description', content: DocumentName },
    ],
};
