<template>
    <div id="banner" class="banner">

        <div class="parent">
            <div id="profile-name">{{ profile.name }}</div>
            <div id="profile-email">
                <img style="width:1.15rem;height:1.15rem" src="../assets/img/icon-email-24.png" />
                {{ profile.email }}
            </div>
            <div id="profile-image">
                <div class="banner__image" :style="{ backgroundImage: `url(${profilePicUrl})` }"></div>
            </div>
        </div>

    </div>
</template>

<script>

import profilePicUrl from '../assets/img/profile.jpg'


export default {
    name: "Banner",
    data() {
        return {
            profile: {
                name: "Seppo Laine",
                email: "hittoaeae@gmail.com",
            },
            profilePicUrl
        }
    },
}
</script>