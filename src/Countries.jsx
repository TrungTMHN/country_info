function Countries(props) {
/*Props are the information that is passed to a JSX tag*/ 
    return(
        <div className="Countries">
            <p>Country name: {props.CountryName}</p>
            <p>Capital: {props.CountryCapital}</p>
        </div>
    );
}

export default Countries;