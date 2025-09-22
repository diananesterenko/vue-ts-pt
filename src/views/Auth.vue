<template>
    <form class="card" @submit.prevent="onSubmit">
        <h1>Login</h1>
        <div :class="['form-control', {invalid : eError}]">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" @blur="eBlur"/>
            <small v-if="eError">{{ eError }}</small>
        </div>
          <div :class="['form-control', {invalid : pError}]">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="password" @blur="pBlur"/>
            <small v-if="pError">{{ pError }}</small>
        </div>

        <button type="submit" class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Login</button>
        <span class="text-danger" v-if="isTooManyAttempts">Too many attempts. Please try again later.</span>
    </form>
</template>

<script setup lang="ts">
import { useLoginForm } from '@/use/login-form';
import { useRoute } from 'vue-router';
import { useMainStore } from '@/store';
import {error} from '@/utils/error';

const store = useMainStore();

const route = useRoute();
if (route.query.message) {
    store.setMessageWithTimeout(error(route.query.message as string), 'warning');   

}
const { email, eError, eBlur, password, pError, pBlur, isSubmitting, isTooManyAttempts, onSubmit } = useLoginForm();
</script>

<style scoped>

</style>