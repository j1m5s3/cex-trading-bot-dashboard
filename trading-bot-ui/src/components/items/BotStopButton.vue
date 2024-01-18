<template>
    <div class="container">
        <b-col>
            <VueLoadingButton aria-label="Stop Bot" class="button" @click.native="stopBot" :loading="isLoading">
                Stop
            </VueLoadingButton>
        </b-col>
    </div>
</template>

<script>
import VueLoadingButton from 'vue-loading-button';

export default {
    components: {
      VueLoadingButton,
    },
    props: {
      botId: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      async stopBot() {
        try {
          // Fetch data from API
          this.isLoading = true;
          setTimeout(async () => {
            //const response = await stopBot();
            console.log("botId --> ", this.botId);
            this.isLoading = false;
          }, 3000);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      },
    },
}

</script>