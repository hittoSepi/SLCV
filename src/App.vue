<template>
	<div id="main">
		<banner></banner>
		<div class="container-fluid">
			<div class="row">

				<div class="col-sm-12 col-md-4">
					<profile></profile>
					<work-experience></work-experience>
					<skills></skills>
				</div>

				<div class="col-sm-12 col-md-8">
					<strengths></strengths>
					<hobbies></hobbies>
					<GitHub></GitHub>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Profile from "./components/Profile.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Skills from "./components/Skills.vue";
import Strengths from "./components/Strengths.vue";
import Hobbies from "./components/Hobbies.vue";
import GitHub from "./components/GitHub.vue";

export default {
	name: 'App',
    components: {
        Banner,
        Profile,
        WorkExperience,
        Skills,
        Strengths,
        Hobbies,
        GitHub
    },
}
</script>

