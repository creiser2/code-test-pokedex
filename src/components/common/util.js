import Colors from "./Colors.js";

export default function getDotForType(type) {
    switch (type) {
        case "Fire":
            return <div style={{ backgroundColor: Colors.get("Fire") }} className="dot"></div>
        case "Ice":
            return <div style={{ backgroundColor: Colors.get("Ice") }} className="dot"></div>
        case "Flying":
            return <div style={{ backgroundColor: Colors.get("Flying") }} className="dot"></div>
        case "Water":
            return <div style={{ backgroundColor: Colors.get("Water") }} className="dot"></div>
        case "Ground":
            return <div style={{ backgroundColor: Colors.get("Ground") }} className="dot"></div>
        case "Rock":
            return <div style={{ backgroundColor: Colors.get("Rock") }} className="dot"></div>
        case "Normal":
            return <div style={{ backgroundColor: Colors.get("Normal") }} className="dot"></div>
        case "Fighting":
            return <div style={{ backgroundColor: Colors.get("Fighting") }} className="dot"></div>
        case "Poison":
            return <div style={{ backgroundColor: Colors.get("Poison") }} className="dot"></div>
        case "Dark":
            return <div style={{ backgroundColor: Colors.get("Dark") }} className="dot"></div>
        case "Dragon":
            return <div style={{ backgroundColor: Colors.get("Dragon") }} className="dot"></div>
        case "Steel":
            return <div style={{ backgroundColor: Colors.get("Steel") }} className="dot"></div>
        case "Ghost":
            return <div style={{ backgroundColor: Colors.get("Ghost") }} className="dot"></div>
        case "Fairy":
            return <div style={{ backgroundColor: Colors.get("Fairy") }} className="dot"></div>
        case "Bug":
            return <div style={{ backgroundColor: Colors.get("Bug") }} className="dot"></div>
        case "Grass":
            return <div style={{ backgroundColor: Colors.get("Grass") }} className="dot"></div>
        case "Electric":
            return <div style={{ backgroundColor: Colors.get("Electric") }} className="dot"></div>
        case "Psychic":
            return <div style={{ backgroundColor: Colors.get("Psychic") }} className="dot"></div>
        default:
            return <div style={{ backgroundColor: "#FFFFFF" }} className="dot"></div>
    }
}