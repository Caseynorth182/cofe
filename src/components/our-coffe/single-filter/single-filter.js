import { Component, useState } from "react";

const SingleFilter = (props) => {
    const buttons = [
        { key: 'Brazil' },
        { key: 'Kenya' },
        { key: 'Columbia' },
        { key: 'all' },
        { key: 'res' },
    ]

    const [value, setValue] = useState('');
    const btns = buttons.map(item => {
        return (
            <button
                onClick={() => props.changeFilterState(item.key)}
                data-key={item.key}
                className="btn btn-primary">
                {item.key}
            </button>
        )
    })

    const OnChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
        props.TakeValue(value)
    }

    return (
        <div className="filter">
            <div className="container">
                <div className="d-flex w-100">
                    <form action="">
                        <label htmlFor="">
                            {value}
                            <input
                                type="text"
                                className='form-control search-input'
                                placeholder='Find'
                                value={value}
                                onChange={OnChange}
                            />
                        </label>
                    </form>

                    <div className="btn-group">
                        {btns}
                    </div>
                </div>
            </div >
        </div >
    )

}


export default SingleFilter;