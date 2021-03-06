import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck } from "@fortawesome/free-solid-svg-icons";






class App extends React.Component {

    state = {
        data: {},
        country: '',
    };

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData });
        this.setState({ country: country });
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
 
    render() {
      
        return (


            <div className={styles.container}>
             <div className={styles.fixed} animation-name= {styles.example}>Developed by Mehdi Khalfallah   
    <FontAwesomeIcon icon={faCheck} />
   

   </div>

                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country} />
 
            </div>
            
        );
    }
}

export default App;