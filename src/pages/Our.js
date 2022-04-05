import { Component } from "react";
import HeroSmall from "../components/our-coffe/hero-small/hero-small";
import SingleDescr from "../components/our-coffe/single-descr/single-descr";
import SingleFilter from "../components/our-coffe/single-filter/single-filter";
import SingleFilterList from "../components/our-coffe/single-filter-list/single-filter-list";






class Our extends Component {

    render() {
        // console.log(this.props);
        return (
            <>
                <HeroSmall />
                <SingleDescr />
                <SingleFilter changeFilterState={this.props.changeFilterState} TakeValue={this.props.TakeValue} />
                <SingleFilterList data={this.props} />
            </>
        )
    }
}


export default Our