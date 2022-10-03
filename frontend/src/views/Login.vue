<template>
    <div class="container">
        <div class="login-content">
            <form>
                <h2>Login</h2>
                <table>
                    <tr><td>Email</td></tr>
                    <tr><td><input type="email" class="form-control" ></td></tr>
                    <tr><td>Password</td></tr>
                    <tr><td><input type="password" name="" id="" class="form-control"></td></tr>
                    <tr><td><input type="submit" value="submit"></td></tr>
                </table>
            </form>
        </div>
    </div>
</template>
<script scoped>
    import {ref} from 'vue'

    let username = ref('');
    let email = ref('');
    let password = ref('');

    function handleSubmit(){
        // const user = {
        //     username: this.username,
        //     email: this.email,
        //     password: this.password
        // };

    }
</script>
<style lang="scss">
    .login-content{

        h2{
            font-size: 28px;
            font-weight: bold;
            line-height: 28px;
            margin: 20px 0;
        }
        .form-control{
            width: 200px;
            color: #4E4C97;
            background: #fff;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;
            height: 40px;
            padding: 6px 12px;
            border-radius: 5px;
            border: 2px solid #F2F5F6;
            box-shadow: none;
        }

        .form-control:focus{
            border-color: rgba(78, 76, 151, 0.5);
            box-shadow: none;
        }

        input[type=submit], button{
            color: #fff;
            background-color: #4E4C97;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: capitalize;
            width: 130px;
            padding: 11px;
            margin: 0 10px 10px 0;
            border: 2px solid #4E4C97;
            border-radius: 15px;
            display: inline-block;
            transition: all 0.3s ease 0s;
            margin-top: 20px;
        }

        input[type=submit]:hover, button:hover{
            cursor: pointer;
            transform: scale(1.1);
            
        }
    }
</style>