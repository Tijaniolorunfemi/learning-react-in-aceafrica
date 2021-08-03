import React , {Fragment , useState} from "react" 
import "./css/easyframer.css"


const AccordionItem = ({item}) => {
    let [display , setDisplay] = useState(true) 
    const toggleItem = () => { 
        setDisplay(!display)
    }
    return (
        <div className="accordion m-b-1 pad-10 shadow radius-5">
            <div className="accordion-header flex no-wrap justify-content-between">
                <h5>{item.heading}</h5>
                <button 
                    style={{cursor : "pointer"}} 
                    onClick={toggleItem}>
                        {display ? "+" : "-"}
                </button>
            </div>
            
            <div className="accordion-content" 
            style={{display : display? "none" : "block"}}>
               {item.content}
            </div>
        </div> 
    )
}

const App = () => { 
    let [accordions , setAccordions] = useState([ 
        {
            heading : "Do I have to provide my email ?" , 
            content : ` If you do not provide your email, you will have no access to use 
            some special features on Bigjara`
        } , 
        {
            
            heading : "Do I have to bring my clothes home ?" , 
            content : ` Your clothes are to be on your body. You can bring some of them home so as to 
            be seen as someone who has sense`
        } , 
        {
            
            heading : "What is Bigjara?" , 
            content : ` Bigjara is an Internet company with interest in building tools to facilitate economic
            growth , enhance community development , and empower individual liberty`
        } , 
        {
            
            heading : "Where is Bigjara ?" , 
            content : ` Bigjara is an Internet Company and as such has no physical office. 
            Although the company operates using its base in Lagos`
        }
    ])

   
    return (
        <Fragment>
            <section style={{
                background : "#4b145b" , 
                height : "100vw" , 
            }}>
                <div className="framer">
                    <div className="frame pad-top-2">
                        <div className="fr-1"></div>
                        <div className="fr-10 border-radius-5 shadow bg-white">
                            <div className="frame pad-10">
                                <div className="fr-md-4">
                                    <h2 style={{fontSize : "1.5rem"}}>
                                        Question and Answers from Bigjara
                                    </h2>
                                </div>
                                <section id="accordion" className="fr-md-8 pad-10">
                                    {accordions.map((accordion , i) => (
                                        <AccordionItem 
                                            item={accordion}
                                            index={i} 
                                            key={i}
                                        />
                                    ))}
                                </section>
                            </div>
                        </div>
                        <div className="fr-1"></div>
                    </div>
                </div>
            </section>
            
        </Fragment>
    )
}

export default App