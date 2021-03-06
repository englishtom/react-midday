import React from 'react';

import {MiddayHeader, MiddaySection} from '../src/index';

const App = () => {

    const butterfly = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <g><g><path fill="white" d="M691,859c-22.9,0-44.6-5.7-65-17c-56-31.2-91.4-101.6-116.1-174.2c-47.8,92.2-138.7,224-252,182.7c-26.7-9.7-70.8-39.6-65.9-130c1.9-35.5,11.4-75,26-111.1c-69-55-188.8-168.6-205.8-281.3c-7.7-51.2,5.5-96.9,39.2-135.7c36.2-43.5,85.5-60,142.1-47.2c110.8,25.2,237.2,168,300.7,278.9c60.1-86,201-236.4,324.5-262.8c55.4-11.8,103.5,2.3,138.9,40.9c21.2,23.2,43.2,65.3,26.8,134.3C961,434.6,869.9,548.9,805.5,610.5c13.8,38,21.1,79.5,19.3,114.6c-3.2,64.5-33.4,109.2-84.9,125.8C723.1,856.3,706.8,859,691,859z M526.2,491.8c2.1,6.2,4,12,5.4,17.4l5,20.1c20.5,82.7,54.9,221.2,120.1,257.5c18.8,10.5,39.7,11.8,63.9,4c25.5-8.2,39.3-31.3,41.2-68.9c1.2-23.2-2.3-47.3-8.6-69.6c-1.6,0.8-3.1,1.5-4.5,2c-36.4,13.8-96.1,1.1-121.7-36.3c-9.7-14.1-27.5-52.1,15.6-100.1c22.8-23.4,51.3-29.3,79.2-17.1c20.3,8.9,38.7,26.9,54.2,50.1c54.7-56.9,134.1-157.1,148.7-237.7c5.4-29.9,1-52.2-13.8-68.2c-20.3-22.1-45.3-29-79.2-21.8C706.2,249.9,541.5,454.2,526.2,491.8z M271,647.1c-6.5,18.2-11.7,38.2-14.5,59.3c-2.3,17.1-7.4,73.7,22.9,84.8c83.3,30.3,173.3-141,203.7-215.7c-2.7-10.8-5.3-21.1-7.8-31l-4.9-19.8C448.8,439,297.3,233.5,179.4,206.8c-33.3-7.6-58.7,0.9-80.1,26.5c-21.8,25.1-29.8,52.9-24.9,85.4C87.7,406,186.3,501.5,247.7,552.2c19.8-29.7,43.4-51.4,68.4-57.6c14-3.4,49.3-6.8,75.3,36.7c0.4,0.7,0.8,1.5,1.2,2.2c24.3,49.3,8.6,87.5-14.3,106.8C350.1,664.2,306.9,666.5,271,647.1z M298.3,590c14.9,9.4,31.7,8.5,39.4,2.1c8.2-6.9,2.4-22.2-1.1-29.5c-3-4.8-5.3-6.7-6-7C324.1,556.3,311.5,569,298.3,590z M693.7,557.7c-1.3,0-2.6,0.9-5,3.3c-1.6,1.8-13.5,15.6-9.5,21.3c7.3,10.8,35.6,17.2,47.3,12.9c0.6-0.4,1.5-0.8,2.3-1.3c-10.7-18.1-22.3-31-32.1-35.3C695.5,558.1,694.6,557.7,693.7,557.7z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g> </svg>';

    const options = {
        sectionSelector: 'noon',
        headerClass: 'customOuter',
        innerClass: 'customInner',
        defaultClass: 'primary'
    };

    return (
        <div>

            <MiddayHeader tagName="nav" className="fixed" id="basic-nav">
                <a className="logo">Basic Logo</a>
            </MiddayHeader>

            <MiddayHeader tagName="nav" className="fixed" id="custom-nav">
                <div className="middayHeader default">
                    <a className="logo">Custom Logo</a>
                    <div className="img" dangerouslySetInnerHTML={{__html: butterfly}}></div>
                </div>

                <div className="middayHeader black">
                    <a className="logo">Custom Logo</a>
                    <div className="img" dangerouslySetInnerHTML={{__html: butterfly}}></div>
                </div>

                <div className="middayHeader blue">
                    <a className="logo">Custom Logo</a>
                    <div className="img" dangerouslySetInnerHTML={{__html: butterfly}}></div>
                </div>
            </MiddayHeader>

            <MiddayHeader tagName="nav" className="fixed" id="custom-nav-no-default">
                <div className="middayHeader black">
                    <a className="logo">Custom Logo</a>
                    <div className="img" dangerouslySetInnerHTML={{__html: butterfly}}></div>
                </div>
            </MiddayHeader>

            <MiddayHeader tagName="nav" className="fixed" id="options-nav" options={options}>
                <a className="logo">Options Logo</a>
            </MiddayHeader>

            <MiddaySection tagName="section" name="white">

            </MiddaySection>

            <MiddaySection tagName="section" name="black">

            </MiddaySection>

            <MiddaySection tagName="section" sections={{midday: 'blue', noon: 'blue'}}>

            </MiddaySection>

            <footer>
                <h1>This will just use the default header</h1>
            </footer>
        </div>
    )
}

export default App;
