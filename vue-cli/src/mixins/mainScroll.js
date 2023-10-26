export default function (refValue) {
    return {
        mounted() {
            this.$bus.$on('setMainScroll', this.handleSetMainScroll);
            window.addEventListener('scroll', this.handleMainScroll, true);
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll');
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll);
        },
        methods: {
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop
            }
        }
    }
}