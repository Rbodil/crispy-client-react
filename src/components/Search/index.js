import React, { useState } from 'react';




const Search = (props) => {

    const [representation, setRepresentation] = useState('');


    function checkForm(e) {

        e.preventDefault();
        let stateSelect = document.querySelector("#states").value;

        if (representation === "" || stateSelect === null) {
            window.alert("Looks like you forgot something! Make sure you've selected either senators or representatives and a state and try again!");
        }
        else {
            let formParams = "http://localhost:3001/"+representation + "/" + stateSelect;
            buildURL(formParams);
            console.log(formParams)
        }

    }
    async function buildURL(params){
        console.log('formParams:', params);
        fetch(params, {
            method: 'GET',
            mode:'cors',
            cache:'no-cache'
        }).then((response) => response.json())
        .then((data) => props.setResults(data.results));
            
    }

    return (
        <div className='py-5 text-center mx-auto'>
            <form name="searchForm" action='submit' onSubmit={checkForm} className='border-tertiary w-max border-2 px-5 py-2 text-sm'>
                <div className='w-full pb-3'>
                    <div className='pb-2'>
                        <label className='pr-3'>Please select one of the following:</label>
                        <input type='radio' name="representation" id='senators' onClick={() => setRepresentation('senators')} />
                        <label className='pl-1 pr-4' htmlFor="senators">Senators</label>
                        <input type='radio' name="representation" id='representatives' onClick={() => setRepresentation('representatives')} />
                        <label className='pl-1' htmlFor="representatives">Representatives</label>
                    </div>
                    <div>
                        <label className='pr-3'>Please choose your state</label>
                        <select id="states" className='text-darker' required>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AR">AR</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='border-white border-2 bg-red px-2 w-22 rounded-lg'>Go!</button>
            </form>
        </div>
    )
}

export default Search;


