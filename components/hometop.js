import React, { useState } from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import g1 from "../images/g1.svg";
import g2 from "../images/g2.svg";
import g3 from "../images/g3.svg";
import p1 from "../images/p1.svg";
import p2 from "../images/p2.svg";
import p3 from "../images/p3.svg";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";

function Hometop() {
    const [isActive, setActive] = useState("false");
    const [Text, setText] = useState("Out");
    const ToggleClass = () => {
        setActive(!isActive);
        setText(isActive ? "In" : "Out");
    };

    

    return (

        <div className={styles.Border}>
            <div className={styles.DivFlex}>
                <div className={styles.g}>
                    <div>
                        <div className={styles.d1}>Total Unicorns</div>
                        <div className={styles.d1font} >100<span className={styles.plusone}>+1</span></div>
                        <Image src={g1} />
                    </div>
                    {/* <div className={isActive ? styles.hide : styles.duration}> */}
                    <div className={isActive ? styles.hide : styles.duration}>
                        <div className={styles.d1}>Total Unicorns</div>
                        <div className={styles.d1font} >100<span className={styles.plusone}>+1</span></div>
                        <Image src={g2} />
                    </div>
                    <div className={isActive ? styles.hide : styles.duration}>
                        <div className={styles.d1}>Total Unicorns</div>
                        <div className={styles.d1font} >100<span className={styles.plusone}>+1</span></div>
                        <Image src={g3} />
                    </div>
                    <div className={isActive ? styles.hide : styles.duration}>
                        <div className={styles.d1}>Total Unicorns</div>
                        <div className={styles.d1font} >100<span className={styles.plusone}>+1</span></div>
                        <Image src={g1} />
                    </div>
                    {/* </div> */}
                </div>
                <div className={styles.allBoxes}>
                    <div className={styles.twoBoxes}>
                        <div className={isActive ? styles.halfb1 : styles.b1}>
                            <div className={styles.boxheading}>Funding Tracker</div>
                            <div className={styles.boxcontent}>
                                <div className={styles.svgs}><Image src={p1} /> <div style={{ fontWeight: "500" }}>Pepper Content raised $14.3 M</div></div>
                                <div className={styles.svgs}><Image src={p2} /> <div>Samudai web3 startup raised $2.5 M</div></div>
                                <div className={styles.svgs}><Image src={p3} /> <div>Fintech startup Jiraaf raised $7.5M</div></div>
                            </div>
                        </div>
                        <div className={isActive ? `${styles.halfb1} ${styles.hide12}` : styles.b1}>
                            <div className={styles.boxheading}>Startup of the Week</div>
                            <div className={styles.boxcontent}>
                                <div className={styles.svgs}><Image src={p1} /> <div style={{ fontWeight: "500" }}>Pepper Content raised $14.3 M</div></div>
                                <div className={styles.svgs}><Image src={p2} /> <div>Samudai web3 startup raised $2.5 M</div></div>
                                <div className={styles.svgs}><Image src={p3} /> <div>Fintech startup Jiraaf raised $7.5M</div></div>
                            </div>
                        </div>
                    </div>
                    <div className={isActive ? styles.hide : styles.twoBoxes}>
                        <div className={styles.b2}>
                            <div className={styles.boxheading}>Startups in News</div>
                            <div className={styles.boxcontent}>
                                <div className={styles.svgs}><Image src={p1} /> <div style={{ fontWeight: "500" }}>Pepper Content raised $14.3 M</div></div>
                                <div className={styles.svgs}><Image src={p2} /> <div>Samudai web3 startup raised $2.5 M</div></div>
                                <div className={styles.svgs}><Image src={p3} /> <div>Fintech startup Jiraaf raised $7.5M</div></div>
                            </div>
                        </div>
                        <div className={styles.b2}>
                            <div className={styles.boxheading}>Concepts you  may or may not know</div>
                            <div className={styles.boxcontent}>
                                <div className={styles.svgs}><Image src={p1} /> <div style={{ fontWeight: "500" }}>Pepper Content raised $14.3 M</div></div>
                                <div className={styles.svgs}><Image src={p2} /> <div>Samudai web3 startup raised $2.5 M</div></div>
                                <div className={styles.svgs}><Image src={p3} /> <div>Fintech startup Jiraaf raised $7.5M</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.check} onClick={ToggleClass}><div className={styles.check2}>Nerd {Text}! <div><Image src={isActive ? plus : minus} /></div></div></button>
        </div>



    );
}

export default Hometop;
