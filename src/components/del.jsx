const App = () => {
    const [value, valueChange] = useState(0);
   
    return (
      <div>
        {value}
        <button onClick={() => valueChange(value + 1)}>
          Увеличить значение на 1
        </button>
      </div>
    );
  };