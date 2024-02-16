<script>
export default {
    name: "AppHeader",
    data() {
        return {
            menuItems: [
                {
                    name: "Home",
                    route: "home",
                },
                {
                    name: "Projects",
                    route: "projects",
                },
                {
                    name: "About",
                    route: "about",
                },
            ],
            // menuItems: ["Home", "About", "Route"],
        };
    },
};
</script>

<template>
    <header class="bg-secondary-subtle">
        <div class="container">
            <nav class="d-flex justify-content-between align-items-center py-4">
                <div class="brand">Portfolio</div>
                <ul class="d-flex my-0 gap-4">
                    <li
                        v-for="(item, index) in menuItems"
                        :key="index"
                        class="list-unstyled"
                    >
                        <router-link
                            :to="{ name: item.route }"
                            class="nav-link"
                        >
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
