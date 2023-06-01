<template>
    <div class="skills section-item">
        <div class="container-fluid">
            <h2>Skills</h2>
            <div class="row">
                <div class="col-sm-12" v-for="skill in skills">
                    <div class="row" style="align-items: center;">
                        <div class="col-sm-12 col-md-6">{{ skill.name }}</div>
                        <div class="col-sm-12 col-md-6">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" v-bind:style="{ width: skill.level * 10 + '%' }"
                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ skill.level * 10 + '%' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            skills: [
                {
                    name: "Programming languages proficiency, Learning new skills",
                    level: 8.6
                },
                {
                    name: "Agile development experience, Problem-solving ability",
                    level: 7
                }
            ]
        }
    }
}
</script>