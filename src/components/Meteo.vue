<template>
  <div>
    <p> La météo de {{ location }}</p>
    <table>
      <tr>
        <th>Ville</th>
        <td>{{ city }}</td>
      </tr>
      <tr>
        <th>Pays</th>
        <td>{{ country }}</td>
      </tr>
      <tr>
        <th>Meteo</th>
        <td>{{ weather }}</td>
      </tr>
    </table>
  </div>

</template>

<script>

export default {
  name: 'Meteo',
  props: {
      location: String,
  },
    data: function() {
      return {
          city: '',
          country: '',
          weather: ''
      }
    },
  computed: {

  },
  methods: {
    getWeather: function () {
        const weatherData = this.$weatherApi.getWeather(this.location);
        weatherData.then((response) => {
            this.city = response.data.name
            this.country = response.data.sys.country
            this.weather = response.data.weather[0].description
            console.log(response.data)
        })
        document.title = `La météo de ${this.location} en temps réel ou presque`;
    }
  },
  created() {
    document.title = `La météo en temps réel ou presque`;
  },
    watch: {
        location: function (val) {
            this.getWeather();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
