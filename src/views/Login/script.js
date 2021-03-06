// import * as types from '../../store/types'
// import store from '../../store'

export default {
    name: 'login',
    data() {
        return {
            userForm: {
                account: '',
                password: ''
            }
        }
    },
    methods: {
        // 验证用户返回结果
        validateUser(res) {
            return new Promise((resolve, reject) => {
                // token保存
                // let token = 'asfesafeafefaefe'
                // sessionStorage.setItem('token', token)
                console.log(res, '===res===')
                sessionStorage.setItem('token', res.token)
                sessionStorage.setItem('user', res.data.account)
                sessionStorage.setItem('role', res.data.role)
                sessionStorage.setItem('id', res.data.id)
                    // store.commit(types.LOGIN, res.token)
                    // store.commit(types.LOGIN, token)
                resolve()
            })
        },
        submitUser() {
            let { account, password } = this.userForm
            if (!account) {
                this.$message.error('请先正确填写用户名')
                return
            }
            if (!password) {
                this.$message.error('请先正确填写密码')
                return
            }
            console.log('111')
            this.$post('/authority/login', { account, password }).then((res) => {
                console.log(res, '====')
                if (res.status === 'ok') {
                    this.validateUser(res)
                        .then(() => {
                            this.$emit('login-direct', this.$router.currentRoute.query.from)
                        })
                } else {
                    this.$message.error('密码或者账户错误，请重新输入！')
                }
            })
        }
    },
    mounted() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
    }
}