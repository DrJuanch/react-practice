import './TodoButton.css';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log('Click')
        console.log(event.target)
      }
      }>
      +
    </button>
  );
};

export { CreateTodoButton }; 
