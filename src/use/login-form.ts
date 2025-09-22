import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { computed, watch } from 'vue';
import { useAuthStore } from '@/store/ modules/auth.module';
import {useRouter} from 'vue-router';


export function useLoginForm() {
    const authStore = useAuthStore();
    const router = useRouter();
const {handleSubmit, isSubmitting, submitCount}= useForm()
const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email', yup.string().required('Email is required').email('Email must be valid').trim());
const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password', yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').trim());

const isTooManyAttempts = computed(() => submitCount.value >= 3);

const onSubmit = handleSubmit( async values => {
    // console.log(values);
    try{
    await authStore.login({
            email: email.value as string,
            password: password.value as string
    });
    router.push('/');
    } catch (e) {
        
    }
})

watch(isTooManyAttempts, (val) => {
    if(val) {
        setTimeout(() => {
            submitCount.value = 0;
        }, 3000);
    }
})
return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    isSubmitting,
    isTooManyAttempts,
    onSubmit
  };
}