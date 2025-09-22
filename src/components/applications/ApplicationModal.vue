<template>
    <form @submit.prevent="onSubmit"> 
        <div class="form-control" :class="{'invalid': fError}">
            <label for="fio">Fio</label>
            <input id="fio" name="fio" type="text" v-model="fio" @blur="fBlur"/>
            <small v-if="fError" class="text-danger">{{fError}}</small>
        </div>
        <div class="form-control" :class="{'invalid': pError}">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="text" v-model="phone" @blur="pBlur"/>
            <small v-if="pError">{{pError}}</small>
        </div>
        <div class="form-control" :class="{'invalid': suError}">
            <label for="sum">Sum</label>
            <input id="sum" name="sum" type="number" v-model.number="sum" @blur="suBlur"/>
            <small v-if="suError">{{suError}}</small>
        </div>
        <div class="form-control">
            <label for="status">Status</label>
            <select id="status" name="status" v-model="status">
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
            </select>
        </div>
        <button type="submit" class="btn primary" :disabled="isSubmitting">Create</button>
    </form>
</template>

<script setup lang="ts">
import { useApplicationForm } from '@/use/application-form';
import { useRequestStore } from '@/store/ modules/application.module';
    const requestStore = useRequestStore()

const emit = defineEmits<{
  (e: 'created'): void
}>();
const submit = async (values: { fio: string; phone: string; sum: number }) => {
    await requestStore.createRequest(values);
    emit('created')
};

const{ onSubmit ,isSubmitting, status, fio, fError, fBlur, phone, pError, pBlur, sum, suError, suBlur } = useApplicationForm(submit);
</script>

<style scoped>

</style>