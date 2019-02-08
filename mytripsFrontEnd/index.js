new Vue({
		  el: '#app',
		  data () {
			return {
			  info: null
			}
		  },
		  mounted () {
			var config = {
			  headers: {
				'Content-Type': 'application/json',
			  }
			};		  
			axios
			  .get('http://localhost:58934/api/City/123', config)
			  .then(response => (this.info = response.data))			  
		  }
})