import "./Filter.css";
import Colors from "./common/Colors.js";
import "./Content.css";
import getDotForType from "./common/util";

function Filter(props) {
    function renderBoxes() {
        return [...Colors].map(type => {
            return (
                <div className="checkbox-container" key={type[0].toString()}>
                    {getDotForType(type[0])}
                    <label className="checkbox-name">
                        {type[0]}
                    </label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        defaultChecked={false}
                        id={type[0]}
                        onChange={(e) => props.filterChanged(e)}
                    />
                </div>
            )
        })
    }

    return (
        <div className="filter-container">
            <div className="filter-header">{props.type}</div>
            <div className="filter-list">
                {renderBoxes()}
            </div>
        </div>
    )

}

export default Filter;