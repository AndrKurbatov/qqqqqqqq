;(function () {

    'use strict';

    angular.module('service.weather', [])
        .service('weather', weather);


    weather.$inject = ['http', 'url'];

    function weather(http, url) {


        return {

            getWeatherData: getWeatherData
        };

        /**
         * Function for getting weather
         * @returns {*}
         */
        function getWeatherData() {
            return http.get('https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt')
                .then(function(res) {
                    return res;
                })
        }
    }

})();