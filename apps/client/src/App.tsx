const App = () => {
  return (
    <div className="w-screen bg-slate-500">
      <button
        onClick={() => {
          fetch("/api")
            .then((res) => res.text())
            .then((data) => {
              console.log(data);
            });
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
