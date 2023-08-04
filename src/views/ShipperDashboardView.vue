<!-- <template>

    <slot>
        <v-card>
            <v-layout>
                <v-navigation-drawer
                expand-on-hover
                rail
                >
                    <v-list>
                        <v-list-item
                        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        title="Sandra Adams"
                        subtitle="sandra_a88@gmailcom"
                        ></v-list-item>
                    </v-list>
            
                    <v-divider></v-divider>
            
                    <v-list density="compact" nav v-for="item in navItems" :key="item.title">
                        <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value"></v-list-item>
                        
                    </v-list>
                </v-navigation-drawer>
        
                <v-main style="height: 250px">
                
                    hey there
                </v-main>
            </v-layout>
        </v-card>

    </slot>
    
</template>

<script setup>
    const navItems = [
        { icon: '../assets/package-variant-closed-plus.svg', title: 'Booking shipments', value:'shipments' },
        { icon: 'mdi-truck-delivery', title: 'Viewing shipments', value:'shipments' }


    ]

</script> -->

<template>
    <div>
        <ShipperNavDrawer />
    </div>
</template>

<script setup>
import ShipperNavDrawer from '@/components/ShipperNavDrawer.vue';

</script>

