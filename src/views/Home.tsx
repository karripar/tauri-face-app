import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router';

const Home = () => {
  return (
    <>
      <h1 className="text-center p-4 text-lg">Home</h1>
      <section className="p-4 border-b border-zinc-700">
        <p>Number of faces in database: X</p>
        <p>Number of votes in database: Y</p>
      </section>
      <div className="p-4 space-y-4">
      <section>
        <h3>Results</h3>
        <div>
          <p>Positives: 0</p>
          <p>Negatives: 0</p>
        </div>
      </section>
      <section className="space-y-2 pt-4 border-t border-zinc-700">
        <h3>Actions</h3>
        <NavLink to={'/face'}>
        <Button>Start Voting</Button>
        </NavLink>
        <Button>Reset Database</Button>
      </section>
      </div>
    </>
  );
};

export default Home;