
<template>
  <AppPage title="Help" back>
    <QuestionItem
      v-for="ques in questions"
      :key="ques.q"
      :question="ques" 
   ></QuestionItem>
  </AppPage>
</template>

<script setup lang="ts">
import AppPage from '@/components/ui/AppPage.vue';
import QuestionItem from '@/components/question/QuestionItem.vue';  


const questions=[
  {
    q: "How to create an account?",
    a: "To create an account, click on the 'Sign Up' button on the top right corner and fill in the required details."
  },
  {
    q: "How to reset my password?",
    a: "If you've forgotten your password, click on the 'Forgot Password' link on the login page and follow the instructions."
  },
  {
    q: "How to contact support?",
    a: "You can contact our support team by emailing support@example.com."
  }
]
</script>