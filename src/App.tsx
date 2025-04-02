import './App.css';

const App: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
      <div className="relative mb-5 w-44">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="h-[164px] w-auto"
        />
      </div>
      <h1 className="mb-5 text-5xl text-white">Hello Module Federation 2.0</h1>
    </div>
  );
};

export default App;
