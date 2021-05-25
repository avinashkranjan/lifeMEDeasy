import React,{Component} from 'react';
import './cards.css';
class cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (             <div className="colabcards">
       
            <div className="box-container cards">
                <div className="box-item">
                    <div className="flip-box">
                        <div
                            className="flip-box-front text-center"
                            
                        >
                            
                            <div className="inner color-black">
                                <h2
                                    className="flip-box-header"
                                    style={{
                                        textTransform: "Capitalize"
                                    }}
                                >
                                    
                                    Diet and nutrition
                                </h2>
                                
                                
                            </div>
                        </div>
                        <div
                            className="flip-box-back text-center"
                            style={{
                                backgroundColor: "blanchedalmond"
                            }}
                        >
                            <br />

                            

                            <p>Practicing self-discipline and avoiding “emotional eating” due to stress that may be related to the drastic changes surrounding the COVID-19 pandemic and how it affects our lives is imperative. According to the CDC, whole foods like dark, leafy greens, oranges—even fresh herbs—are loaded with vitamins, fiber and minerals. Make it a habit to try to eat more whole nutritious foods.</p>

                        </div>
                    </div>
                </div>
    
    </div>
    <div className="box-container cards">
    <div className="box-item">
        <div className="flip-box">
            <div
                className="flip-box-front text-center"
                
            >
                
                <div className="inner color-black">
                    <h2
                        className="flip-box-header"
                        
                    >
                        Adequate sleep
                    </h2>
                    
                </div>
            </div>
            <div
                className="flip-box-back text-center"
                style={{
                    backgroundColor: "blanchedalmond"
                }}
            >
                <br />

                <p>Good sleep is essential to our overall health. According to The National Institutes of Health (NIH), Immune system activation alters sleep, and sleep in turn affects the innate and adaptive arm of our body&apos;s defense system  While the amount of sleep needed for good health and optimum performance mostly depends on the individual.</p>

            
        </div>
    </div>
</div>
</div>
    <div className="box-container cards">
    <div className="box-item">
        <div className="flip-box">
            <div
                className="flip-box-front text-center"
                
            >
                
                <div className="inner color-black">
                    <h2
                        className="flip-box-header"
                        
                    >
                        Stay connected
                    </h2>
                   
                </div>
            </div>
            <div
                className="flip-box-back text-center"
                style={{
                    backgroundColor: "blanchedalmond"
                }}
            >
                <br />

                <p>Talking with loved ones while in isolation can help reduce the anxiety and instances of feeling down. Take time to utilize the multitudes of technologies and apps (many free) that can help you stay in touch with those you love. Our busy lives before the COVID-19 may have limited how often we connected with distant loved ones, now’s the time to exploit these modern capabilities.</p>

            </div>
        </div>
    </div>
</div>
</div>
);
    }
}
 
export default cards;