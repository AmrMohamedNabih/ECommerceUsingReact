import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'

const SearchCountResult = ({ title, onClick }) => {
    const handler = () => {}

    const clickMe = (key) => {
        localStorage.setItem("sortType", key);
        onClick();
    }

    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt="sortByIcon"
                            />
                            Sort By
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div onClick={() => clickMe("")} className="border-bottom card-filter-item">No Sorting</div>
                        <div onClick={() => clickMe("Best Selling")} className="border-bottom card-filter-item">Best Selling</div>
                        <div onClick={() => clickMe("Highest Rated")} className="border-bottom card-filter-item">Highest Rated</div>
                        <div onClick={() => clickMe("Price: Low to High")} className="border-bottom card-filter-item">
                            Price: Low to High
                        </div>
                        <div onClick={() => clickMe("Price: High to Low")} className="card-filter-item">Price: High to Low</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
