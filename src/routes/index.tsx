import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <div>
      <h1>
        Qwik Vite Server Proxy Lab <span class="lightning">⚡️</span>
      </h1>
      <br />
      <br />
      <Link href="/resourceAbsolutePath" class="normal">Resource$ absolute path -- Works</Link><br />
      <Link href="/resourceRelativePath" class="broken">Resource$ relative path -- Refresh Broken</Link><br />
      <button class="broken" onClick$={() => window.location.href = "/resourceRelativePath"}>Resource$ relative path -- Immediate Broken</button><br />
      {/* <br /> */}
      {/* <Link href="/proxyLinks" class="normal">Proxy Links (fixed)</Link><br /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
