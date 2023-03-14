import { Input } from "antd";

const Search = ({ handleSearchFilter}) => {
    const handleChange = (e) => {
        handleSearchFilter(e.target.value);
    }
    return ( 
        <div className="search-bar">
            <Input type="text" name="search" onChange={handleChange} placeholder="e.g. Pizza, Fetuccini Alfredo..." />
        </div>
    );
}

export default Search;