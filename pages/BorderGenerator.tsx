import styles from "@/styles/index.module.css";
import React from "react";

const BorderGenerator = () => {
    const [borderWidth, setBorderWidth] = React.useState(3);
    const [style, setStyle] = React.useState('solid');
    const [position, setPosition] = React.useState('bottom');
    const [borderColor, setBorderColor] = React.useState('#001f3f');
    const [borderOpacity, setBorderOpacity] = React.useState("0.5");
    const [borderRadius, setBorderRadius] = React.useState(20);
    const [width, setWidth] = React.useState(200);
    const [height, setHeight] = React.useState(200);
    
    const borderName = `border${getPosition(position)}`;
    const borderStyle = `${borderWidth}px ${style} ${hexToRgba(borderColor, borderOpacity)}`;
    
    function hexToRgba(shadowColor: string, shadowOpacity: string): string {
        const r = parseInt(shadowColor.substr(1, 2), 16);
        const g = parseInt(shadowColor.substr(3, 2), 16);
        const b = parseInt(shadowColor.substr(5, 2), 16);

        return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
    }
    function getPosition(position: string) {
        switch (position) 
        {
            case 'all': return '';
            default: return '-'+position;
        } 
    }
    async function OnButtonClick()
    {
        await navigator.clipboard.writeText(`${borderName}: ${borderStyle};` + `\n` + 
                                                 `border-radius: ${borderRadius}px;` + `\n` +
                                                 `width: ${width}px;` + `\n` +
                                                 `height: ${height}px;` + `\n`);
        const button = document.getElementById('button') as HTMLInputElement;
        button.innerText = 'Copied!';
        setTimeout(() => {
            button.innerText = "Copy";
        }, 1000);
    }
    
    return(
        <div className={styles.MainContainer}>
            <div className={styles.title}>
                <h1>Border Generator</h1>
                <h3>Generate <span style={{fontWeight: 'bold'}}>Soft</span>-UI Border CSS code</h3>
            </div>
            <div className={styles.body}>
                <div className={styles.result}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: `${width}px`,
                        height: `${height}px`,
                        position: 'relative',
                        margin: 'auto',
                        backgroundColor: '#66b7ed',
                        borderRadius: borderRadius,
                        borderTop: position == 'top' || position == 'all' ? borderStyle : undefined,
                        borderLeft: position == 'left' || position == 'all' ? borderStyle : undefined,
                        borderRight: position == 'right' || position == 'all' ? borderStyle : undefined,
                        borderBottom: position == 'bottom' || position == 'all' ? borderStyle : undefined,
                    }}/>
                </div>
                <div className={styles.container}>
                    <div className={styles.settings}>
                        <div className={styles.range}>
                            <label>Border Width:</label>
                            <input type="range" min="0" max="40" value={borderWidth}
                                   onChange={(e) => setBorderWidth(Number(e.target.value))}
                            />
                        </div>
                        <div className={styles.range}>
                            <label>Style:</label>
                            <select value={style} onChange={(e) => setStyle(e.target.value)}>
                                <option value="solid">solid</option>
                                <option value="dotted">dotted</option>
                                <option value="dashed">dashed</option>
                                <option value="double">double</option>
                                <option value="groove">groove</option>
                                <option value="ridge">ridge</option>
                                <option value="inset">inset</option>
                                <option value="hidden">hidden</option>
                                <option value="none">none</option>
                            </select>
                            <label>Position:</label>
                            <select value={position} onChange={(e) => setPosition(e.target.value)}>
                                <option value="all">all</option>
                                <option value="top">top</option>
                                <option value="right">right</option>
                                <option value="bottom">bottom</option>
                                <option value="left">left</option>
                            </select>
                        </div>
                        <div className={styles.color}>
                            <label>Border Color:</label>
                            <input type="color" value={borderColor}
                                   onChange={(e) => setBorderColor(e.target.value)}
                            />
                            <label>Opacity:</label>
                            <input type="range" min="0" max="1" step="0.05" value={borderOpacity}
                                   onChange={(e) => setBorderOpacity(e.target.value)}
                            />
                        </div>
                        <div className={styles.range}>
                            <label>Border Radius:</label>
                            <input type="range" min="0" max="100" value={borderRadius}
                                   onChange={(e) => setBorderRadius(Number(e.target.value))}
                            />
                        </div>
                        <div className={styles.range}>
                            <label>Width:</label>
                            <input type="range" min="100" max="300" value={width}
                                   onChange={(e) => setWidth(Number(e.target.value))}
                            />
                            <label>Height:</label>
                            <input type="range" min="100" max="300" value={height}
                                   onChange={(e) => setHeight(Number(e.target.value))}
                            />
                        </div>
                        <div className={styles.codeBlock}>
                            <button id={'button'} onClick={OnButtonClick}>Copy</button>
                            <pre>
                                <span style={{color: '#6fa2f2'}}>width</span><span style={{color: '#ccd5e3'}}>: {width}px;</span><br/>
                                <span style={{color: '#6fa2f2'}}>height</span><span style={{color: '#ccd5e3'}}>: {height}px;</span><br/>
                                <span style={{color: '#6fa2f2'}}>border-radius</span><span style={{color: '#ccd5e3'}}>: {borderRadius}px;</span><br/>
                                <span style={{color: '#6fa2f2'}}>{borderName}</span><span style={{color: '#ccd5e3'}}>: {borderStyle};</span><br/>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.socials}>
                    Made by <a href={"https://github.com/kostyabet"}>Konstantsin Betenya</a>
                </div>
                <div className={styles.watermark}>
                    Read more about <a href={"https://github.com/kostyabet/border_gen"}>Border Generator</a>
                </div>
            </footer>
        </div>
    )
}

export default BorderGenerator;