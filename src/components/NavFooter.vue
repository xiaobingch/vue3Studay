<template>
    <div>
        <div>Completed{{ isComplete }} / All{{ all }}</div>
        <div v-if="isComplete > 0">
            <button>Clear Completed</button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

    
    export default defineComponent({
        setup(){
            let isComplete = ref(1)
            let all = ref(3)

            return {
                isComplete,
                all
            }

        }
    })

</script>

<style scoped></style>