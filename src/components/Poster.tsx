const Poster = () => {
    return (
        <div style={{ color: "#D7CCC8", minHeight: "100vh", fontFamily: "'Georgia', serif", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h1 className="cretaceous-red" style={{ fontSize: "3rem", marginBottom: "0.5rem", textShadow: "2px 2px #6D4C41" }}>
            Welcome to Cretaceous Park
        </h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "1.5rem", maxWidth: "600px" }}>
            Step into a world where dinosaurs rule and ancient landscapes come alive. Discover massive creatures, mysterious swamps, and thrilling adventures for the whole family.
        </p>
        <button
            className="cretaceous-yellow-bg"
            style={{
            color: "#D7CCC8",
            border: "none",
            padding: "0.75rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            transition: "background-color 0.3s",
            }}
        >
            Start Your Adventure
        </button>
        </div>
    );
}

export default Poster;
