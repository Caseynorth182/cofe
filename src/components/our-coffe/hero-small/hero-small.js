import { Component } from "react"
import BG from '../../../assets/img/1.jpg';

class HeroSmall extends Component {


    render() {
        return (
            <section
                className="hero-small"
                style={{
                    backgroundImage: `url(${BG})`,
                    color: '#fff',
                    height: 260,
                    padding: '100px  0 0 0'
                }}
            >
                <h1 className="text-center">Our cofee</h1>

            </section >
        )
    }
}


export default HeroSmall;