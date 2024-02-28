<template>
    <div>
        会员等级 ID
    </div>
</template>

<script>

export default {
    props:['id'],
    name:'MemberLevel',
    //路由钩子函数
    beforeRouteEnter:(to,from,next)=>{
        console.log("进入等级页面");
        next(vm=>{
            vm.getData();
        });
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log("离开等级页面");
        next();
    },
    methods:{
        getData:function(){
            this.axios({
                method:'get',
                //去Tomcat中放data.json
                url:'http://localhost:8080/data.json',
            }).then(function(repos){
                console.log(repos);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
}
</script>