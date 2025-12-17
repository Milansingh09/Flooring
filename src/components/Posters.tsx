export default function Posters() {
  return (
    <section className="py-20 bg-black px-6">
      <h2 className="text-4xl text-center mb-12">
        Upcoming Movies
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-[2/3] bg-gray-800 rounded-xl flex items-center justify-center"
          >
            Poster {i}
          </div>
        ))}
      </div>
    </section>
  );
}
