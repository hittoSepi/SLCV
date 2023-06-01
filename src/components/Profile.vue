<template>
    <div id="profile" class="profile section-item">
        <div class="container-fluid">
            <h2>Profile</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            description:
                `As an experienced C# Software programmer with proficiency in many programming languages and Agile development, I possess strong problem-solving abilities and attention to detail.
                My hobbies of programming, gaming, and making music have enhanced my creativity and passion for web development.
                I am seeking a position in web development where I can utilize my skills and expertise to contribute to the growth of the organization.
                `
        }
    }
}

</script>