new Vue
({
    el: "#inp",

    data: 
    {
        name: "Saiful",
        Address: "Ajmer",
        link: "http://google.com",
        Counter: 0,
        x: 0,
        y: 0,
        attachRed: false,
        attachGreen: false,
        attachBlue: false,
        attachOrange: false,
        colo: "orange"
    },
    
    methods:
    {
        showInputAddress(event)
        {
            return this.Address = event.target.value;
        },

        echoName: function()
        {
            return this.name;
        },

        hover(event)
        {
            this.x  = event.clientX;
            this.y  = event.clientY;
        },

        dummy(event)
        {
            event.stopPropagation();
        }



    },

    computed:
    {
        color: function()
        {
            return  {
                       red: this.attachRed,
                       blue: !this.attachBlue
                     }
           
        }
    },

    watch:
    {
        Counter: function(value)
        {  $this = this;
            setTimeout(function(){
                $this.Counter = 0;
            },10000)
        }
    }
})