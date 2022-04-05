import { Component } from "react"
import Image from '../../../assets/img/2.png';
import Hero from "../../main/hero/hero";
class SingleDescr extends Component {


    render() {
        return (
            <section className="single_descr_wrapp">
                <div className="container">
                    <div className="row">

                        <div className="col-6 p-2">
                            <img className="img-fluid" src="https://s12.pikabu.ru/post_img/big/2020/08/10/10/159708117316576677.jpg" alt="" />
                        </div>
                        <div className="col-6 p-2">
                            <Hero />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}


export default SingleDescr;