<template>
    <div class="work-experience section-item">
        <div class="container-fluid">
            <h2>Work Experience</h2>
            <div class="row">
                <div class="col-md-12" v-for="workplace in workplaces">
                    <div class="work-experience__item">

                        <div class="work-experience__item__header__date__location">
                            <div class="work-experience__item__header__date__start">
                                <img class="icon"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVR4nGNgGEDwH4qppY4+FngxMDA8RtL0n0QM0uuJzwJKDP8PxY+o5l1y9NPNgv8U4oG3gFzwf9QCQmA0iAiC0SCiPIhoXlx7QhVQYrgHYY+OAgYEAACYhZ+h5OHc2gAAAABJRU5ErkJggg==">
                                {{ workplace.start_date }} -
                            </div>
                            <div class="work-experience__item__header__date__end">{{ workplace.end_date }}</div>
                            <img class="icon"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nOWUvUoDURCFvxcILhpBUbBQe8HKwiYGW7FUtDMhRd5ADfEBBHtBsJWAhSiIjRZaqU+gdtoYURt/kKhcOCtTbJa9u7HKgYGdv3Nm7+xe6AbkgQ3gCniVXQJ15TJhXoQ/bewFmMtC3hLRAVAAcrIZ4FC5VhqRfjP5akxdTTXPQJ+PQN1MHiIAyrKevygcqdaJJca1mgqG/M6c/a0RKSrmFp8Y4fHk5FciFuzeBAmFC0+MppoC+eUIgRXleuU/+ghcqKkoP9CxhOQ35ohmFTv3EVhX07aJOcKSzC55R7VrPgJjwDfwAQzF1A0Dn6odxRP7mmwzpmZLNQ1SYFKTvbWZbhx41588QUrsasLjiNyJcm4HqTGoa8ARLZj4krkiBsiIZUM2osU+KbZIh9AQ4Slwpuc9Oog88GB+tHvf2zMJpvTNfwHT/BOqsi7CL/HMbEFq6KbcAAAAAElFTkSuQmCC">
                            <span class="text-uppercase">{{ workplace.location }}</span>
                        </div>

                        <div class="work-experience__item__header">
                            <div class="work-experience__item__header__company">{{ workplace.company }}</div>
                            <div class="work-experience__item__header__job-title">{{ workplace.job_title }}</div>


                            <div class="work-experience__item__header__desc">{{ workplace.desc }}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WorkExperience",
    data() {
        return {
            workplaces: [
                {
                    company: "Avenla Oy",
                    job_title: "C# Software Programmer",
                    desc: "Various .NET Core and JavaScript Programming work, mostly things on the Frontend side.",
                    location: "Lahti, Finland",
                    start_date: "03/2018",
                    end_date: "06/2018"
                },
                {
                    company: "Codalia Oy",
                    job_title: "Programmer",
                    desc: "I programmed the CRM software for Telemarketing company from start to finish and completed a degree in data science with an apprenticeship contract.",
                    location: "Lahti, Finland",
                    start_date: "05/2016",
                    end_date: "03/2018",
                }
            ]
        }
    }
} 
</script>
