import Todo from "./Todo";
export default function Todos({startTodos}){
    return (
        <section>
            <h2>To do's</h2>
            {startTodos.map((todo, index) => 
                (<Todo title={todo.title} content={todo.content} key={todo.id}/>
                ))}
        </section>
    );
}