import './App.css';
import Header from './components/header';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './components/Layout';
import Main from './pages/Home';
import Our from './pages/Our';
import Page404 from './pages/Page404';
import { Component } from 'react'
import { ListGroup } from 'react-bootstrap';





class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          userId: 1,
          key: 'Brazil',

          image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s72432a10d6ed924b/image/ie49dd4dd229ed615/version/1333182369/%D0%BE%D0%B1%D0%BE%D0%B8-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%BA%D0%BE%D1%82%D1%8B-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%BA%D0%BE%D1%82%D1%8F%D1%82%D0%B0.jpg",
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 1,
          key: 'Kenya',
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e0V-PlyVFjiNQ8fa_XiRtpN4_pj2GvnjQ9GyBJFzPlOMsRMG2CdVSC0sh1ySYpM6lUk&usqp=CAU",
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          userId: 1,
          key: 'Brazil',
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MjBPhbTwnItLbOr2fRK5R9DRh13sncVFkZ0Q7THO--BwNE_0eQBpE0XWdM1710qiR4Q&usqp=CAU",
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut'
        },
        {
          userId: 1,
          key: 'Columbia',
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1G7N2dhH9GaTRmQAR_BRTh_5_GnpEbRlziR388iqIPOYOkKh7EaFGPS4Gd6kssARGcY&usqp=CAU",
          id: 4,
          title: 'eum et est occaecati',
          body: 'ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit'
        },
        {
          userId: 1,
          key: 'Columbia',
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBY-h7UNH6qW4gGj3lo6HY818G9EAndFg6upMgp_dgsWt69JJI6Us9uVWzby2V59Zuocw&usqp=CAU",
          id: 5,
          title: 'nesciunt quas odio',
          body: 'repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque'
        },
      ],
      dataFilter: 'all',
      term: '',
    }
  }

  changeFilterState = (filter) => {
    console.log(filter);
    this.setState({
      dataFilter: filter
    })

  }

  FilterData = (data, filter) => {
    if (filter === 'Brazil') {
      return data.filter(item => item.key === 'Brazil')
    } else if (filter === 'Columbia') {
      return data.filter(item => item.key === 'Columbia')

    } else if (filter === 'Kenya') {
      return data.filter(item => item.key === 'Kenya')
    } else {
      return data;
    }
  }


  TakeValue = (value) => {
    let newTerms = value;

    this.setState(state => ({
      term: newTerms
    }))
    // this.setState({
    //   term: newTerms
    // })
  }

  SearchFilter = (data, term) => {
    console.log(term.length);
    if (term.length === 1 || this.state.dataFilter === 'res') {
      return data;
    }

    return data.filter(item => {
      //console.log(item.key.indexOf(term) > -1);
      return item.key.indexOf(term) > -1

    })
  }

  render() {
    const { data, dataFilter, term } = this.state;
    let newData = this.FilterData(data, dataFilter);
    let filteredData = this.SearchFilter(this.FilterData(data, dataFilter), term)
    //console.log(filteredData);
    return (
      <>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index path='/' element={<Main />} />
            <Route
              path='/about'
              element={
                <Our
                  data={filteredData}
                  changeFilterState={this.changeFilterState}
                  TakeValue={this.TakeValue}
                />
              } />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </>
    );
  }

}

export default App;
