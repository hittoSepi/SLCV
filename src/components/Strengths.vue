<template>
    <div class="strengths section-item">
        <div class="container-fluid">
            <h2>
                Strengths
                <div class="pt-2 w-100 d-inline-block" v-for="strength in strengths">
                    <div class="badge badge-dark">{{ strength }}</div>
                </div>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "Strengths",
    data() {
        return {
            strengths: [
                "Problem-solving, Technical skills",
                "Detail-oriented, Self-motivated",
                "Adaptable, Fast learner",
            ]
        }
    }
}
</script>