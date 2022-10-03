<template>
    <div class="container">
        <h2>Sign up</h2>
        <form action="mysite.php" @submit.prevent="handleSubmit">
            <table>
                <tr><td>Username</td></tr>
                <tr><td><input type="text" class="form-control" v-model="username"></td></tr>
                <tr><td>Email</td></tr>
                <tr><td><input type="email" class="form-control" v-model="email"></td></tr>
                <tr><td>Password</td></tr>
                <tr><td><input type="password" name="" id="" class="form-control" v-model="password"></td></tr>
                <tr><td><input type="submit" value="submit"></td></tr>
            </table>
        </form>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import {useRouter} from 'vue-router';

    let username = ref('');
    let email = ref('');
    let password = ref('');

    const router = useRouter();

    async function handleSubmit(){
        const response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
            headers: { 'Content-type' : 'application/json;'},
        })
        .then(response=>response.json());
        alert('Successfully created user!');
        router.push('/fantasy');

    }
</script>
<style lang="scss">
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
</style>