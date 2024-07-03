<template>

    <footer id="footer">
          
           <span id="currYear">{{getYear()}}</span>
   </footer>
   
   
     </template>
     
     <script>
     export default{
   
   methods:{
       getYear(){
           let current = new Date().getFullYear()
           return current
       }
   }
     
     }
     </script>