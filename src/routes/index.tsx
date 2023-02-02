import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useNavigate } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const nav = useNavigate();

  return (
    <div>
      <h1>
        Qwik-Cith + Vite Server Proxy Lab <span class="lightning">⚡️</span>
      </h1>
      Vite server proxies do not work in `dev` mode. They do work in `preview` mode.
      <h3>Links (won't link)</h3>
      <Link href="/mock/foo/">
        /mock/foo proxy
      </Link><br />
      <Link href="/mock/bar">
        /mock/foo proxy
      </Link><br />
      <Link href="/mock">
        /mock proxy
      </Link><br />
      <h3>useNavigate.nav (won't navigate)</h3>
      <button onClick$={() => nav("/mock/foo")}>/mock/foo</button><br />
      <button onClick$={() => nav("/mock/bar")}>/mock/bar</button><br />
      <button onClick$={() => nav("/mock")}>/mock</button><br />
      <br/>
      <h3>window.location.href (DOES WORK)</h3>
      <button onClick$={() => window.location.href="/mock/foo"}>/mock/foo</button><br />
      <button onClick$={() => window.location.href="/mock/bar"}>/mock/bar</button><br />
      <button onClick$={() => window.location.href="/mock"}>/mock</button><br />
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
