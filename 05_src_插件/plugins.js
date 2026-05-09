export default {
    install(Vue, x, y, z) {
        console.log(x + y + z)        

        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4)
        })

        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        })

        Vue.mixin({
            methods: {
                showName() {
                    alert(this.name)
                }
            },
            data() {
                return {
                    x: 15,
                    y: 20
                }
            }
        })

        Vue.prototype.hello = () => {alert('你好')}
    }
}