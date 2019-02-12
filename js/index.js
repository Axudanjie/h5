//首页
let vm = new Vue({

    el:'#app',
    data:{
        arr:[true,false,false,false,false],
        chumoY:0,
        chumoEndY:0,
        page:0,
        play:true,
    },
    methods:{
// 修改数组中的值  让其依次显示
//鼠标事件 拖拽 
//判断条件 

// 触摸开始事件
        chumoStart($event){
            this.chumoY=$event.changedTouches[0].clientY;
        },
        chumoEnd($event){
            this.chumoEndY=$event.changedTouches[0].clientY;
            this.chumoEndY =this.chumoY - this.chumoEndY;
            if(this.chumoEndY>0){
                this.arr.splice(this.page,2,false,true);
                ++this.page;
                console.log(this.page);
                if(this.page==5){
                    this.page = 0;
                    this.arr = [true,false,false,false,false,false];
                    console.log(this.arr);
                    this.arr.pop();
                }
            }else if(this.chumoEndY<0){
                if(this.page === 0){
                    this.arr.shift();
                    this.arr.push(true);
                    console.log(this.arr);
                    this.page = 4;
                }else if(this.page>0){
                    this.arr.splice(this.page-1,2,true,false);
                    console.log(this.arr);
                    --this.page;
                }
            }
        },
        fn(){
            
            if(this.play){
                this.$refs.myMuise.pause();
                this.$refs.myMuiseBtn.style = 'animation-play-state:paused;';
            }else{
                this.$refs.myMuise.play();
                this.$refs.myMuiseBtn.style = '';
            }
            this.play=!this.play;
        }
    },

})