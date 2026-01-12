const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <section>
        <p>
          Welcome to the Face voting application! This platform allows users to
          cast votes using facial recognition technology, ensuring a secure and
          efficient voting process.
        </p>
        <p>Number of votes in database: x</p>
      </section>
      <section>
        <h2>Results</h2>
        <p>Positives: 0</p>
        <p>Negatives: 0</p>
      </section>
      <section>
        <h2>Cast Your Vote</h2>
        <p>
          To cast your vote, please use the facial recognition feature. Ensure
          your face is clearly visible to the camera for accurate
          identification.
        </p>
        <button>Vote</button>
        <button>Reset Database</button>
      </section>
    </>
  );
};

export default Home;
