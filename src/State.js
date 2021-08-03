import React ,{Fragment , Component} from "react"  
import "./css/easyframer.css" 

export default class App extends Component {
    constructor(props){
        super(props) 
        this.state = {
            date  : new Date() ,
            expiringDate: new Date("2021","09","01") ,
            remainingTime: 0 
        }
    }
    tick(){
        this.setState({
            date : new Date() ,
            remainingTime: this.state.expiringDate.getTime() - this.state.date.getTime()
            // expiringDate: this.state.expiringDate.getTime()
        })
    }
    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return ( 
            <Fragment>
                <div className="framer"> 
                    <div 
                        className="frame" 
                        style={{
                            flexDirection : "column" , 
                            alignItems : "center" ,
                            paddingTop:"30px"
                        }}
                    > 
                        <h1>
                            <span>The time is </span>
                            <span>{this.state.date.toLocaleTimeString()}</span>
                        </h1>
                        <p>{this.state.remainingTime}</p>
                    </div>
                </div>
            </Fragment> 
        )
    }
}