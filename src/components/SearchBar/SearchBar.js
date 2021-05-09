import './style.css';

const SearchBar = (props) => {
    return (
        <input className="search" type="text" placeholder={props.placeholder} />
    );
};

export default SearchBar;