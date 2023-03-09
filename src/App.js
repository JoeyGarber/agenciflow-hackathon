import './App.css';
import TodoKanban from './pages/components/Kanban';

function App() {
  const columns = [
    {
      id: 'column-1',
      title: 'To Do',
      tasks: []
    },
    {
      id: 'column-2',
      title: 'In Progress',
      tasks: []
    },
    {
      id: 'column-3',
      title: 'Done',
      tasks: []
    }
  ];

  return (
    <div className="App">
      <TodoKanban columns={columns}/>
    </div>
  );
}

export default App;
