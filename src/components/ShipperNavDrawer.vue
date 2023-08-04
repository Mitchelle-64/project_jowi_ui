<template>

    
    <v-card>
        <v-layout>
            <v-navigation-drawer
            expand-on-hover
            rail
            class="drawer"
            >
                <v-list class="text-white">
                    <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                    title="Sandra Adams"
                    subtitle="sandra_a88@gmailcom"
                    ></v-list-item>
                </v-list>
        
                <v-divider></v-divider>
        
                <v-list density="compact" nav v-for="item in navItems" :key="item.title">
                    <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value" class="text-white">
                        
                    
                    </v-list-item>
                    
                </v-list>
            </v-navigation-drawer>
    
            <v-main style="height: 100vh">
            
                hey there
            </v-main>
        </v-layout>
    </v-card>


    
</template>

<script setup>
    const navItems = [
        { icon: 'mdi-truck-plus', title: 'Booking shipments', value:'shipments' },
        { icon: 'mdi-truck-delivery', title: 'Viewing shipments', value:'shipments' },
        { icon: 'mdi-truck', title: 'Managing shipments', value:'shipments' },
        { icon: 'mdi-radar', title: 'Tracking shipments', value:'shipments' },
        { icon: 'mdi-truck-delivery', title: 'Quoting shipments', value:'shipments' },
        { icon: 'mdi-cash', title: 'Invoices and Payments', value:'shipments' },
        { icon: 'mdi-bell', title: 'Notification center', value:'shipments' },
        { icon: 'mdi-badge-account-outline', title: 'Transporter reviews', value:'shipments' },
        { icon: 'mdi-account', title: 'Manage progile', value:'shipments' },
        { icon: 'mdi-face-agent', title: 'Support', value:'shipments' },


    ]

</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

    .drawer {
        @apply bg-dark-blue

    }
</style>

 

  <!-- <template>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
          <v-list density="compact" nav v-for="item in navItems" :key="item.title">
              <v-list-item-content class="d-flex align-center">
                <v-list-item-icon>
                  <svg-icon :type="item.type" :path="item.path"></svg-icon>
                </v-list-item-icon>
                <v-list-item-title class="m-2">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 250px">
          hey there
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  
<script setup>
    import SvgIcon from '@jamescoyle/vue-icon';

    import { mdiPackageVariantPlus } from '@mdi/js';
    
    const navItems = [
        { type: 'mdi', path: mdiPackageVariantPlus, title: 'Booking shipments', value: 'shipments' },
        { icon: 'mdiPackageVariantPlus', title: 'Viewing shipments', value:'shipments' }
        // Add more items as needed
    ];
  </script>
  

   -->