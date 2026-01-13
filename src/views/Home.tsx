import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router';

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <h1 className="text-center text-2xl font-semibold tracking-tight">
          Home
        </h1>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <p className="text-sm text-zinc-400">Faces in database</p>
            <p className="text-2xl font-bold">X</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <p className="text-sm text-zinc-400">Votes in database</p>
            <p className="text-2xl font-bold">Y</p>
          </div>
        </section>

        {/* Results */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
          <h3 className="text-lg font-medium">Results</h3>
          <div className="flex justify-between text-sm">
            <span className="text-green-400">Positives: 0</span>
            <span className="text-red-400">Negatives: 0</span>
          </div>
        </section>

        {/* Actions */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
          <h3 className="text-lg font-medium">Actions</h3>

          <div className="flex flex-col sm:flex-row gap-3">
            <NavLink to="/face" className="flex-1">
              <Button className="w-full">
                Start Voting
              </Button>
            </NavLink>

            <Button
              variant="destructive"
              className="flex-1"
            >
              Reset Database
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
