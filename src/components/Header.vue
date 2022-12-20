<template>
    <div>
        <header class="header">
            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" style="color: white;">Market</a>

                    <Search />
                </div>                          
            </nav>
        </header>
    </div>
</template>

<script>
import Search from '@/components/Search'

export default {
    name: 'Header',
    components: {Search}
}
</script>