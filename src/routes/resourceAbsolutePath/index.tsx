import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { TodoItems } from '../mockItems';
import { getTodoItems } from '../mockItems';

export default component$(() => {
  const todoItems = useResource$(async () => {
    const todos = await getTodoItems('http://localhost:5173/mock');
    return todos;
  });


  return (
    <div>
      <h1>
        Qwik Vite Server Proxy Lab <span class="lightning">⚡️</span>
      </h1>
      <p>Fetch absolute path in <b>useResource$</b> works.</p>
      <h2>Refresh in browser.<br/>useResource$() WORKS!</h2><br/>

      <div>
        <Resource
          value={todoItems}
          onPending={() => <div>Loading...</div>}
          onRejected={(err: any) => <div>Failed to load {JSON.stringify(err)}</div>}
          onResolved={(todos: TodoItems) => {
            return <div>
              {
                todos?.map((todo) => {
                  return (<>
                    <div>#{todo.id}: {todo.title}</div><br />
                  </>)
                })
              }
            </div>;
          }}
        />
      </div>
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
