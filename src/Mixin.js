export const FruitMixin = {
	  data () {
        	return {
        		text : "Hello world",
        		fruits : ['Apple', 'Mango', 'banana'],
        		filterText : ''
        	}
        },computed: {
        	// value will only be precomputed if it matches the function 
        	filteredFruits(){
        		return this.fruits.filter((element) => {
        			return element.match(this.filterText);
        		})
        	}
        }
}