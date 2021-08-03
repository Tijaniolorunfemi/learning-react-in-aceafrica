import React , {Fragment ,useState} from "react" 

import "./css/easyframer.css" 

const App = () => {
    let [dark , setDark] = useState(false)
    let [bg , setBg] = useState("#fff") 
    let [textColor , setTextColor] = useState("#282c35") 
    let [primaryColor , setPrimaryColor] = useState("#d23669") 
    let [studentHealth , setStudentHealth] = useState("Normal")

    const handleClick = () => { 
        setDark(!dark)
        setBg(dark ? "#fff" : "#282c35")
        setTextColor(dark ? "#282c35" : "#fff") 
        setPrimaryColor(dark ? "#d23669"  : "#ffa7c4")
        setStudentHealth(dark ? "Normal" : "Abnormal")
    }
    return (
        <Fragment>
            <section style={{
                background : bg , 
                height : "100vw" , 
            }}>
                <div className="framer">
                    <div className="frame pad-top-2">
                        <div className="fr-1"></div>
                        <div className="fr-10">
                            <div className="flex justify-content-between">
                                <h1  style={{"color" : textColor}}>Bigjara</h1> 
                                {/* <p style={{"color" : textColor}}>Student is {studentHealth}</p> */}
                                <div>
                                <button 
                                    style={{
                                        border:"none" ,
                                        outline : 0 ,
                                        borderRadius : "3px" ,
                                        background : primaryColor , 
                                        color : bg,
                                        padding:"5px 8px "
                                        }}
                                    className="shadow"
                                    onClick={handleClick}
                                >
                                    Toggle
                                </button>
                                </div>
                                
                            </div>
                            <article>
                                <div>
                                    <header>
                                        <h2 style={{"color" : primaryColor}}>The Frontend Master</h2>
                                    </header>
                                    <p style={{"color" : textColor}}>
                                        <span>Sunday 4th July 2020</span>
                                        <span>12 min read</span>
                                    </p>
                                    <p  style={{"color" : textColor}}>
                                        You should start attempting to guide your colleagues 
                                        into believing in the things we do
                                    </p>
                                </div>
                                {/* <p>the student is {studentHealth}</p> */}
                                <div>
                                    <header>
                                        <h2 style={{"color" : primaryColor}}>The Frontend Master</h2>
                                    </header>
                                    <p style={{"color" : textColor}}>
                                        <span>Sunday 4th July 2020</span>
                                        <span>12 min read</span>
                                    </p>
                                    <p  style={{"color" : textColor}}>
                                        You should start attempting to guide your colleagues 
                                        into believing in the things we do
                                    </p>
                                </div>
                                <div>
                                    <header>
                                        <h2 style={{"color" : primaryColor}}>The Frontend Master</h2>
                                    </header>
                                    <p style={{"color" : textColor}}>
                                        <span>Sunday 4th July 2020</span>
                                        <span>12 min read</span>
                                    </p>
                                    <p  style={{"color" : textColor}}>
                                        You should start attempting to guide your colleagues 
                                        into believing in the things we do
                                    </p>
                                </div>
                            </article>
                        </div> 
                    </div> 
                </div> 
            </section>
        </Fragment>
    )
}

export default App