Vue.createApp({
    // この中に変数や関数、状態など定義する

    // データの定義はここ
    data(){
        return {
            // name: "satou",
            // message: "Hello Vue!!",
            // image: "./img/dog.jpg",
            // url: "https://seiyasatougit.github.io/WOODENSTUDIO/",
            // display:false,
            // time:10,
            // show:false
            
            // count:0,

        //     navigations: ["home","About","work","Access","Contact"],

        //     members: [
        //         {id: 1, name:"James", image:"./img/photo01.jpg", color:"lightblue"},
        //         {id: 2, name:"John", image:"./img/photo02.jpg", color:"lightgreen"},
        //         {id: 3, name:"olivia", image:"./img/photo03.jpg", color:"lightpink"},
        //         {id: 4, name:"kelly", image:"./img/photo04.jpg", color:"lightred"},
        //     ]
        // }
                // classActive: true,
                // open:false,


            // 変数の定義はここ
                name:"佐藤",
                message:"からのメッセージ",
                posts:[]

        }
    },
        // イベントが発生した時に呼び出す関数はここ
        methods: {
        //    increment(){
        //     this.count += 500000000000000;
        //    },
        //    decrement(){
        //     this.count -= 1;
        //    }
        // }
            // toggleActive(){
            //    this.classActive = !this.classActive
            // }
            // toggleButton(){
            //     this.open = !this.open
            // }



            onSubmit(){
                if (this.name === ""){
                    this.name = "名無し"
                }

                let post = {
                    name: this.name,
                    message: this.message,
                }

                this.posts.push(post)

            }
            
        },

        computed: {
            // 制御
            // 比較演算など行う
            checkMessage() {
                return this.message.length > 20
            }
        }

        

// mountの後ろで指定したHTMLの要素内でVueの機能が使える
}).mount("#app")

