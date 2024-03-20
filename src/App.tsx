import SeriesSlider from "./components/SeriesSlider";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div className="container mx-auto min-h-screen flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold text-center">Newest Series</h1>

          <div className="w-full max-w-screen-md mx-auto">
            <SeriesSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
