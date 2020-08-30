import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function ChromeComponent(){
    const[url,setUrl] = useState('https://duckduckgo.com/search.html?width=200&duck=yes&prefill=Search DuckDuckGo');

    return(
        <React.Fragment>
            <div className={`ml-5 mr-5 mt-3 mb-1`}>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">URL : </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={url} placeholder='Type a URL'/>
                </InputGroup>
            </div>
            <div className={`embed-responsive embed-responsive-16by9`}>
                <embed  className={`embed-responsive-item`} src={url} allowfullscreen></embed>
            </div>
        </React.Fragment>
    )

}

export default ChromeComponent; 