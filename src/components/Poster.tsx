const Poster = () => {
    return (
        <div className="flex items-center justify-center" style={{ height: '650px', width: '650px' }}>
            {/* Contenitore interno — stessa larghezza, ma con uno styling più ricercato */}
            <div className="bg-center border-2 cretaceous-yellow-border rounded-2xl shadow-2xl p-12 w-full h-full flex flex-col items-center justify-center text-center space-y-8">
                <h1 className="text-5xl font-bold cretaceous-beige drop-shadow-lg leading-tight">
                    <span>Welcome to</span><br />
                    <span className="cretaceous-yellow font-extrabold text-">Cretaceous Park</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-white max-w-3xl mx-auto">
                Explore colossal dinosaurs, hidden lagoons, and thrilling prehistoric wonders.
                </p>

                <hr className="border-t-2 cretaceous-yellow-border w-11/12" />

                <div className="grid grid-cols-1 w-3/4 justify-center gap-6">
                    <a href="#zones" className="btn btn-lg bg-blue-400 text-white border-none font-light">
                        Explore Park Zones
                    </a>
                    <a href="#tickets" className="btn btn-lg bg-blue-400 text-white border-none font-light">
                        Buy Tickets
                    </a>
                    <a href="#planner" className="btn btn-lg bg-blue-400 text-white border-none font-light">
                        Plan Your Visit
                    </a>
                </div>
                <p className="text-sm italic text-white">
                A journey 100 million years in the making...
                </p>
            </div>
        </div>
    );
}

// bg-gray-500 rounded-md shadow-2xl w-full bg-cover bg-center px-6 py-12 space-y-6 flex flex-col items-center justify-center text-[#D7CCC8] font-serif text-center

export default Poster;
