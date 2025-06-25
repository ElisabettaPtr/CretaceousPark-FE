const Poster = () => {
    return (
        <div className="flex items-center justify-center" style={{ height: '650px', width: '650px' }}>
            <div className="bg-center bg-amber-50 border-2 cretaceous-yellow-border rounded-2xl shadow-2xl p-12 w-full h-full flex flex-col items-center justify-center text-center space-y-8">
                <h1 className="text-5xl font-bold text-gray-400 drop-shadow-lg leading-tight">
                    <span>Welcome to</span><br />
                    <span className="cretaceous-yellow font-extrabold">Cretaceous Park</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-black max-w-3xl mx-auto">
                Explore colossal dinosaurs, hidden lagoons, and thrilling prehistoric wonders.
                </p>

                <hr className="border-t-2 cretaceous-yellow-border w-11/12" />

                <div className="grid grid-cols-1 w-3/4 justify-center gap-6">
                    <a href="/zones-attractions" className="btn btn-lg bg-green-800 text-white border-none font-light">
                        Explore Park Zones
                    </a>
                    <a href="/work-in-progress" className="btn btn-lg bg-green-800 text-white border-none font-light">
                        Plan Your Visit
                    </a>
                </div>
                <p className="text-sm italic text-black">
                A journey 100 million years in the making...
                </p>
            </div>
        </div>
    );
}

export default Poster;
