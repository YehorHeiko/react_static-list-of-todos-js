import { TodoInfo } from '../TodoInfo';
import '../../App.scss';
// Add the required props
export const TodoList = ({ todo }) => (
  <section className="TodoList">
    {todo.map(e => (
      <TodoInfo key={e.id} todo={e} />
    ))}
  </section>
);
