const Home = () => {
  return (
    <>
      <div className="p-8 max-w-3xl mx-auto">
        <h1>Home</h1>
        <section className="mb-8 p-4 border border-gray-300 rounded">
          <p>
            Welcome to the Face voting application! This platform allows users
            to cast votes using facial recognition technology, ensuring a secure
            and efficient voting process.
          </p>
          <p>Number of votes in database: x</p>
        </section>
        <section className="mb-8 p-4 border border-gray-300 rounded">
          <h2>Results</h2>
          <p>Positives: 0</p>
          <p>Negatives: 0</p>
        </section>
        <section className="p-4 border border-gray-300 rounded">
          <h2>Cast Your Vote</h2>
          <p>
            To cast your vote, please use the facial recognition feature. Ensure
            your face is clearly visible to the camera for accurate
            identification.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Vote
          </button>
          <button className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Reset Database
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
