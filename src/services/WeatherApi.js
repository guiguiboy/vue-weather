import Vue from 'vue'
import axios from 'axios'

Vue.mixin( {
    beforeCreate() {
        const options = this.$options;
        if ( options.weatherApi )
            this.$weatherApi = options.weatherApi;
        else if ( options.parent && options.parent.$weatherApi )
            this.$weatherApi = options.parent.$weatherApi;
    }
} );

export default {
    async getWeather(city) {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=6737bce7cf9a4d31bac5e1c9d8e7fce3&q=${city}`);
    }
}
