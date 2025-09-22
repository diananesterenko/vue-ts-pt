<template>
    <h4 v-if="applications.length === 0" class="text-center">There are no applications yet</h4>
    <table v-else class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>FIO</th>
                <th>Phone</th>
                <th>Sum</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(appl,idx) in applications" :key="appl.id">
                <td>{{ idx + 1 }}</td>
                <td>{{ appl.fio }}</td>
                <td>{{ appl.phone }}</td>
                <td>{{formatCurrency( appl.sum) }}</td>
                <td>
                    <AppStatus :type="appl.status as 'done' | 'active' | 'pending' | 'cancelled'" />
                </td>
                <td>
                    <router-link :to="{ name: 'Application', params: { id: appl.id } }">
                    <button class="btn primary">Open</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { formatCurrency } from '@/utils/currency-formater';
import AppStatus from '@/components/ui/AppStatus.vue';
const props = defineProps<{
    applications: Array<{
        id: number;
        fio: string;
        phone: string;
        sum: number;
        status: string;
    }>
}>()

</script>

<style scoped>

</style>