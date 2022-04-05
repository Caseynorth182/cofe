import SingleFilterListItem from "../../single-filter-list-item/single-filter-list-item";
import './single-filter-list.scss';

const SingleFilterList = ({ data }) => {

    const element = data.data.map(item => {
        return (
            <SingleFilterListItem
                onClick={() => this.props.changeFilterState(item.key)}
                key={item.id}
                body={item.body}
                image={item.image}
                title={item.title}
                filter={item.key}
            />
        )
    })

    return (
        <section className="filter_list">
            <div className="wrapp">
                {element}
            </div>
        </section>
    )
}


export default SingleFilterList;